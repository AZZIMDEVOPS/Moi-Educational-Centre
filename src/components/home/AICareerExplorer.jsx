import { useState } from 'react';
import { FaBriefcase, FaChartLine, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const AICareerExplorer = () => {
    const { language } = useLanguage();
    const [activeCareer, setActiveCareer] = useState(null);

    const t = language === 'en' ? {
        title: "💼 AI Career Explorer",
        subtitle: "Explore 50+ career paths powered by AI insights",
        salaryRange: "Salary Range",
        requirements: "Key Requirements",
        pathways: "MEC Pathways",
        learnMore: "Explore This Career"
    } : {
        title: "💼 Mtafiti wa Ajira wa AI",
        subtitle: "Chunguza njia 50+ za ajira",
        salaryRange: "Upeo wa Mshahara",
        requirements: "Mahitaji Makuu",
        pathways: "Mapango ya MEC",
        learnMore: "Chunguza Ajira Hii"
    };

    const careers = [
        {
            id: 1,
            title: language === 'en' ? 'Software Engineer' : 'Mhandisi wa Software',
            icon: '💻',
            salary: language === 'en' ? '$80K - $150K' : 'KES 8M - 15M',
            demand: 'Very High',
            description: language === 'en' ? 'Build innovative applications and systems' : 'Kujenga programu na mifumo',
            requirements: [
                language === 'en' ? 'Strong programming skills' : 'Ujuzi wa kuandika',
                language === 'en' ? 'Problem-solving mindset' : 'Mtazamo wa kutatua matatizo',
                language === 'en' ? 'CS fundamentals' : 'Msingi wa CS'
            ],
            pathways: ['CBC STEM Plus', 'Advanced STEM Track', 'Cambridge Computer Science']
        },
        {
            id: 2,
            title: language === 'en' ? 'Data Scientist' : 'Sayensi ya Data',
            icon: '📊',
            salary: language === 'en' ? '$90K - $160K' : 'KES 9M - 16M',
            demand: 'Very High',
            description: language === 'en' ? 'Unlock insights from data to drive decisions' : 'Gundua habari kutoka data',
            requirements: [
                language === 'en' ? 'Math & Statistics' : 'Hisabati na Takwimu',
                language === 'en' ? 'Python/R programming' : 'Kuandika Python/R',
                language === 'en' ? 'ML knowledge' : 'Ujuzi wa ML'
            ],
            pathways: ['Advanced STEM Track', 'Cambridge A-Level Mathematics']
        },
        {
            id: 3,
            title: language === 'en' ? 'Product Manager' : 'Meneja wa Bidhaa',
            icon: '🎯',
            salary: language === 'en' ? '$100K - $180K' : 'KES 10M - 18M',
            demand: 'High',
            description: language === 'en' ? 'Lead product vision and strategy' : 'Iongeze bidhaa na mkakati',
            requirements: [
                language === 'en' ? 'Strategic thinking' : 'Mtazamo wa mkakati',
                language === 'en' ? 'Communication skills' : 'Ujuzi wa kuwasiliana',
                language === 'en' ? 'Tech understanding' : 'Uelewa wa teknolohia'
            ],
            pathways: ['Global Citizen Leader', 'Holistic Development Program']
        },
        {
            id: 4,
            title: language === 'en' ? 'UX/UI Designer' : 'Muundo wa UX/UI',
            icon: '🎨',
            salary: language === 'en' ? '$70K - $130K' : 'KES 7M - 13M',
            demand: 'High',
            description: language === 'en' ? 'Design beautiful and functional user experiences' : 'Muundo wastani wa watumiaji',
            requirements: [
                language === 'en' ? 'Design portfolio' : 'Kumbumbu ya muundo',
                language === 'en' ? 'Creativity & empathy' : 'Ubunifu na huruma',
                language === 'en' ? 'Design tools expertise' : 'Ujuzi wa zana za muundo'
            ],
            pathways: ['Creative Expression Program', 'Creative Innovator Path']
        },
        {
            id: 5,
            title: language === 'en' ? 'AI/ML Engineer' : 'Mhandisi wa AI/ML',
            icon: '🤖',
            salary: language === 'en' ? '$120K - $200K' : 'KES 12M - 20M',
            demand: 'Very High',
            description: language === 'en' ? 'Develop cutting-edge AI solutions' : 'Kujenga suluhisho za AI',
            requirements: [
                language === 'en' ? 'Deep Learning knowledge' : 'Ujuzi wa kujifunza',
                language === 'en' ? 'Advanced Python' : 'Python ya juu',
                language === 'en' ? 'Research skills' : 'Ujuzi wa utafiti'
            ],
            pathways: ['Future Tech Pioneer', 'Science Explorer Path']
        },
        {
            id: 6,
            title: language === 'en' ? 'Marketing Director' : 'Mkurugenzi wa Uuzaji',
            icon: '📢',
            salary: language === 'en' ? '$80K - $150K' : 'KES 8M - 15M',
            demand: 'High',
            description: language === 'en' ? 'Shape brands and drive business growth' : 'Kujenga brand na kuongeza biashara',
            requirements: [
                language === 'en' ? 'Analytics & data' : 'Takwimu na data',
                language === 'en' ? 'Creative thinking' : 'Mtazamo wa ubunifu',
                language === 'en' ? 'Communication' : 'Kuwasiliana'
            ],
            pathways: ['Global Citizen Leader', 'Creative Innovator']
        },
        {
            id: 7,
            title: language === 'en' ? 'Biomedical Engineer' : 'Mhandisi wa Kimatibabu',
            icon: '🔬',
            salary: language === 'en' ? '$75K - $140K' : 'KES 7.5M - 14M',
            demand: 'Medium-High',
            description: language === 'en' ? 'Innovate healthcare solutions' : 'Kubunifu suluhisho za afya',
            requirements: [
                language === 'en' ? 'Biology & Chemistry' : 'Biolohia na Kemia',
                language === 'en' ? 'Engineering mindset' : 'Mtazamo wa uhandisi',
                language === 'en' ? 'Problem solving' : 'Kutatua matatizo'
            ],
            pathways: ['Science Explorer Path', 'Advanced STEM Track']
        },
        {
            id: 8,
            title: language === 'en' ? 'Environmental Consultant' : 'Mshauri wa Mazingira',
            icon: '🌍',
            salary: language === 'en' ? '$60K - $120K' : 'KES 6M - 12M',
            demand: 'Growing',
            description: language === 'en' ? 'Solve environmental challenges sustainably' : 'Kutatua matatizo ya mazingira',
            requirements: [
                language === 'en' ? 'Environmental science' : 'Sayansi ya mazingira',
                language === 'en' ? 'Policy understanding' : 'Uelewa wa sera',
                language === 'en' ? 'Communication' : 'Kuwasiliana'
            ],
            pathways: ['Science Explorer Path', 'Global Citizen Leader']
        }
    ];

    return (
        <div className="ai-career-explorer">
            <div className="career-header">
                <FaBriefcase className="briefcase-icon" />
                <h3>{t.title}</h3>
                <p>{t.subtitle}</p>
            </div>

            {activeCareer === null ? (
                <div className="careers-grid">
                    {careers.map(career => (
                        <div 
                            key={career.id} 
                            className="career-card"
                            onClick={() => setActiveCareer(career)}
                        >
                            <h4>{career.icon}</h4>
                            <h5>{career.title}</h5>
                            <p>{career.description}</p>
                            <div className="career-meta">
                                <span className="demand-badge" style={{
                                    backgroundColor: career.demand === 'Very High' ? '#FF6B6B' : 
                                                    career.demand === 'Growing' ? '#FFD93D' : '#4ECDC4'
                                }}>
                                    {career.demand} Demand
                                </span>
                            </div>
                            <button className="explore-career-btn">
                                <FaPlay size={12} /> {t.learnMore}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="career-detail">
                    <button 
                        className="back-career-btn"
                        onClick={() => setActiveCareer(null)}
                    >
                        ← {language === 'en' ? 'Back to Careers' : 'Kurudi kwenye Ajira'}
                    </button>

                    <div className="career-detail-content">
                        <div className="career-title-section">
                            <h2>{activeCareer.icon} {activeCareer.title}</h2>
                            <p>{activeCareer.description}</p>
                        </div>

                        <div className="detail-grid">
                            <div className="detail-card">
                                <h5>{t.salaryRange}</h5>
                                <p className="salary-value">{activeCareer.salary}</p>
                                <span className="demand-badge" style={{
                                    backgroundColor: activeCareer.demand === 'Very High' ? '#FF6B6B' : 
                                                    activeCareer.demand === 'Growing' ? '#FFD93D' : '#4ECDC4'
                                }}>
                                    {activeCareer.demand} Demand
                                </span>
                            </div>

                            <div className="detail-card requirements-card">
                                <h5>{t.requirements}</h5>
                                <ul>
                                    {activeCareer.requirements.map((req, idx) => (
                                        <li key={idx}>✓ {req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-card pathways-card">
                                <h5>{t.pathways}</h5>
                                <div className="pathway-tags">
                                    {activeCareer.pathways.map((pathway, idx) => (
                                        <span key={idx} className="pathway-tag">{pathway}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="cta-button">
                            {language === 'en' ? 'Start Your Journey' : 'Anza Safari Yako'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AICareerExplorer;
