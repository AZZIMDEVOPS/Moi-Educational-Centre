import { useState } from 'react';
import { FaRobot, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const AISmartRecommender = () => {
    const { language } = useLanguage();
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [recommendation, setRecommendation] = useState(null);

    const t = language === 'en' ? {
        title: "AI-Powered Program Finder",
        subtitle: "Discover your perfect program in 60 seconds",
        startBtn: "Start Quiz",
        resetBtn: "Start Over",
        matchedProgram: "Your Perfect Match",
        viewMore: "Learn More"
    } : {
        title: "AI Kipenzi cha Programu",
        subtitle: "Gundua programu yako bora katika sekunde 60",
        startBtn: "Anza Mtihani",
        resetBtn: "Anza Tena",
        matchedProgram: "Mkutano Wako Kamili",
        viewMore: "Jifunze Zaidi"
    };

    const quizQuestions = [
        {
            id: 'interest',
            en: "What interests you most?",
            sw: "Unageana zaidi na nini?",
            options: [
                { id: 'stem', en: 'STEM (Science, Tech, Math)', sw: 'STEM (Sayansi, Teknolohia, Hisabati)' },
                { id: 'arts', en: 'Arts & Humanities', sw: 'Sanaa na Wanadamu' },
                { id: 'balanced', en: 'Well-rounded learning', sw: 'Mafunzo yenye usawa' }
            ]
        },
        {
            id: 'level',
            en: "What is your child's grade level?",
            sw: "Je, mtoto wako ana darasa gani?",
            options: [
                { id: 'primary', en: 'Kindergarten - Grade 6', sw: 'Kindergarten - Darasa la 6' },
                { id: 'junior', en: 'Grade 7 - 9', sw: 'Darasa la 7 - 9' },
                { id: 'senior', en: 'Grade 10+', sw: 'Darasa la 10+' }
            ]
        },
        {
            id: 'style',
            en: "Preferred learning style?",
            sw: "Mtindo wa kujifunza unaopenda?",
            options: [
                { id: 'practical', en: 'Hands-on & Practical', sw: 'Mtendo na Vitendo' },
                { id: 'academic', en: 'Academic & Competitive', sw: 'Kiacademic & Msimu' },
                { id: 'creative', en: 'Creative & Artistic', sw: 'Ubunifu na Sanaa' }
            ]
        }
    ];

    const programs = {
        stem_primary_practical: { 
            name: 'CBC STEM Plus', 
            desc: language === 'en' ? 'Hands-on science & tech exploration with robotics lab' : 'Utongozaji wa sayansi na teknolohia na lab ya robotiki',
            match: 95 
        },
        stem_junior_academic: { 
            name: 'Advanced STEM Track', 
            desc: language === 'en' ? 'Intensive sciences with coding & engineering projects' : 'Sayansi nzuri na mradi wa kukamatia',
            match: 92 
        },
        stem_senior_practical: { 
            name: 'Cambridge Engineering Pathway', 
            desc: language === 'en' ? 'Cambridge A-Level in Physics, Chemistry, Biology & Computer Science' : 'Cambridge A-Level na Teknolohia',
            match: 94 
        },
        arts_primary_creative: { 
            name: 'Creative Expression Program', 
            desc: language === 'en' ? 'Music, Drama, Visual Arts & Literature focus' : 'Muziki, Fasihi, na Sanaa',
            match: 93 
        },
        arts_junior_creative: { 
            name: 'Humanities Excellence Track', 
            desc: language === 'en' ? 'Languages, History, Geography & Cultural Studies' : 'Lugha, Historia, na Utamaduni',
            match: 90 
        },
        balanced_primary_practical: { 
            name: 'All-Round CBC Program', 
            desc: language === 'en' ? 'Balanced academics with sports, arts & clubs' : 'Usawa katika masomo, michezo na sanaa',
            match: 96 
        },
        balanced_junior_practical: { 
            name: 'Holistic Development Program', 
            desc: language === 'en' ? 'Equal focus on academics, sports, arts & leadership' : 'Usawa katika masomo, michezo, sanaa na uongozi',
            match: 94 
        },
        balanced_senior_academic: { 
            name: 'Cambridge Balanced Curriculum', 
            desc: language === 'en' ? 'Flexible Cambridge program with diverse subjects' : 'Programu ya Cambridge na masomo tofauti',
            match: 93 
        }
    };

    const getRecommendation = () => {
        const key = `${answers.interest}_${answers.level}_${answers.style}`;
        return programs[key] || programs.balanced_primary_practical;
    };

    const handleAnswer = (optionId) => {
        const questionId = quizQuestions[currentStep].id;
        const newAnswers = { ...answers, [questionId]: optionId };
        setAnswers(newAnswers);

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setRecommendation(getRecommendation());
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    if (!showQuiz) {
        return (
            <div className="ai-recommender-card">
                <div className="recommender-header">
                    <FaRobot className="robot-icon" />
                    <h3>{t.title}</h3>
                </div>
                <p className="recommender-subtitle">{t.subtitle}</p>
                <button className="ai-start-btn" onClick={() => setShowQuiz(true)}>
                    {t.startBtn} <FaArrowRight />
                </button>
            </div>
        );
    }

    if (recommendation) {
        return (
            <div className="ai-recommender-card expanded">
                <div className="recommendation-result">
                    <FaCheckCircle className="success-icon" />
                    <h4>{t.matchedProgram}</h4>
                    <h3>{recommendation.name}</h3>
                    <p>{recommendation.desc}</p>
                    <div className="match-percentage">
                        <div className="match-bar">
                            <div 
                                className="match-fill" 
                                style={{ width: `${recommendation.match}%` }}
                            ></div>
                        </div>
                        <span>{recommendation.match}% Match</span>
                    </div>
                    <div className="recommendation-actions">
                        <button className="ai-action-btn primary">{t.viewMore}</button>
                        <button className="ai-action-btn secondary" onClick={resetQuiz}>
                            {t.resetBtn}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const question = quizQuestions[currentStep];
    return (
        <div className="ai-recommender-card expanded">
            <div className="quiz-progress">
                <span>{currentStep + 1}/3</span>
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                    ></div>
                </div>
            </div>
            <h4 className="quiz-question">
                {language === 'en' ? question.en : question.sw}
            </h4>
            <div className="quiz-options">
                {question.options.map(option => (
                    <button
                        key={option.id}
                        className="quiz-option"
                        onClick={() => handleAnswer(option.id)}
                    >
                        {language === 'en' ? option.en : option.sw}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AISmartRecommender;
