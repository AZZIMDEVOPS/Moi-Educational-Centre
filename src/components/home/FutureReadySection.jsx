import { Link } from "react-router-dom"
import { FaRobot, FaLaptopCode, FaBrain } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const FutureReadySection = () => {
    const { language } = useLanguage();

    const text = {
        en: {
            title: "Empowering <span>Future-Ready</span> Leaders",
            sub: "We integrate modern technology and innovation into our curriculum to prepare students for a rapidly evolving world.",
            cards: [
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
            cta: "Explore Our Curriculum"
        },
        sw: {
            title: "Kuwezesha Viongozi <span>Waliotayarishwa kwa Hatima</span>",
            sub: "Tunajumuisha teknolojia ya kisasa na uvumbuzi katika mtaala wetu ili kuwatayarisha wanafunzi kwa ulimwengu unaobadilika haraka.",
            cards: [
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
            ],
            cta: "Gundua Mtaala Wetu"
        }
    };

    const d = text[language];

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
            
            <div style={{height: '2rem'}}></div>
            <div className="future-header">
                <h2 dangerouslySetInnerHTML={{ __html: d.title }}></h2>
                <p>{d.sub}</p>
            </div>
            <div style={{height: '2rem'}}></div>
            <div className="future-cards">
                {d.cards.map((card, idx) => (
                    <div className="future-card" key={idx}>
                        <div className="icon-box">
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.p}</p>
                    </div>
                ))}
            </div>
            <div style={{height: '2rem'}}></div>
            <div className="future-cta">
                <Link to="/education/CBC/Junior-Secondary" className="btn-glow">{d.cta}</Link>
            </div>
        </>
    )
}

export default FutureReadySection
