import React, { useEffect, useRef, useState } from 'react';
import { useHeroIntro } from '../../context/HeroIntroContext';
import { FaSchool, FaArrowRight, FaTimes } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';
import '../../css/hero-teaser.css';

/**
 * MEC40AssistantTeaser
 * Cinematic AI Assistant reveal that emerges during hero immersion mode.
 * Displays a compact concierge card with the 40 Years welcome message
 * and quick-action buttons. Clicking any action or the expand button
 * opens the main chatbot interface.
 */

const QUICK_ACTIONS = [
  { label: 'Admissions',   query: 'How do I apply to MEC?' },
  { label: 'School Fees',  query: 'What are the 2026 school fees?' },
  { label: 'Curriculum',   query: 'Do you offer Cambridge and CBC?' },
  { label: 'Explore MEC',  query: 'Give me an overview of Moi Educational Centre.' },
];

const MEC40AssistantTeaser = ({ onOpenChatbot }) => {
  const { isAssistantTeaserOpen, setIsAssistantTeaserOpen, triggerAssistantAction, exitImmersion } = useHeroIntro();
  const [isVisible, setIsVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const teaserRef = useRef(null);

  // Staged appearance: icon → message → actions
  useEffect(() => {
    if (!isAssistantTeaserOpen) {
      setIsVisible(false);
      setMessageVisible(false);
      setActionsVisible(false);
      return;
    }

    const t1 = setTimeout(() => setIsVisible(true), 80);
    const t2 = setTimeout(() => setMessageVisible(true), 480);
    const t3 = setTimeout(() => setActionsVisible(true), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isAssistantTeaserOpen]);

  if (!isAssistantTeaserOpen) return null;

  const handleAction = (query) => {
    triggerAssistantAction(query);
    if (onOpenChatbot) onOpenChatbot(query);
  };

  const handleDismiss = () => {
    setIsAssistantTeaserOpen(false);
    exitImmersion();
  };

  return (
    <div
      ref={teaserRef}
      className={`mec-teaser-wrapper ${isVisible ? 'teaser-enter' : ''}`}
      role="complementary"
      aria-label="MEC Assistant welcome card"
    >
      {/* Card */}
      <div className={`mec-teaser-card ${messageVisible ? 'card-revealed' : ''}`}>

        {/* Dismiss */}
        <button
          className="teaser-dismiss-btn"
          onClick={handleDismiss}
          aria-label="Close MEC Assistant teaser"
        >
          <FaTimes size={11} />
        </button>

        {/* Header */}
        <div className="teaser-header">
          <div className="teaser-icon-ring">
            <FaSchool size={16} />
          </div>
          <div className="teaser-header-text">
            <span className="teaser-name">MEC ASSISTANT</span>
            <span className="teaser-status">
              <span className="teaser-pulse-dot" />
              Online
            </span>
          </div>
        </div>

        {/* 40 Years Badge */}
        <div className={`teaser-anniversary-pill ${messageVisible ? 'pill-revealed' : ''}`}>
          <LuSparkles size={11} />
          <span>Celebrating 40 Years of Excellence</span>
        </div>

        {/* Welcome Message */}
        <p className={`teaser-message ${messageVisible ? 'msg-revealed' : ''}`}>
          Welcome to <strong>Moi Educational Centre</strong>. I'm here to help you explore our programmes, admissions, fees, and everything MEC.
        </p>

        {/* Quick Actions */}
        <div className={`teaser-actions ${actionsVisible ? 'actions-revealed' : ''}`}>
          {QUICK_ACTIONS.map((action, i) => (
            <button
              key={action.label}
              className="teaser-action-chip"
              onClick={() => handleAction(action.query)}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {action.label}
              <FaArrowRight size={9} />
            </button>
          ))}
        </div>

        {/* Open full chat */}
        <button
          className="teaser-open-btn"
          onClick={() => handleAction('Hello! I want to learn more about MEC.')}
        >
          Open MEC Assistant
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default MEC40AssistantTeaser;
