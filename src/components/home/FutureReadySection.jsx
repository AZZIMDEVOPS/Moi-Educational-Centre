import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaLaptopCode, FaBrain, FaSparkles } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const HEADLINES = {
  en: [
    {
      id: 0,
      tag: "FUTURE LEADERSHIP",
      prefix: "Empowering",
      highlight: "Future-Ready",
      suffix: "Leaders",
      sub: "We integrate modern technology, AI literacy, and innovation into our curriculum to prepare students for a rapidly evolving world."
    },
    {
      id: 1,
      tag: "INNOVATION & DESIGN",
      prefix: "Nurturing",
      highlight: "Innovative",
      suffix: "Visionaries",
      sub: "Fostering creative inquiry, entrepreneurial problem-solving, and scientific discovery from early childhood through senior school."
    },
    {
      id: 2,
      tag: "COMPUTATIONAL MASTERY",
      prefix: "Inspiring",
      highlight: "Next-Gen",
      suffix: "Problem Solvers",
      sub: "Equipping young minds with algorithmic thinking, robotics engineering, and collaborative design-thinking capabilities."
    },
    {
      id: 3,
      tag: "GLOBAL IMPACT",
      prefix: "Cultivating",
      highlight: "Global",
      suffix: "Digital Pioneers",
      sub: "Bridging classroom excellence with ethical technology leadership, international standards, and lifelong curiosity."
    }
  ],
  sw: [
    {
      id: 0,
      tag: "UONGOZI WA HATIMA",
      prefix: "Kuwezesha Viongozi",
      highlight: "Waliotayarishwa kwa Hatima",
      suffix: "",
      sub: "Tunajumuisha teknolojia ya kisasa na uvumbuzi katika mtaala wetu ili kuwatayarisha wanafunzi kwa ulimwengu unaobadilika haraka."
    },
    {
      id: 1,
      tag: "UBUNIFU NA MAONO",
      prefix: "Kukuza Wanamitazamo",
      highlight: "Wavumbuzi na Wabunifu",
      suffix: "",
      sub: "Kukuza fikra za uvumbuzi, utatuzi wa matatizo ya kijasiriamali, na ugunduzi wa kisayansi kutoka utotoni hadi shule ya upili."
    },
    {
      id: 2,
      tag: "UWEZO WA KIKOMPYUTA",
      prefix: "Kuhamasisha Watatuzi",
      highlight: "wa Kizazi Kijacho",
      suffix: "",
      sub: "Kuwawezesha vijana ujuzi wa fikra za algoriti, uhandisi wa roboti, na ubunifu wa pamoja wa kiteknolojia."
    },
    {
      id: 3,
      tag: "ATHARI ZA KIMATAIFA",
      prefix: "Kulea Waanzilishi",
      highlight: "wa Kidijitali wa Kimataifa",
      suffix: "",
      sub: "Kuunganisha ubora wa masomo na uongozi wa kimaadili wa teknolojia katika viwango vya kimataifa."
    }
  ]
};

