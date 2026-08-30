/**
 * MEC AI Highlight & Navigation Context
 * Coordinates deep-link routing, smooth scrolling with sticky header offset,
 * visual spotlight glow, and auto-dismissing visual guidance.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes, FaCrosshairs, FaCheckCircle } from 'react-icons/fa';

const AIHighlightContext = createContext(null);

export const AIHighlightProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeHighlightId, setActiveHighlightId] = useState(null);
  const [highlightTitle, setHighlightTitle] = useState("Here's what you were looking for");
  const [spotlightRect, setSpotlightRect] = useState(null);
  const [isSpotlightVisible, setIsSpotlightVisible] = useState(false);
  const timerRef = useRef(null);

  // Clear highlight
  const clearHighlight = useCallback(() => {
    setActiveHighlightId(null);
    setIsSpotlightVisible(false);
    setSpotlightRect(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Highlight a specific DOM element by ID
  const highlightElement = useCallback((elementId, title = "Here's what you were looking for", durationMs = 6000) => {
    if (!elementId) return;
    const cleanId = elementId.replace(/^#/, '');
    const el = document.getElementById(cleanId);

    if (!el) {
      console.warn(`[MEC AI Navigator] Target element #${cleanId} not found in DOM.`);
      return false;
    }

    // Scroll smoothly with sticky header offset
    const navOffset = 90;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - navOffset);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    // Update highlight states
    setActiveHighlightId(cleanId);
    setHighlightTitle(title);
    setIsSpotlightVisible(true);

    // Compute spotlight coordinates
    const rect = el.getBoundingClientRect();
    setSpotlightRect({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    });

    // Accessible focus
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });

    // Auto-dismiss timer
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      clearHighlight();
    }, durationMs);

    return true;
  }, [clearHighlight]);

  // Navigate to page and section
  const navigateToSection = useCallback(({ page, section, highlight = true, title = "Here's what you were looking for", delayMs = 250 }) => {
    const targetPath = page || location.pathname;
    const cleanSectionId = section ? section.replace(/^#/, '') : null;

    if (location.pathname !== targetPath) {
      navigate(targetPath + (cleanSectionId ? `#${cleanSectionId}` : ''));
      // Wait for destination page component to mount
      setTimeout(() => {
        if (cleanSectionId && highlight) {
          highlightElement(cleanSectionId, title);
        }
      }, delayMs + 150);
    } else {
      if (cleanSectionId && highlight) {
        highlightElement(cleanSectionId, title);
      }
    }
  }, [location.pathname, navigate, highlightElement]);

  // Handle URL hash on initial load or route change
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace(/^#/, '');
      const timer = setTimeout(() => {
        highlightElement(hashId, "Here's what you were looking for");
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, highlightElement]);

  // Global escape key and click-outside dismissal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSpotlightVisible) {
        clearHighlight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSpotlightVisible, clearHighlight]);

  return (
    <AIHighlightContext.Provider
      value={{
        activeHighlightId,
        isSpotlightVisible,
        highlightTitle,
        spotlightRect,
        highlightElement,
        navigateToSection,
        clearHighlight
      }}
    >
      {children}

      {/* ─── Global AI Spotlight Overlay & Guidance Badge ─── */}
      {isSpotlightVisible && activeHighlightId && (
        <div
          className="mec-ai-spotlight-banner"
          style={{
            position: 'fixed',
            top: '86px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: '#0F3D91',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '999px',
            boxShadow: '0 8px 24px rgba(15, 61, 145, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: "'Outfit', sans-serif",
            animation: 'spotlightBannerFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
          role="status"
          aria-live="polite"
        >
          <span style={{ display: 'flex', alignItems: 'center', color: '#38bdf8', fontSize: '15px' }}>
            <FaCrosshairs />
          </span>
          <span>{highlightTitle}</span>
          <button
            onClick={clearHighlight}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              marginLeft: '6px',
              fontSize: '11px'
            }}
            aria-label="Dismiss spotlight"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* Injected CSS for AI Spotlight Pulse */}
      <style>{`
        @keyframes spotlightBannerFadeIn {
          from { opacity: 0; transform: translate(-50%, -12px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @keyframes aiPulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(119, 32, 233, 0.6), 0 0 25px rgba(56, 189, 248, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(119, 32, 233, 0), 0 0 35px rgba(56, 189, 248, 0.6); }
          100% { box-shadow: 0 0 0 0 rgba(119, 32, 233, 0), 0 0 25px rgba(56, 189, 248, 0.4); }
        }

        #${activeHighlightId} {
          position: relative !important;
          animation: aiPulseGlow 2s infinite ease-in-out !important;
          outline: 2px solid #38bdf8 !important;
          outline-offset: 4px !important;
          border-radius: 12px !important;
          transition: all 0.3s ease !important;
        }
      `}</style>
    </AIHighlightContext.Provider>
  );
};

export const useAIHighlight = () => {
  const context = useContext(AIHighlightContext);
  if (!context) {
    throw new Error('useAIHighlight must be used within an AIHighlightProvider');
  }
  return context;
};
