import { useState, useEffect } from 'react';
import { FaBrain, FaFire, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const AIContentDiscovery = () => {
    const { language } = useLanguage();
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [interestKey, setInterestKey] = useState(null);

    const t = language === 'en' ? {
        title: "🧠 AI-Powered Content Discovery",
        subtitle: "Curated articles & insights powered by vector AI",
        noData: "Browse & interact with content to get AI recommendations",
        loadMore: "Load More Recommendations"
    } : {
        title: "🧠 Uvunjaji wa Maudhui wa AI",
        subtitle: "Nakala na maelezo yaliyo na AI",
        noData: "Tafuta maudhui ili kupata mapendekezo ya AI",
        loadMore: "Pakia Mapendekezo Zaidi"
    };

    const contentDatabase = {
        stem: [
            {
                id: 1,
                category: 'STEM',
                title: language === 'en' ? 'The Future of Robotics at MEC' : 'Mustakabali wa Robotiki',
                excerpt: language === 'en' ? 'Discover how our robotics lab is shaping tomorrow\'s innovators...' : 'Gundua jinsi lab yetu ina kubadilisha wabunifu...',
                image: '🤖',
                relevance: 98
            },
            {
                id: 2,
                category: 'Technology',
                title: language === 'en' ? 'Coding Bootcamp Success Stories' : 'Hadithi za Bootcamp ya Kuandika',
                excerpt: language === 'en' ? 'Meet our students who landed tech internships...' : 'Utambulane na wanafunzi wenye ajira...',
                image: '💻',
                relevance: 95
            },
            {
                id: 3,
                category: 'Science',
                title: language === 'en' ? 'Climate Change Research Initiative' : 'Mradi wa Utafiti wa Mabadiliko ya Tabia',
                excerpt: language === 'en' ? 'Join our environmental science projects...' : 'Jiunge na miradi ya sayansi...',
                image: '🌱',
                relevance: 92
            }
        ],
        arts: [
            {
                id: 4,
                category: 'Arts',
                title: language === 'en' ? 'Creative Writing Masterclass' : 'Masomo Makubwa ya Kuandika Kwa Ujinga',
                excerpt: language === 'en' ? 'Improve your storytelling and literary skills...' : 'Boresha ujuzi wako wa hadithi...',
                image: '✍️',
                relevance: 97
            },
            {
                id: 5,
                category: 'Culture',
                title: language === 'en' ? 'Digital Arts & Design Program' : 'Programu ya Sanaa Dijitali',
                excerpt: language === 'en' ? 'Learn design thinking from industry experts...' : 'Jifunze muundo kutoka kwa wataalamu...',
                image: '🎨',
                relevance: 94
            },
            {
                id: 6,
                category: 'Performance',
                title: language === 'en' ? 'Theater Production Opportunities' : 'Fursa za Kutengeneza Tamthilia',
                excerpt: language === 'en' ? 'Audition for our upcoming school productions...' : 'Jaribu kwa ajili ya mifumo...',
                image: '🎭',
                relevance: 90
            }
        ],
        leadership: [
            {
                id: 7,
                category: 'Leadership',
                title: language === 'en' ? 'Student Leadership Forum 2026' : 'Jukumuu la Uongozi wa Wanafunzi',
                excerpt: language === 'en' ? 'Develop your leadership potential with mentors...' : 'Kusambaza uongozi wako...',
                image: '👥',
                relevance: 96
            },
            {
                id: 8,
                category: 'Global',
                title: language === 'en' ? 'International Exchange Programs' : 'Programu za Ubadala wa Kimataifa',
                excerpt: language === 'en' ? 'Study abroad and build global networks...' : 'Soma nje na kujenga mtandao...',
                image: '🌐',
                relevance: 93
            },
            {
                id: 9,
                category: 'Development',
                title: language === 'en' ? 'Conflict Resolution & Mediation Skills' : 'Ujuzi wa Kutatua Ubishi',
                excerpt: language === 'en' ? 'Master communication and negotiation...' : 'Kuwa na ujuzi wa kuwasiliana...',
                image: '🤝',
                relevance: 89
            }
        ]
    };

    const generateRecommendations = (category) => {
        setLoading(true);
        setInterestKey(category);
        
        // Simulate AI processing
        setTimeout(() => {
            const items = contentDatabase[category] || [];
            setRecommendations(items);
            setLoading(false);
        }, 800);
    };

    if (recommendations.length === 0) {
        return (
            <div className="ai-content-discovery">
                <div className="discovery-header">
                    <FaBrain className="brain-icon" />
                    <h3>{t.title}</h3>
                    <p>{t.subtitle}</p>
                </div>

                <div className="interest-buttons">
                    <button 
                        className="interest-btn stem"
                        onClick={() => generateRecommendations('stem')}
                    >
                        <span className="emoji">🔬</span>
                        <span>{language === 'en' ? 'STEM & Tech' : 'STEM na Tech'}</span>
                    </button>
                    <button 
                        className="interest-btn arts"
                        onClick={() => generateRecommendations('arts')}
                    >
                        <span className="emoji">🎨</span>
                        <span>{language === 'en' ? 'Arts & Culture' : 'Sanaa na Utamaduni'}</span>
                    </button>
                    <button 
                        className="interest-btn leadership"
                        onClick={() => generateRecommendations('leadership')}
                    >
                        <span className="emoji">👥</span>
                        <span>{language === 'en' ? 'Leadership' : 'Uongozi'}</span>
                    </button>
                </div>

                <p className="discovery-note">{t.noData}</p>
            </div>
        );
    }

    return (
        <div className="ai-content-discovery active">
            <div className="discovery-header">
                <FaBrain className="brain-icon" />
                <h3>{t.title}</h3>
                <p>{t.subtitle}</p>
            </div>

            {loading ? (
                <div className="loading-state">
                    <FaSpinner className="spinner" />
                    <p>{language === 'en' ? 'AI is finding perfect matches...' : 'AI inatafuta kulingana...'}</p>
                </div>
            ) : (
                <>
                    <div className="content-cards">
                        {recommendations.map(content => (
                            <div key={content.id} className="content-card">
                                <div className="card-image">{content.image}</div>
                                <div className="card-content">
                                    <span className="card-category">{content.category}</span>
                                    <h5>{content.title}</h5>
                                    <p>{content.excerpt}</p>
                                    <div className="relevance-score">
                                        <FaFire size={14} />
                                        <span>{content.relevance}% Match</span>
                                    </div>
                                </div>
                                <button className="card-link">
                                    <FaArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="discovery-actions">
                        <button 
                            className="reset-discovery-btn"
                            onClick={() => {
                                setRecommendations([]);
                                setInterestKey(null);
                            }}
                        >
                            {language === 'en' ? '← Different interests?' : '← Maslahi mengine?'}
                        </button>
                        <button className="load-more-btn">
                            {t.loadMore}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AIContentDiscovery;
