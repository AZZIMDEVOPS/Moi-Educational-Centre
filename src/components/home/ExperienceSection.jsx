import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/hero-vid.mp4";
import heroPoster from "../../assets/hero-poster2.jpg";
import { useLanguage, translations } from "../../context/LanguageContext";

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const stats = [
    { value: "40+", label: language === "en" ? "Years of excellence" : "Miaka ya ubora" },
    { value: "3.5k", label: language === "en" ? "Learners inspired" : "Wanafunzi waliohamasishwa" },
    { value: "98%", label: language === "en" ? "Pass rate" : "Kiwango cha ufaulu" },
  ];

  return (
    <section className="experience-section reveal">
      <div className="experience-bg-video">
        <video autoPlay loop muted playsInline poster={heroPoster}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="experience-bg-overlay" />
      </div>

      <div className="inner-row experience-shell">
        <motion.div
          className="experience-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            {t.eyebrow}
          </span>
          <h2 className="section-heading section-heading-light">{t.title}</h2>
          <p className="section-subheading section-subheading-light">{t.text}</p>
          <ul className="experience-bullets">
            {t.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Link to="/about-MEC" className="btn-primary-hero-v3 experience-cta">
            {t.cta}
          </Link>
        </motion.div>

        <motion.div
          className="experience-media"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="experience-video-frame experience-poster-frame">
            <img src={heroPoster} alt="Campus tour preview" />
          </div>

          <div className="experience-stats">
            {stats.map((stat, index) => (
              <div className="experience-stat-card" key={index}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