const FutureReadySection = () => {
  const { language } = useLanguage();
  const currentHeadlines = HEADLINES[language] || HEADLINES.en;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState("active"); // 'active' | 'exiting' | 'entering'

  useEffect(() => {
    const timer = setInterval(() => {
      // Start exit animation
      setAnimState("exiting");
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % currentHeadlines.length);
        setAnimState("entering");
        
        setTimeout(() => {
          setAnimState("active");
        }, 50);
      }, 350);
    }, 3800);

    return () => clearInterval(timer);
  }, [currentHeadlines.length]);

  const handleSelectHeadline = (idx) => {
    if (idx === currentIndex) return;
    setAnimState("exiting");
    setTimeout(() => {
      setCurrentIndex(idx);
      setAnimState("entering");
      setTimeout(() => {
        setAnimState("active");
      }, 50);
    }, 250);
  };

  const activeHeadline = currentHeadlines[currentIndex] || currentHeadlines[0];

  const cardsData = {
    en: [
      {
        icon: <FaBrain />,
        title: "AI Literacy",
        p: "Introducing students to the fundamentals of Artificial Intelligence, ethics, and critical thinking in the digital age."
      },
      {
        icon: <FaLaptopCode />,
        title: "Coding & Development",
        p: "From block-based coding for juniors to Python and web development for seniors, we build digital creators."
      },
      {
        icon: <FaRobot />,
        title: "Robotics & Innovation",
        p: "Hands-on experience with robotics kits and engineering challenges to foster problem-solving skills."
      }
    ],
    sw: [
      {
        icon: <FaBrain />,
        title: "Ujuzi wa AI",
        p: "Kuwatambulisha wanafunzi kwa misingi ya Akili Mnemba, maadili, na fikra tunduizi katika enzi hii ya kidijitali."
      },
      {
        icon: <FaLaptopCode />,
        title: "Usimbuaji na Maendeleo",
        p: "Kuanzia uandishi wa kodi kwa watoto wadogo hadi Python na maendeleo ya tovuti kwa wakubwa, tunajenga wabunifu wa kidijitali."
      },
      {
        icon: <FaRobot />,
        title: "Roboti na Uvumbuzi",
        p: "Uzoefu wa vitendo na zana za roboti na changamoto za uhandisi ili kukuza ujuzi wa kutatua matatizo."
      }
    ]
  };

  const cards = cardsData[language] || cardsData.en;
  const ctaText = language === "sw" ? "Gundua Mtaala Wetu" : "Explore Our Curriculum";

  return (
    <>
      {/* Luminous Floating Spheres */}
      <div className="future-bg-vectors-canvas" aria-hidden="true">
        <div className="future-bg-float future-float-1"></div>
        <div className="future-bg-float future-float-2"></div>
        <div className="future-bg-float future-float-3"></div>
        <div className="future-bg-float future-float-4"></div>
        <div className="future-bg-float future-float-5"></div>
        <div className="future-bg-float future-float-6"></div>
      </div>
      
      <div style={{ height: '2rem' }}></div>

      {/* Animated Rotating Headlines Header */}
      <div className="future-header" aria-live="polite">
        
        {/* Category Tag Pill */}
        <div className={`future-tag-pill future-anim-${animState}`}>
          <span className="future-tag-dot"></span>
          <span>{activeHeadline.tag}</span>
        </div>

        {/* Shifting Animated Heading */}
        <div className="future-headline-rotator">
          <h2 className={`future-headline-item future-anim-${animState}`}>
            {activeHeadline.prefix}{" "}
            <span className="future-highlight-word">{activeHeadline.highlight}</span>{" "}
            {activeHeadline.suffix}
          </h2>
        </div>

        {/* Synchronized Subtitle */}
        <p className={`future-subtext-anim future-anim-${animState}`}>
          {activeHeadline.sub}
        </p>

        {/* 4-Item Indicator Bars */}
        <div className="future-headline-indicators" role="tablist" aria-label="Headline switcher">
          {currentHeadlines.map((item, idx) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={currentIndex === idx}
              aria-label={`Switch to headline ${idx + 1}: ${item.highlight}`}
              className={`headline-indicator-dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => handleSelectHeadline(idx)}
            />
          ))}
        </div>

      </div>

      <div style={{ height: '2rem' }}></div>

      {/* Feature Cards Grid */}
      <div className="future-cards">
        {cards.map((card, idx) => (
          <div className="future-card" key={idx}>
            <div className="icon-box">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.p}</p>
          </div>
        ))}
      </div>

      <div style={{ height: '2rem' }}></div>

      {/* CTA Button */}
      <div className="future-cta">
        <Link to="/education/CBC/Junior-Secondary" className="btn-glow">
          {ctaText}
        </Link>
      </div>
    </>
  );
};

export default FutureReadySection;
