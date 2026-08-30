/**
 * MEC Intelligent AI Website Assistant & School Concierge
 * Upgraded Conversational Co-Pilot with Intent Recognition, Deep-Link Smart Navigation,
 * Visual Spotlight Highlighting, Rich Visual Cards, Lead Capture, and Voice Controls.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FaTimes, FaPaperPlane, FaMicrophone, FaMicrophoneSlash, 
  FaVolumeUp, FaVolumeMute, FaSearch, FaDownload, FaEnvelope, 
  FaWhatsapp, FaPhone, FaCompass, FaGraduationCap, FaCalculator,
  FaCheckCircle, FaExclamationCircle, FaGlobe, FaMapMarkerAlt,
  FaMinus, FaExpand, FaArrowRight, FaCrosshairs, FaRobot,
  FaTrashAlt
} from 'react-icons/fa';
import { processUserQuery } from '../../ai/aiIntentEngine';
import { useAINavigation } from '../../hooks/useAINavigation';
import { MEC_CORE_FACTS } from '../../ai/aiKnowledgeEngine';
import '../../css/ai-chatbot.css';

const SESSION_STORAGE_KEY = 'mec_ai_concierge_history';
const CONVERSATION_CONTEXT_KEY = 'mec_ai_concierge_context';

export const AIChatbot = ({ externalOpen, externalStarterQuery, onExternalHandled } = {}) => {
  const location = useLocation();
  const { navigateToSection } = useAINavigation();

  // State Management
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ parentName: '', phone: '', email: '', childGrade: '', message: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const initialWelcomeMessage = {
    id: 'welcome-msg',
    sender: 'bot',
    text: "Hello! Welcome to Moi Educational Centre. I am the MEC ASSISTANT. I can answer questions about any topic on our website (fees, payment modes, curricula, admission steps, open careers, campus tour) and take you directly to that exact page. What would you like to explore?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    source: { type: 'MEC Official Website', name: 'MEC Assistant Welcome', url: '/' },
    actions: [
      { label: 'View 2026 Fees →', type: 'navigate', route: '/admissions/fees' },
      { label: 'Mode of Payment →', type: 'navigate', route: '/admissions/fees#payment-channels' },
      { label: 'Admission Steps →', type: 'navigate', route: '/admissions/admission-process#admissions-timeline' },
      { label: 'Careers & Vacancies →', type: 'navigate', route: '/about-MEC/vacancies' },
      { label: 'Pre-School CBC →', type: 'navigate', route: '/education/pre-school' },
      { label: 'Campus Location →', type: 'navigate', route: '/contact#location' }
    ]
  };

  // Restore or initialize messages
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [initialWelcomeMessage];
  });

  // Conversation Context Memory
  const [conversationContext, setConversationContext] = useState(() => {
    try {
      const saved = sessionStorage.getItem(CONVERSATION_CONTEXT_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  const messagesEndRef = useRef(null);
  const speechRecognitionRef = useRef(null);
  const handleSendMessageRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2400);
  };

  // Clear Chat History
  const handleClearChat = () => {
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(CONVERSATION_CONTEXT_KEY);
    } catch (e) {
      console.error(e);
    }
    setConversationContext({});
    setSearchFilter('');
    setIsSearching(false);
    setMessages([
      {
        ...initialWelcomeMessage,
        id: `welcome-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    showToast('Chat history cleared ✓');
  };

  // Sync to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  useEffect(() => {
    try {
      sessionStorage.setItem(CONVERSATION_CONTEXT_KEY, JSON.stringify(conversationContext));
    } catch (e) {
      console.error(e);
    }
  }, [conversationContext]);

  // External open trigger from teaser
  useEffect(() => {
    if (externalOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      if (onExternalHandled) onExternalHandled();
    }
  }, [externalOpen]);

  // External starter query from teaser quick actions
  useEffect(() => {
    if (externalStarterQuery && isOpen) {
      setInputMessage(externalStarterQuery);
      const t = setTimeout(() => {
        if (handleSendMessageRef.current) {
          handleSendMessageRef.current(externalStarterQuery);
        }
        if (onExternalHandled) onExternalHandled();
      }, 300);
      return () => clearTimeout(t);
    }
  }, [externalStarterQuery, isOpen]);

  // Auto-scroll messages to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Dynamic Contextual Starter Chips based on current route
  const getContextualStarterChips = () => {
    const p = location.pathname.toLowerCase();
    if (p.includes('/fees')) {
      return [
        { label: 'Mode of Payment?', query: 'What are the accepted modes of fee payment?' },
        { label: 'M-Pesa Paybill?', query: 'How do I pay fees via M-Pesa?' },
        { label: 'Grade 5 Tuition?', query: 'What is the fee for Grade 5?' },
        { label: 'Senior School (Grade 10)?', query: 'What are the Grade 10 Senior School fees?' },
        { label: 'Cambridge Fees?', query: 'How much are Cambridge International fees?' }
      ];
    } else if (p.includes('/admission')) {
      return [
        { label: 'Mode of Payment?', query: 'How do we pay school fees and assessment fees?' },
        { label: 'Required Documents?', query: 'What documents are required for admission?' },
        { label: 'Admission Steps?', query: 'What are the steps to join MEC in 2026?' },
        { label: 'Start Online Application', query: 'I want to fill the admission application form' }
      ];
    } else if (p.includes('/vacancies')) {
      return [
        { label: 'Open Positions?', query: 'What job vacancies are currently available at MEC?' },
        { label: 'How to Apply?', query: 'How do I apply for a teaching vacancy at MEC?' },
        { label: 'Recruitment Email?', query: 'What is the HR recruitment email address?' }
      ];
    } else if (p.includes('/contact')) {
      return [
        { label: 'Where is Campus?', query: 'Where is Moi Educational Centre located?' },
        { label: 'Admissions Phone?', query: 'What is the direct phone number for admissions?' },
        { label: 'Book a Tour', query: 'Can I book a campus tour?' }
      ];
    } else if (p.includes('/education')) {
      return [
        { label: 'Pre-School Programme?', query: 'Tell me about the Early Years and Pre-School programme' },
        { label: 'CBC vs Cambridge?', query: 'What is the difference between CBC and Cambridge at MEC?' },
        { label: 'Senior School Pathways?', query: 'What pathways exist in Senior School Grade 10?' },
        { label: 'Age Placement?', query: 'My child was born in 2021, which class can they join?' }
      ];
    } else if (p.includes('/extra-curricular')) {
      return [
        { label: 'Heated Pool?', query: 'Do you have a heated swimming pool?' },
        { label: 'Robotics Lab?', query: 'Tell me about the VEX Robotics and STEM Lab' },
        { label: 'Music Academy?', query: 'What instruments are taught in the Music Academy?' }
      ];
    }
    return [
      { label: 'Mode of Payment?', query: 'What is the mode of payment for fees?' },
      { label: '2026 Fee Structure', query: 'What are the fees for 2026?' },
      { label: 'Careers & Vacancies', query: 'What career opportunities exist at MEC?' },
      { label: 'How to Apply?', query: 'How do I apply for 2026 admission?' },
      { label: 'Pre-School CBC', query: 'Tell me about the Pre-School programme' },
      { label: 'Campus Map', query: 'Where is MEC located?' }
    ];
  };

  // Voice Speech-to-Text Initialization
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-KE';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
        handleSendMessageRef.current?.(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      speechRecognitionRef.current = recognition;
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!speechRecognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      speechRecognitionRef.current.start();
    }
  };

  // Optional Text-to-Speech Output
  const speakText = (text) => {
    if (!isTtsEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[*_#`]/g, ''));
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Dispatch Action Helper
  const handleActionClick = (action) => {
    if (action.type === 'navigate' && action.route) {
      const [path, hash] = action.route.split('#');
      navigateToSection({
        page: path,
        section: hash,
        highlight: true,
        title: action.label || "Here's what you were looking for"
      });
    } else if (action.type === 'contact') {
      if (action.whatsappUrl) {
        window.open(action.whatsappUrl, '_blank');
      } else if (action.phone) {
        window.location.href = `tel:${action.phone.replace(/\s+/g, '')}`;
      } else if (action.email) {
        window.location.href = `mailto:${action.email}`;
      }
    }
  };

  // Core Query Execution
  const handleSendMessage = (textToSend = null) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    // Process through NLU Intent Engine
    setTimeout(() => {
      const response = processUserQuery(text, conversationContext, location.pathname);

      const botMsgId = `bot-${Date.now()}`;
      const botMsg = {
        id: botMsgId,
        sender: 'bot',
        text: response.answer,
        confidence: response.confidence,
        source: response.source,
        navigation: response.navigation,
        actions: response.actions,
        visualCard: response.visualCard,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);

      // Update Context
      if (response.updatedContext) {
        setConversationContext(prev => ({ ...prev, ...response.updatedContext }));
      }

      // Log Analytics
      try {
        const stats = JSON.parse(localStorage.getItem('mec_ai_analytics') || '{"queries": 0, "intents": {}}');
        stats.queries += 1;
        localStorage.setItem('mec_ai_analytics', JSON.stringify(stats));
      } catch (e) {
        console.error(e);
      }

      // Automatically navigate if high confidence navigation action is returned
      if (response.navigation && response.navigation.enabled && response.navigation.route) {
        const [path, hash] = response.navigation.route.split('#');
        navigateToSection({
          page: path,
          section: hash,
          highlight: response.navigation.highlight,
          title: "Here's what you were looking for"
        });
      }

      // Text-to-Speech
      speakText(response.answer);
    }, 300);
  };
  handleSendMessageRef.current = handleSendMessage;

  // Handle Lead Submission
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem('mec_leads_db') || '[]');
      leads.push({ ...leadForm, date: new Date().toISOString() });
      localStorage.setItem('mec_leads_db', JSON.stringify(leads));
      setLeadSubmitted(true);
      setTimeout(() => {
        setShowLeadModal(false);
        setLeadSubmitted(false);
        setLeadForm({ parentName: '', phone: '', email: '', childGrade: '', message: '' });
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  // Export Conversation Summary
  const exportConversation = () => {
    const transcript = messages.map(m => `[${m.timestamp}] ${m.sender.toUpperCase()}: ${m.text}`).join('\n\n');
    const blob = new Blob([`MOI EDUCATIONAL CENTRE (MEC) - AI ADMISSIONS CONCIERGE TRANSCRIPT\n\n${transcript}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MEC_Admissions_Enquiry_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered Messages during Chat Search
  const displayMessages = searchFilter
    ? messages.filter(m => m.text.toLowerCase().includes(searchFilter.toLowerCase()))
    : messages;

  return (
    <>
      {/* ─── Floating Launcher Button (Icon Only, Stacked Above WhatsApp) ─── */}
      {!isOpen && (
        <div className="mec-ai-launcher-container">
          <button 
            className="mec-ai-launcher-btn" 
            onClick={() => { setIsOpen(true); setIsMinimized(false); }}
            aria-label="Open MEC ASSISTANT"
          >
            <FaGraduationCap className="mec-ai-launcher-icon" />
            <span className="mec-ai-launcher-pulse" />
          </button>
          <div className="mec-ai-launcher-tooltip">
            <span className="mec-ai-tooltip-title">MEC ASSISTANT</span>
            <span className="mec-ai-tooltip-sub">Admissions & School Help</span>
          </div>
        </div>
      )}

      {/* ─── Main Chat Window ───────────────────────────────────── */}
      {isOpen && (
        <div className={`mec-ai-window ${isMinimized ? 'is-minimized' : ''}`}>
          
          {/* Header */}
          <div className="mec-ai-header">
            <div className="mec-ai-header-left">
              <div className="mec-ai-avatar">
                <FaGraduationCap />
              </div>
              <div className="mec-ai-header-info">
                <h3>MEC ASSISTANT</h3>
                <p>
                  <span className="mec-ai-online-dot" />
                  Official School Assistant
                </p>
              </div>
            </div>

            <div className="mec-ai-header-actions">
              <button 
                className={`mec-ai-icon-btn ${isSearching ? 'is-active' : ''}`}
                onClick={() => setIsSearching(!isSearching)}
                title="Search in conversation"
                aria-label="Search conversation"
              >
                <FaSearch />
              </button>
              <button 
                className={`mec-ai-icon-btn ${isTtsEnabled ? 'is-active' : ''}`}
                onClick={() => setIsTtsEnabled(!isTtsEnabled)}
                title="Toggle voice speech"
                aria-label="Toggle voice output"
              >
                {isTtsEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
              </button>
              <button 
                className="mec-ai-icon-btn"
                onClick={handleClearChat}
                title="Clear chat history"
                aria-label="Clear chat history"
              >
                <FaTrashAlt />
              </button>
              <button 
                className="mec-ai-icon-btn"
                onClick={exportConversation}
                title="Export conversation transcript"
                aria-label="Export conversation"
              >
                <FaDownload />
              </button>
              <button 
                className="mec-ai-icon-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label="Toggle window size"
              >
                {isMinimized ? <FaExpand /> : <FaMinus />}
              </button>
              <button 
                className="mec-ai-icon-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="mec-ai-toast-banner">
              <FaCheckCircle size={13} />
              <span>{toastMessage}</span>
            </div>
          )}

          {!isMinimized && (
            <>
              {/* Contextual Page Strip */}
              <div className="mec-ai-page-context-bar">
                <div className="mec-ai-page-context-left">
                  <FaCrosshairs style={{ color: '#0F3D91' }} />
                  <span>Browsing: <strong>{location.pathname === '/' ? 'Home Campus' : location.pathname}</strong></span>
                </div>
                <button 
                  onClick={() => setShowLeadModal(true)}
                  style={{
                    background: 'none', border: 'none', color: '#7720E9',
                    fontWeight: '700', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <FaEnvelope /> Request Callback
                </button>
              </div>

              {/* In-Chat Search Drawer */}
              {isSearching && (
                <div className="mec-ai-search-drawer">
                  <FaSearch style={{ color: '#94a3b8', fontSize: '12px' }} />
                  <input
                    type="text"
                    className="mec-ai-search-input"
                    placeholder="Search in this conversation..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                  />
                  {searchFilter && (
                    <button 
                      onClick={() => setSearchFilter('')} 
                      style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              )}

              {/* Message List Area */}
              <div className="mec-ai-messages-area">
                {displayMessages.map((msg) => (
                  <div key={msg.id} className={`mec-ai-msg ${msg.sender}`}>
                    <div className="mec-ai-msg-bubble">
                      <div>{msg.text}</div>

                      {/* Visual Fee Breakdown Card */}
                      {msg.visualCard && msg.visualCard.type === 'fee_breakdown' && (
                        <div className="mec-ai-visual-card">
                          <div className="mec-ai-card-title">
                            <FaCalculator /> {msg.visualCard.grade}
                          </div>
                          <div className="mec-ai-fee-grid">
                            <div className="mec-ai-fee-item">
                              <span>Term 1:</span>
                              <strong>{msg.visualCard.term1}</strong>
                            </div>
                            <div className="mec-ai-fee-item">
                              <span>Term 2:</span>
                              <strong>{msg.visualCard.term2}</strong>
                            </div>
                            <div className="mec-ai-fee-item">
                              <span>Term 3:</span>
                              <strong>{msg.visualCard.term3}</strong>
                            </div>
                            <div className="mec-ai-fee-item">
                              <span>Annual:</span>
                              <strong>{msg.visualCard.annualTotal}</strong>
                            </div>
                          </div>
                          {msg.visualCard.inclusions && (
                            <div className="mec-ai-fee-total">
                              <span>Covers: {msg.visualCard.inclusions}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Visual Age Placement Card */}
                      {msg.visualCard && msg.visualCard.type === 'age_placement' && (
                        <div className="mec-ai-visual-card">
                          <div className="mec-ai-card-title">
                            <FaGraduationCap /> Age {msg.visualCard.age} Assessment Placement
                          </div>
                          <div style={{ fontSize: '12px', color: '#1e293b', marginBottom: '6px' }}>
                            <strong>Suggested Stage:</strong> {msg.visualCard.suggestedStage}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>
                            <strong>Curriculum:</strong> {msg.visualCard.curriculum} ({msg.visualCard.ageRange})
                          </div>
                        </div>
                      )}

                      {/* Visual Location Card */}
                      {msg.visualCard && msg.visualCard.type === 'location_map' && (
                        <div className="mec-ai-visual-card">
                          <div className="mec-ai-card-title">
                            <FaMapMarkerAlt /> {msg.visualCard.address}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>
                            <div><strong>GPS:</strong> {msg.visualCard.gps}</div>
                            <div><strong>Hours:</strong> {msg.visualCard.hours}</div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons Underneath Answer */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mec-ai-actions-wrap">
                          {msg.actions.map((act, actIdx) => (
                            <button
                              key={actIdx}
                              className={`mec-ai-action-btn ${actIdx === 0 ? 'primary' : ''}`}
                              onClick={() => handleActionClick(act)}
                            >
                              {act.type === 'navigate' && <FaArrowRight size={10} />}
                              {act.type === 'contact' && act.whatsappUrl && <FaWhatsapp size={12} />}
                              {act.type === 'contact' && act.phone && <FaPhone size={10} />}
                              <span>{act.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mec-ai-msg-meta">
                      <span>{msg.timestamp}</span>
                      {msg.source && (
                        <span className="mec-ai-source-tag">
                          <FaCheckCircle size={9} /> {msg.source.name || msg.source.type}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Dynamic Contextual Starter Suggestion Chips */}
              <div className="mec-ai-starter-chips">
                {getContextualStarterChips().map((chip, i) => (
                  <button 
                    key={i} 
                    className="mec-ai-chip"
                    onClick={() => handleSendMessage(chip.query)}
                  >
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>

              {/* Input Bar with Voice & Send Controls */}
              <div className="mec-ai-input-bar">
                <button
                  className={`mec-ai-btn-circle mec-ai-btn-voice ${isListening ? 'listening' : ''}`}
                  onClick={toggleVoiceInput}
                  title={isListening ? "Listening... Click to stop" : "Voice input"}
                  aria-label="Toggle voice microphone"
                >
                  {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                </button>

                <input
                  type="text"
                  className="mec-ai-input-field"
                  placeholder="Ask MEC ASSISTANT about fees, admissions, curriculum..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                />

                <button
                  className="mec-ai-btn-circle mec-ai-btn-send"
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </>
          )}

          {/* ─── Conversational Lead Capture Modal ───────────────── */}
          {showLeadModal && (
            <div className="mec-ai-lead-modal">
              <div className="mec-ai-lead-card">
                <h4>Request Admissions Callback</h4>
                <p>Have an Admissions Officer contact you directly with personalized information.</p>
                {leadSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '20px 0', color: '#10b981', fontWeight: '700' }}>
                    <FaCheckCircle size={32} style={{ marginBottom: 10 }} />
                    <div>Thank you! Our Admissions Office will reach out shortly.</div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit}>
                    <input
                      type="text"
                      className="mec-ai-lead-input"
                      placeholder="Parent/Guardian Full Name *"
                      required
                      value={leadForm.parentName}
                      onChange={(e) => setLeadForm({ ...leadForm, parentName: e.target.value })}
                    />
                    <input
                      type="tel"
                      className="mec-ai-lead-input"
                      placeholder="Phone Number (e.g. 07XX XXX XXX) *"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      className="mec-ai-lead-input"
                      placeholder="Email Address"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    />
                    <input
                      type="text"
                      className="mec-ai-lead-input"
                      placeholder="Child's Desired Grade (e.g. Grade 5 / Year 3)"
                      value={leadForm.childGrade}
                      onChange={(e) => setLeadForm({ ...leadForm, childGrade: e.target.value })}
                    />
                    <textarea
                      className="mec-ai-lead-input"
                      rows={2}
                      placeholder="Any specific questions or preferred tour dates?"
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    />
                    <div className="mec-ai-lead-actions">
                      <button type="submit" className="mec-ai-lead-submit">Submit Request</button>
                      <button type="button" className="mec-ai-lead-cancel" onClick={() => setShowLeadModal(false)}>Cancel</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AIChatbot;
