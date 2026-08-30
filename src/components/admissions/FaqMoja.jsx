import React from 'react';
import { FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';

const FaqMoja = ({ item, isOpen, onToggle }) => {
  if (!item) return null;

  return (
    <article className={`faq-card ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-card-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <div className="faq-card-question-wrap">
          <span className="faq-card-cat-badge">{item.category}</span>
          <h3 className="faq-card-title">{item.question}</h3>
        </div>
        <div className="faq-card-icon-wrap" aria-hidden="true">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>

      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className="faq-card-collapse"
      >
        <div className="faq-card-body-overflow">
          <div className="faq-card-body">
            {/* Standard paragraphs */}
            {item.answer?.straight && item.answer.straight.map((para, idx) => (
              <p key={idx} className="faq-paragraph">{para}</p>
            ))}

            {/* Structured Sub-Lists with Headings */}
            {item.answer?.list && (
              <div className="faq-structured-list">
                {item.answer.list.map((subItem) => (
                  <div key={subItem.id || subItem.title} className="faq-structured-block">
                    <h4 className="faq-structured-title">{subItem.title}</h4>
                    {subItem.explanations && (
                      <ul className="faq-structured-subitems">
                        {subItem.explanations.map((exp, eIdx) => (
                          <li key={eIdx}>{exp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Checklist / Bullet Points */}
            {item.answer?.simple_list && (
              <ul className="faq-checklist">
                {item.answer.simple_list.map((point, pIdx) => (
                  <li key={pIdx} className="faq-checklist-item">
                    <FaCheckCircle className="faq-check-icon" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Extra Important Note */}
            {item.answer?.extra && (
              <div className="faq-extra-note">
                <p>{item.answer.extra}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default FaqMoja;