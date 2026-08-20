import { FaGraduationCap, FaShieldAlt, FaUsers, FaLightbulb, FaHeart, FaHandsHelping } from 'react-icons/fa';

const themes = [
  { icon: <FaGraduationCap />, title: "Academic Excellence" },
  { icon: <FaShieldAlt />, title: "Integrity & Values" },
  { icon: <FaUsers />, title: "Leadership" },
  { icon: <FaLightbulb />, title: "Innovation" },
  { icon: <FaHeart />, title: "Character Development" },
  { icon: <FaHandsHelping />, title: "Nurturing Community" }
];

const ChairmanPhilosophy = () => {
  return (
    <section className="chair-phil">
      <div className="chair-phil-grid">
        {themes.map((theme, i) => (
          <div key={i} className="chair-phil-card">
            <div className="chair-phil-icon">{theme.icon}</div>
            <div className="chair-phil-title">{theme.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChairmanPhilosophy;
