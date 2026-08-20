import { useState, useEffect, useRef } from 'react';
import { FaTimes, FaPaperPlane, FaLanguage, FaRobot } from 'react-icons/fa';
import { useLanguage, translations } from '../../context/LanguageContext';
import '../../App.css';

/* ─── Knowledge Base & Rules ─────────────────────────────────────── */
const CONFIRMED_FACTS = {
  name: "Moi Educational Centre (MEC)",
  location: "Mai Mahiu Road, Nairobi West, Nairobi, Kenya",
  levels: "Primary School, Junior School, and Senior School (CBC-aligned)",
  admissionsPolicy: "Non-sectarian. Entry is determined by academic performance, a personal interview with the Rector, the most recent school report, and a confidential report from the applicant's current headmaster.",
  musicAcademy: "A dedicated programme using music as a tool for all-round child development, delivered through mentorship and personal development.",
  technology: "MEC integrates technology into the classroom as a foundation of 21st-century learning.",
  contactEmail: "info@moieducentre.ac.ke",
  contactPhone: "0702 090 213",
  whatsappUrl: "https://wa.me/254702090213",
};

const QUICK_ACTIONS = [
  { label: '🎓 Admissions', msg: 'What are the admission requirements?' },
  { label: '📚 Academics', msg: 'Tell me about your academic programmes' },
  { label: '💰 Fee Info', msg: 'What are the school fees?' },
  { label: '🎵 Music Academy', msg: 'Tell me about the Music Academy' },
  { label: '📍 Location', msg: 'Where is MEC located?' },
  { label: '📞 Contact Us', msg: 'How can I contact MEC?' },
];

const HANDOFF_TEXT = {
  en: "That's a great question for our admissions team directly — I can connect you on WhatsApp right now at https://wa.me/254702090213, or you can reach them at info@moieducentre.ac.ke / 0702 090 213. Would you like me to open the WhatsApp chat for you?",
  sw: "Hili ni swali zuri sana kwa timu yetu ya uandikishaji — ninaweza kukuunganisha kwenye WhatsApp sasa hivi kupitia https://wa.me/254702090213, au unaweza kuwasiliana nao kwa info@moieducentre.ac.ke / 0702 090 213."
};

// Internal unhandled query logger for marketing review
function logUnhandledQuery(query) {
  if (typeof window !== 'undefined') {
    const logs = JSON.parse(localStorage.getItem('mec_unhandled_queries') || '[]');
    logs.push({ query, timestamp: new Date().toISOString() });
    localStorage.setItem('mec_unhandled_queries', JSON.stringify(logs));
    console.log('[MEC Assistant Logger] Logged unhandled question for marketing office review:', query);
  }
}

function getResponse(text, language) {
  const t = text.toLowerCase().trim();
  const isEn = language === 'en';

  // 1. Specific child safety boundary check
  if (t.match(/my (child|son|daughter|kid|boy|girl)|learner|student|grade|report card|disciplinary|medical|sick|result/i) && t.match(/specific|personal|issue|problem|grade|marks|fail|absent|sick|behavior|punish/i)) {
    return isEn 
      ? "For queries regarding a specific learner's personal, academic, or medical details, please contact our school administration directly at 0702 090 213 or info@moieducentre.ac.ke so our team can assist you securely."
      : "Kwa maswali kuhusu taarifa binafsi za mwanafunzi, tafadhali wasiliana na uongozi wa shule moja kwa moja kwa 0702 090 213 au info@moieducentre.ac.ke.";
  }

  // 2. Exact fees boundary check
  if (t.match(/exact fee|how much|fee breakdown|discount|scholarship|payment plan|quote|tuition cost/i)) {
    return HANDOFF_TEXT[language];
  }

  // 3. General fee structure
  if (t.match(/fee|cost|price|ada|pay/i)) {
    return isEn
      ? "MEC fees vary by grade level across Primary, Junior, and Senior School. For a confirmed fee structure or specific breakdown, I can connect you directly with our admissions office via WhatsApp (https://wa.me/254702090213) or phone at 0702 090 213."
      : "Ada za MEC zinatofautiana kulingana na darasa. Kwa mchanganuo rasmi wa ada, unaweza kuwasiliana na afisi ya uandikishaji kwa 0702 090 213 au info@moieducentre.ac.ke.";
  }

  // 4. Admissions requirement & process
  if (t.match(/admiss|apply|enroll|register|requirement|interview|rector|uandikish/i)) {
    return isEn
      ? "MEC has a non-sectarian admissions policy. Entry is determined by academic performance, a personal interview with the Rector, the learner's most recent school report, and a confidential report from their current headmaster. Would you like to reach our admissions team at info@moieducentre.ac.ke or 0702 090 213?"
      : "Uandikishaji wa MEC unazingatia utendaji wa kitaaluma, mahojiano na Rektor, ripoti ya hivi karibuni ya shule, na ripoti ya siri kutoka kwa mwalimu mkuu wa sasa. Wasiliana nasi kwa info@moieducentre.ac.ke au 0702 090 213.";
  }

  // 5. Academics & CBC Curriculum
  if (t.match(/cbc|academic|curriculum|pathway|primary|junior|senior|grade/i)) {
    return isEn
      ? "MEC offers CBC-aligned pathways across Primary School, Junior School, and Senior School. We focus on competency-based learning, 21st-century technology integration, and holistic talent development."
      : "MEC inafuata mtaala wa CBC katika Shule ya Msingi, Junior, na Senior School kwa kutilia mkazo teknolojia na umahiri wa wanafunzi.";
  }

  // 6. Music Academy
  if (t.match(/music|academy|piano|instrument|sing|violin|guitar/i)) {
    return isEn
      ? "Our dedicated Music Academy uses music as a tool for all-round child development, delivered through mentorship and personal development. Learners build creativity, discipline, and performance skills."
      : "Chuo chetu cha Muziki kinatumia muziki kukuza maendeleo kamili ya mtoto kupitia ulezi na mafunzo ya kibinafsi.";
  }

  // 7. Technology integration
  if (t.match(/tech|computer|robot|coding|digital|laptop|ipad|21st/i)) {
    return isEn
      ? "Technology integration is a core foundation of 21st-century learning at MEC. We integrate digital tools into everyday classroom learning to prepare learners for the future."
      : "MEC inajumuisha teknolojia darasani kama msingi wa elimu ya karne ya 21.";
  }

  // 8. Clubs & Co-curricular
  if (t.match(/club|co-curricular|sport|activity|extra/i)) {
    return isEn
      ? "We offer a vibrant selection of clubs across Sports & Athletics, Performing & Creative Arts, STEM & Innovation, and Leadership & Service. Which grade level and interests does your learner have? I can suggest the right club for them."
      : "Tuna vilabu vya michezo, sanaa, STEM, na uongozi. Mtoto wako yuko darasa gani na anapenda nini ili nikupendekeze klabu inayofaa?";
  }

  // 9. Location & Contact
  if (t.match(/location|where|address|contact|phone|email|whatsapp|direction|wapi|simu/i)) {
    return isEn
      ? "Moi Educational Centre is located along Mai Mahiu Road in Nairobi West, Nairobi, Kenya. You can reach us via email at info@moieducentre.ac.ke, call 0702 090 213, or message us on WhatsApp at https://wa.me/254702090213."
      : "Moi Educational Centre ipo Mai Mahiu Road, Nairobi West, Nairobi, Kenya. Barua pepe: info@moieducentre.ac.ke, Simu: 0702 090 213, WhatsApp: https://wa.me/254702090213.";
  }

  // 10. Greetings
  if (t.match(/hello|hi|hey|mambo|habari|hujambo|good morning|good afternoon/i)) {
    return isEn
      ? "Hello! Welcome to Moi Educational Centre. How can I help you today regarding admissions, academics, school activities, or general inquiries?"
      : "Jambo! Karibu Moi Educational Centre. Ninawezaje kukusaidia leo kuhusu uandikishaji, masomo, au maelezo ya shule?";
  }

  // 11. Human / WhatsApp request
  if (t.match(/human|person|speak to someone|agent|staff|talk to a person|whatsapp/i)) {
    return HANDOFF_TEXT[language];
  }

  // Unhandled query logging
  logUnhandledQuery(text);
  return HANDOFF_TEXT[language];
}

