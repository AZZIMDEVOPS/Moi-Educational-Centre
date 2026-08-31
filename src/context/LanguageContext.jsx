import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('MEC_Language') || 'en');

    useEffect(() => {
        localStorage.setItem('MEC_Language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'sw' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Simple translations dictionary for common UI elements
export const translations = {
    en: {
        code: "en",
        label: "English",
        faculty: "Faculty",
        students: "Students",
        alumni: "Alumni",
        portal: "Portal",
        applyNow: "Apply Now",
        searchPlaceholder: "Search programmes...",
        parentPortal: "Parent Portal",
        nav: {
            home: "Home",
            about: "About MEC",
            leadership: "Our Leadership",
            chairman: "Word from Chairman",
            vacancies: "Vacancies",
            schoolEvents: "School Events",
            education: "Education",
            admissions: "Admissions",
            applicationProcess: "Application Process",
            feeStructure: "Fee Structure",
            resourcesForms: "Resources & Forms",
            faq: "Frequently Asked Questions",
            studentLife: "Student Life",
            contact: "Contact Us",
            gallery: "Gallery",
            extraCurricular: "Activities",
            portal: "Portal",
            clubs: "Clubs",
            sports: "Sports",
            movements: "Movements",
            faculty: "Faculty",
            students: "Students",
            alumni: "Alumni"
        },
        hero: {
            title: "Inspiring Excellence.",
            highlight: "Shaping Tomorrow's Leaders.",
            sub: "For over four decades, Moi Educational Centre has empowered learners through academic excellence, innovation, leadership, and holistic education."
        },
        experience: {
            eyebrow: "Campus experience",
            title: "Take a Virtual Tour of Our Campus.",
            text: "Step into a world-class learning environment defined by inspiring classrooms, science laboratories, vibrant libraries, sports grounds, performing arts spaces, and innovation hubs.",
            points: [
                "World-class facilities designed for curiosity and growth",
                "Student-centred learning in a nurturing community",
                "A thriving campus that balances academics, arts, and athletics"
            ],
            cta: "Discover MEC"
        },
        chatbot: {
            greeting: "Hello! I'm MEC's AI Assistant. How can I help you today?",
            placeholder: "Type a message...",
            suggestions: ["How do I apply?", "Where are you located?", "What sports do you offer?"],
            languageLabel: "Switch to Kiswahili"
        }
    },
    sw: {
        code: "sw",
        label: "Kiswahili",
        faculty: "Wafanyakazi",
        students: "Wanafunzi",
        alumni: "Wahitimu",
        portal: "Tovuti",
        applyNow: "Omba Sasa",
        searchPlaceholder: "Tafuta masomo...",
        parentPortal: "Tovuti ya Wazazi",
        nav: {
            home: "Nyumbani",
            about: "Kuhusu MEC",
            leadership: "Uongozi Wetu",
            chairman: "Ujumbe wa Mwenyekiti",
            vacancies: "Nafasi za Kazi",
            schoolEvents: "Matukio ya Shule",
            education: "Elimu",
            admissions: "Uandikishaji",
            applicationProcess: "Mchakato wa Maombi",
            feeStructure: "Muundo wa Karo",
            resourcesForms: "Fomu na Rasilimali",
            faq: "Maswali Yanayoulizwa Mara kwa Mara",
            studentLife: "Maisha ya Wanafunzi",
            contact: "Wasiliana Nasi",
            gallery: "Picha",
            extraCurricular: "Shughuli",
            portal: "Tovuti",
            clubs: "Vilabu",
            sports: "Michezo",
            movements: "Mashirika",
            faculty: "Wafanyakazi",
            students: "Wanafunzi",
            alumni: "Wahitimu"
        },
        hero: {
            title: "Kuhimiza Ubora.",
            highlight: "Kutengeneza Viongozi wa Kesho.",
            sub: "Kwa zaidi ya miongo minne, Moi Educational Centre imewezesha wanafunzi kupitia ubora wa kitaaluma, ubunifu, uongozi, na elimu ya jumla."
        },
        experience: {
            eyebrow: "Uzoefu wa kampasi",
            title: "Pitia Kijijini Kituo Chetu kwa Mtandao.",
            text: "Ingiza mazingira ya kujifunza ya kimataifa yaliyojaa madarasa ya kushawishi, maabara za sayansi, maktaba zenye uhai, uwanja wa michezo, nafasi za sanaa za maonyesho, na vituo vya ubunifu.",
            points: [
                "Vifaa vya kiwango cha juu vinavyoweka shauku na ukuaji mbele",
                "Kujifunza kulikozingatia mwanafunzi katika jamii yenye malezi",
                "Kampasi yenye shughuli nyingi inayoboresha kitaaluma, sanaa, na michezo"
            ],
            cta: "Gundua MEC"
        },
        chatbot: {
            greeting: "Habari! Mimi ni Msaidizi wa AI wa MEC. Naweza kukusaidia vipi leo?",
            placeholder: "Andika ujumbe...",
            suggestions: ["Ninaombaje nafasi?", "Mko wapi?", "Mato ya michezo ni gani?"],
            languageLabel: "Badilisha kwa Kiingereza"
        }
    }
};
