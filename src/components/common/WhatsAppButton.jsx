import React, { useState } from 'react';

const WA_NUMBER = '254706280170';
const WA_MESSAGE = encodeURIComponent(
  'Hello MEC Admissions Team, I would like to learn more about admissions and book a school tour.'
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="wa-float-container">
      {/* Tooltip card — shows on hover */}
      {hovered && (
        <div className="wa-float-tooltip">
          <p className="wa-tooltip-title">Chat with Admissions</p>
          <p className="wa-tooltip-sub">Replies within a few minutes</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat with MEC Admissions on WhatsApp"
        className="wa-float-btn"
      >
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path
            d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15c0 2.2.6 4.3 1.7 6.1L2.5 27.5l6.6-1.7c1.7.9 3.7 1.4 5.9 1.4 6.9 0 12.5-5.6 12.5-12.5S21.9 2.5 15 2.5z"
            fill="#fff"
          />
          <path
            d="M20.8 17.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.4.3-.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"
            fill="#25D366"
          />
        </svg>

        {/* Pulse rings */}
        <span className="wa-ring-1" />
        <span className="wa-ring-2" />
      </a>

      <style>{`
        .wa-float-container {
          position: fixed;
          bottom: 74px;
          right: 28px;
          z-index: 900;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .wa-float-tooltip {
          background: rgba(10, 1, 24, 0.94);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          padding: 10px 14px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          line-height: 1.4;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          animation: waFadeInUp 0.2s ease;
          white-space: nowrap;
        }

        .wa-tooltip-title { font-weight: 700; margin: 0 0 2px; }
        .wa-tooltip-sub { opacity: 0.7; font-size: 10.5px; margin: 0; }

        .wa-float-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          text-decoration: none;
        }
        .wa-float-btn:hover {
          transform: scale(1.1);
        }

        .wa-ring-1, .wa-ring-2 {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.35);
          pointer-events: none;
        }
        .wa-ring-1 { inset: -5px; animation: waRing 3s ease-in-out infinite; }
        .wa-ring-2 { inset: -10px; animation: waRing 3s ease-in-out infinite 0.5s; border-color: rgba(37, 211, 102, 0.15); }

        @keyframes waRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes waFadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .wa-float-container { bottom: 70px; right: 16px; }
          .wa-float-btn { width: 46px; height: 46px; }
          .wa-float-btn svg { width: 22px; height: 22px; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