/* ─── Component ─────────────────────────────────────────────── */
const AIChatbot = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].chatbot;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: 1, text: t.greeting, sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const messagesEndRef = useRef(null);
  const proactiveTimer = useRef();

  // Update greeting on language change
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].sender === 'bot') {
        return [{ id: 1, text: t.greeting, sender: 'bot' }];
      }
      return prev;
    });
  }, [language, t.greeting]);

  // Proactive popup after 9 seconds
  useEffect(() => {
    if (isOpen) return;
    proactiveTimer.current = setTimeout(() => setShowProactive(true), 9000);
    return () => clearTimeout(proactiveTimer.current);
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const open = () => { setIsOpen(true); setShowProactive(false); clearTimeout(proactiveTimer.current); };

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getResponse(text, language);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <>
      {/* Proactive bubble */}
      {showProactive && !isOpen && (
        <div onClick={open} style={{
          position: 'fixed', bottom: 100, right: 28, zIndex: 899,
          background: 'rgba(18,2,42,0.96)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16,
          padding: '14px 18px', color: '#fff', cursor: 'pointer',
          fontFamily: "'Outfit', sans-serif", fontSize: 13,
          boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
          animation: 'chatFadeIn 0.3s ease',
          maxWidth: 220,
        }}>
          👋 {language === 'en' ? 'Need help? Chat with our AI Assistant!' : 'Unahitaji msaada? Zungumza na AI wetu!'}
        </div>
      )}

      {/* Toggle button */}
      <div
        className={`chatbot-toggle pulse${isOpen ? ' hide' : ''}`}
        onClick={open}
        role="button"
        tabIndex={0}
        aria-label={language === 'en' ? 'Open MEC AI Assistant' : 'Fungua Msaidizi wa AI'}
        onKeyDown={e => e.key === 'Enter' && open()}
      >
        <FaRobot size={20} />
        <span className="tooltip">{language === 'en' ? 'MEC AI' : 'AI ya MEC'}</span>
      </div>

      {/* Chat window */}
      <div className={`chatbot-window${isOpen ? ' open' : ''}`} style={{ bottom: '136px', right: '28px' }}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <FaRobot />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>MRC AI Assistant</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>MEC Resource Centre · Online</div>
            </div>
          </div>
          <div className="header-actions">
            <button onClick={toggleLanguage} title={t.languageLabel} className="lang-toggle-btn">
              <FaLanguage size={18} />
            </button>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat"><FaTimes /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.sender === 'bot' && <div className="avatar"><FaRobot /></div>}
              <div className="bubble" style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="avatar"><FaRobot /></div>
              <div className="bubble typing"><span /><span /><span /></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick actions */}
        {messages.length <= 2 && (
          <div className="chatbot-suggestions" style={{ flexWrap: 'wrap', gap: 6, padding: '8px 12px' }}>
            {QUICK_ACTIONS.map(a => (
              <button key={a.label} onClick={() => handleSend(a.msg)} style={{ fontSize: 12 }}>
                {a.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder={t.placeholder}
            aria-label="Message input"
          />
          <button onClick={() => handleSend()} aria-label="Send message"><FaPaperPlane /></button>
        </div>
      </div>

      <style>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default AIChatbot;
