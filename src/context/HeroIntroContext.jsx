import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * MEC Hero Cinematic Intro State Machine
 * Coordinates opening headline sequences, header retraction, hero immersion mode,
 * and staged MEC AI Assistant reveal.
 *
 * Timing sequence (first visit only, per session):
 *  0.15s → HEADINGS_REVEAL  (hero text animates)
 *  2.70s → IMMERSION        (header retracts, scroll nav hides)
 *  5.20s → AI_REVEAL        (teaser card emerges)
 * 16.00s → NORMAL           (auto-settle if user hasn't interacted)
 */

export const HERO_INTRO_STATES = {
  LOADING:         'loading',
  HEADINGS_REVEAL: 'headingsReveal',
  IMMERSION:       'immersion',
  AI_REVEAL:       'aiReveal',
  NORMAL:          'normal'
};

const HeroIntroContext = createContext(null);

/** Checks accessibility + session flags synchronously */
const shouldSkipIntro = () => {
  try {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    if (sessionStorage.getItem('mecHeroIntroSeen') === 'true') return true;
  } catch (_) {}
  return false;
};

export const HeroIntroProvider = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  /*
   * Always start as LOADING. In the useEffect we decide immediately whether
   * to run the sequence or jump straight to NORMAL. This avoids the lazy
   * initializer race condition with sessionStorage.
   */
  const [introState, setIntroState]                   = useState(HERO_INTRO_STATES.LOADING);
  const [isHeaderRetracted, setIsHeaderRetracted]     = useState(false);
  const [isAssistantTeaserOpen, setIsAssistantTeaserOpen] = useState(false);
  const [assistantPendingQuery, setAssistantPendingQuery] = useState(null);

  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
  }, []);

  /* ── Exit immersion: restore full site ─────────────────── */
  const exitImmersion = useCallback(() => {
    clearTimers();
    setIntroState(HERO_INTRO_STATES.NORMAL);
    setIsHeaderRetracted(false);
    setIsAssistantTeaserOpen(false);
    try { sessionStorage.setItem('mecHeroIntroSeen', 'true'); } catch (_) {}
  }, [clearTimers]);

  const skipIntro = useCallback(() => exitImmersion(), [exitImmersion]);

  const triggerAssistantAction = useCallback((query) => {
    setAssistantPendingQuery(query);
    exitImmersion();
  }, [exitImmersion]);

  const clearPendingQuery = useCallback(() => setAssistantPendingQuery(null), []);

  /* ── Main sequence controller ───────────────────────────── */
  useEffect(() => {
    // Not on home page — instant normal
    if (!isHome) {
      setIntroState(HERO_INTRO_STATES.NORMAL);
      setIsHeaderRetracted(false);
      setIsAssistantTeaserOpen(false);
      return;
    }

    // Already seen intro this session or reduced motion — instant normal
    if (shouldSkipIntro()) {
      setIntroState(HERO_INTRO_STATES.NORMAL);
      return;
    }

    clearTimers();

    // Phase 1: Start heading animations (near-instant)
    const t1 = setTimeout(() => {
      setIntroState(HERO_INTRO_STATES.HEADINGS_REVEAL);
    }, 200);

    // Phase 2: Retract header → hero immersion
    const t2 = setTimeout(() => {
      setIntroState(HERO_INTRO_STATES.IMMERSION);
      setIsHeaderRetracted(true);
    }, 2800);

    // Phase 3: AI teaser reveals
    const t3 = setTimeout(() => {
      setIntroState(HERO_INTRO_STATES.AI_REVEAL);
      setIsAssistantTeaserOpen(true);
      try { sessionStorage.setItem('mecHeroIntroSeen', 'true'); } catch (_) {}
    }, 5400);

    // Phase 4: Auto-settle back to normal if untouched
    const t4 = setTimeout(() => {
      setIsAssistantTeaserOpen(false);
      setIntroState(HERO_INTRO_STATES.NORMAL);
      setIsHeaderRetracted(false);
    }, 16500);

    timersRef.current = [t1, t2, t3, t4];

    return () => clearTimers();
    // Only run once on home mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]);

  /* ── Scroll / mouse listeners ──────────────────────────── */
  useEffect(() => {
    const isActive = introState === HERO_INTRO_STATES.IMMERSION ||
                     introState === HERO_INTRO_STATES.AI_REVEAL;
    if (!isActive) return;

    const onScroll = () => {
      if (window.scrollY > 40) exitImmersion();
    };

    const onMouseMove = (e) => {
      if (e.clientY < 48 && isHeaderRetracted) {
        setIsHeaderRetracted(false);
      }
    };

    window.addEventListener('scroll',    onScroll,    { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll',    onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [introState, isHeaderRetracted, exitImmersion]);

  const isImmersionMode = introState === HERO_INTRO_STATES.IMMERSION ||
                          introState === HERO_INTRO_STATES.AI_REVEAL;

  return (
    <HeroIntroContext.Provider
      value={{
        introState,
        isImmersionMode,
        isHeaderRetracted,
        isAssistantTeaserOpen,
        assistantPendingQuery,
        setIsAssistantTeaserOpen,
        skipIntro,
        exitImmersion,
        triggerAssistantAction,
        clearPendingQuery,
      }}
    >
      {children}
    </HeroIntroContext.Provider>
  );
};

/** Safe hook — returns no-op fallback if used outside provider */
export const useHeroIntro = () => {
  const ctx = useContext(HeroIntroContext);
  if (!ctx) {
    return {
      introState:             'normal',
      isImmersionMode:        false,
      isHeaderRetracted:      false,
      isAssistantTeaserOpen:  false,
      assistantPendingQuery:  null,
      setIsAssistantTeaserOpen: () => {},
      skipIntro:              () => {},
      exitImmersion:          () => {},
      triggerAssistantAction: () => {},
      clearPendingQuery:      () => {},
    };
  }
  return ctx;
};
