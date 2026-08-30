import { useState } from 'react';
import { FaGraduationCap, FaTarget, FaLightbulb, FaCheckCircle, FaRocket, FaGlobeAmericas, FaPalette, FaMicroscope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const AILearningPathFinder = () => {
    const { language } = useLanguage();
    const [selectedPath, setSelectedPath] = useState(null);

    const t = language === 'en' ? {
        title: "AI Learning Paths",
        subtitle: "Your personalized journey to success",
        explorePaths: "Explore Paths"
    } : {
        title: "Mapango ya Kujifunza AI",
        subtitle: "Safari yako ya kibinafsi kwenye mafanikio",
        explorePaths: "Chunguza Mapango"
    };

    const learningPaths = [
        {
            id: 1,
            title: language === 'en' ? 'Future Tech Pioneer' : 'Mjumbe wa Teknolohia',
            Icon: FaRocket,
            color: '#FF6B6B',
            description: language === 'en' ? 'Master coding, AI, and innovation' : 'Kuwa na ujuzi wa kuandika, AI na kubunifu',
            stages: [
                { stage: 1, title: language === 'en' ? 'Coding Basics' : 'Msingi wa Kuandika', duration: '8 weeks' },
                { stage: 2, title: language === 'en' ? 'Web Development' : 'Ukuzaji wa Wavuti', duration: '12 weeks' },
                { stage: 3, title: language === 'en' ? 'AI Fundamentals' : 'Msingi wa AI', duration: '10 weeks' },
                { stage: 4, title: language === 'en' ? 'Capstone Project' : 'Mradi Mkuu', duration: '8 weeks' }
            ]
        },
        {
            id: 2,
            title: language === 'en' ? 'Global Citizen Leader' : 'Kiongozi wa Kimataifa',
            Icon: FaGlobeAmericas,
            color: '#4ECDC4',
            description: language === 'en' ? 'Leadership, languages, and cultural excellence' : 'Uongozi, lugha na usambano wa kitamaduni',
            stages: [
                { stage: 1, title: language === 'en' ? 'Communication Skills' : 'Ujuzi wa Kuwasiliana', duration: '6 weeks' },
                { stage: 2, title: language === 'en' ? 'Language Mastery' : 'Ujuzi wa Lugha', duration: '16 weeks' },
                { stage: 3, title: language === 'en' ? 'Leadership Training' : 'Mafunzo ya Uongozi', duration: '10 weeks' },
                { stage: 4, title: language === 'en' ? 'Global Exchange' : 'Mbadala wa Kimataifa', duration: '4 weeks' }
            ]
        },
        {
            id: 3,
            title: language === 'en' ? 'Creative Innovator' : 'Mbunifu wa Ubunifu',
            Icon: FaPalette,
            color: '#95E1D3',
            description: language === 'en' ? 'Arts, design, and creative entrepreneurship' : 'Sanaa, muundo, na biashara ya ubunifu',
            stages: [
                { stage: 1, title: language === 'en' ? 'Digital Art Basics' : 'Sanaa ya Dijitali', duration: '8 weeks' },
                { stage: 2, title: language === 'en' ? 'Design Principles' : 'Kanuni za Muundo', duration: '10 weeks' },
                { stage: 3, title: language === 'en' ? 'Media Production' : 'Utengenezaji wa Mtandao', duration: '12 weeks' },
                { stage: 4, title: language === 'en' ? 'Portfolio Building' : 'Kujenga Kumbumbu', duration: '6 weeks' }
            ]
        },
        {
            id: 4,
            title: language === 'en' ? 'Science Explorer' : 'Mtafiti wa Sayansi',
            Icon: FaMicroscope,
            color: '#FFD93D',
            description: language === 'en' ? 'Research, discovery, and scientific innovation' : 'Utafiti, ugunduzi na kubunifu kwa sayansi',
            stages: [
                { stage: 1, title: language === 'en' ? 'Scientific Method' : 'Mbinu ya Sayansi', duration: '6 weeks' },
                { stage: 2, title: language === 'en' ? 'Lab Techniques' : 'Mbinu za Lab', duration: '10 weeks' },
                { stage: 3, title: language === 'en' ? 'Research Project' : 'Mradi wa Utafiti', duration: '14 weeks' },
                { stage: 4, title: language === 'en' ? 'Publication & Presentation' : 'Kuchapisha na Kuwasilisha', duration: '4 weeks' }
            ]
        }
    ];

    return (
        <div className="ai-learning-paths-section">
            <div className="paths-header">
                <h3>{t.title}</h3>
                <p>{t.subtitle}</p>
            </div>

            {!selectedPath ? (
                <div className="paths-grid">
                    {learningPaths.map(path => (
                        <div 
                            key={path.id} 
                            className="path-card"
                            style={{ borderLeftColor: path.color }}
                            onClick={() => setSelectedPath(path)}
                        >
                            <div className="path-icon">
                                <path.Icon style={{ fontSize: '20px', color: path.color }} />
                            </div>
                            <h4>{path.title}</h4>
                            <p>{path.description}</p>
                            <button className="explore-btn">
                                {t.explorePaths} →
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="path-details">
                    <button 
                        className="back-btn"
                        onClick={() => setSelectedPath(null)}
                    >
                        ← Back
                    </button>
                    <div className="path-header">
                        <h3>
                            <selectedPath.Icon style={{ color: selectedPath.color, marginRight: '8px' }} />
                            {selectedPath.title}
                        </h3>
                    </div>
                    <div className="stages-timeline">
                        {selectedPath.stages.map((s, idx) => (
                            <div key={s.stage} className="timeline-item">
                                <div className="timeline-marker">
                                    <FaCheckCircle />
                                </div>
                                <div className="timeline-content">
                                    <h5>{s.title}</h5>
                                    <p>{s.duration}</p>
                                </div>
                                {idx < selectedPath.stages.length - 1 && (
                                    <div className="timeline-connector"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="enroll-btn">
                        {language === 'en' ? 'Start This Path' : 'Anza Mapango Haya'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AILearningPathFinder;
