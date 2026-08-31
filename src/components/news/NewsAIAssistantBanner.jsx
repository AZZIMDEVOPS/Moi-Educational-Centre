import React from "react";
import { FaRobot, FaArrowRight, FaCommentDots } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useHeroIntro } from "../../context/HeroIntroContext";

const AI_PROMPTS = [
  "Show me the latest sports achievements",
  "Tell me about the Vienna Music Tour",
  "What STEM breakthroughs happened at MEC?",
  "Upcoming events this term"
];

const NewsAIAssistantBanner = ({ onSelectCategory, onSearchChange }) => {
  const { triggerAssistantAction } = useHeroIntro() || {};

  const handlePromptClick = (promptText) => {
    if (promptText.includes("sports")) {
      onSelectCategory?.("sports");
    } else if (promptText.includes("Vienna")) {
      onSearchChange?.("Vienna");
    } else if (promptText.includes("STEM")) {
      onSelectCategory?.("stem");
    } else if (promptText.includes("events")) {
      onSelectCategory?.("events");
    }

    if (typeof triggerAssistantAction === "function") {
      triggerAssistantAction(promptText);
    }
  };

  return (
    <section className="nr-ai-banner" aria-label="AI News Assistant">
      <div className="nr-ai-banner-inner">
        <div className="nr-ai-banner-copy">
          <div className="nr-ai-banner-eyebrow">
            <BsStars style={{ color: "#D8B4FE" }} />
            <span>MEC AI NEWS CONCIERGE</span>
          </div>

          <h3>Looking for a specific story, competition result, or campus event?</h3>

          <p>
            Ask the MEC AI Assistant to summarize recent achievements, locate specific articles, or answer questions about school life and admissions.
          </p>

          <div className="nr-ai-suggestions">
            {AI_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="nr-ai-chip-prompt"
                onClick={() => handlePromptClick(prompt)}
              >
                💬 {prompt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="nr-ai-concierge-chip"
            style={{ padding: "14px 28px", fontSize: "14.5px" }}
            onClick={() => {
              if (typeof triggerAssistantAction === "function") {
                triggerAssistantAction("Give me a summary of what's happening at Moi Educational Centre this month.");
              }
            }}
          >
            <FaRobot className="nr-ai-chip-sparkle" size={17} />
            <span>Ask MEC Assistant</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAIAssistantBanner;
