import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import AdmissionProcess from './pages/AdmissionProcess'
import SingeEducationPage from './pages/SingeEducationPage'
import Leadership from './pages/Leadership'
import CambridgePage from './pages/CambridgePage'
import EducationLanding from './pages/EducationLanding'
import SchoolFees from './pages/SchoolFees'
import { useEffect } from 'react'
import WordFromChairman from './pages/WordFromChairman'
import Events from './pages/Events'
import SingleEventPage from './pages/SingleEventPage'
import SingleArticlePage from './pages/SingleArticlePage'
import FAQs from './pages/FAQs'
import Resources from './pages/Resources'
import Vacancies from './pages/Vacancies'
import SingleVacancy from './pages/SingleVacancy'
import ExtraCurricular from './pages/ExtraCurricular'
import SingleActivityPage from './pages/SingleActivityPage'
import Gallery from './pages/Gallery'
import Tenders from './pages/portal/Tenders';

// PORTAL PAGES
import FacultyPortal from './pages/portal/Faculty'
import StudentPortal from './pages/portal/Students'
import AlumniPortal from './pages/portal/Alumni'
import AdminERP from './pages/portal/AdminERP'

// FACULTY SUB-PAGES
import FacultyLMS from './pages/portal/faculty-portal/FacultyLMS'
import FacultySchedule from './pages/portal/faculty-portal/FacultySchedule'
import FacultyHR from './pages/portal/faculty-portal/FacultyHR'
import FacultyResources from './pages/portal/faculty-portal/FacultyResources'

// ACTIVITY CATEGORY PAGES
import Clubs from './pages/activities/Clubs'
import Sports from './pages/activities/Sports'
import Movements from './pages/activities/Movements'

// INDIVIDUAL ACTIVITY PAGES
import WorldScholars from './pages/activities/clubs/WorldScholars'
import MusicAcademy from './pages/activities/clubs/MusicAcademy'
import ComputerRobotics from './pages/activities/clubs/ComputerRobotics'
import DebateClub from './pages/activities/clubs/DebateClub'
import Homescience from './pages/activities/clubs/Homescience'
import ArtClub from './pages/activities/clubs/ArtClub'
import Dancing from './pages/activities/clubs/Dancing'
import Drama from './pages/activities/clubs/Drama'

import Athletics from './pages/activities/sports/Athletics'
import SoccerAcademy from './pages/activities/sports/SoccerAcademy'
import Swimming from './pages/activities/sports/Swimming'
import Basketball from './pages/activities/sports/Basketball'
import Skating from './pages/activities/sports/Skating'
import Gymnastics from './pages/activities/sports/Gymnastics'
import KarateTaekwondo from './pages/activities/sports/KarateTaekwondo'

import GirlGuides from './pages/activities/movements/GirlGuides'
import Scouts from './pages/activities/movements/Scouts'
import StJohnAmbulance from './pages/activities/movements/StJohnAmbulance'

import AIChatbot from './components/common/AIChatbot'
import WhatsAppButton from './components/common/WhatsAppButton'
import SplashScreen from './components/common/SplashScreen'
import MEC40AssistantTeaser from './components/common/MEC40AssistantTeaser'
import { useHeroIntro } from './context/HeroIntroContext'
import { useState } from 'react'

// NEW COMMUNITY PAGES
import ParentsHub from './pages/ParentsHub'
import PodcastHub from './pages/PodcastHub'
import Alumni from './pages/Alumni'

function App() {
  const location = useLocation();
  const { isImmersionMode, skipIntro, assistantPendingQuery, clearPendingQuery } = useHeroIntro();
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotStarterQuery, setChatbotStarterQuery] = useState(null);

  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash has been shown in this session
    return !sessionStorage.getItem('splashShown');
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (assistantPendingQuery) {
      setChatbotStarterQuery(assistantPendingQuery);
      setChatbotOpen(true);
      if (typeof clearPendingQuery === 'function') {
        clearPendingQuery();
      }
    }
  }, [assistantPendingQuery, clearPendingQuery]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  }

  // When teaser triggers a chatbot action, open chatbot with that query
  const handleTeaserOpenChatbot = (query) => {
    setChatbotStarterQuery(query);
    setChatbotOpen(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onAnimationComplete={handleSplashComplete} />}
      {/* Skip Intro — only shown during immersion */}
      {isImmersionMode && (
        <button className="mec-skip-intro-btn" onClick={skipIntro} aria-label="Skip cinematic intro">
          Skip Intro
        </button>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-MEC' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news-and-updates' element={<News />} />
        <Route path='/news-and-updates/:title' element={<SingleArticlePage />} />
        <Route path='/news-and-updates/article/:slug' element={<SingleArticlePage />} />
        <Route path='/news/:title' element={<SingleArticlePage />} />
        <Route path='/admissions/frequently-asked-questions' element={<FAQs />} />
        <Route path='/admissions/faqs' element={<FAQs />} />
        <Route path='/about-MEC/faqs' element={<FAQs />} />
        <Route path='/about-MEC/frequently-asked-questions' element={<FAQs />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path="/admissions/resources" element={<Resources />} />
        <Route path='/admissions/fees' element={<SchoolFees />} />
        <Route path='/admissions/fees-structure' element={<SchoolFees />} />
        <Route path='/education' element={<EducationLanding />} />
        <Route path='/education/CBC/:name' element={<SingeEducationPage />} />
        <Route path='/education/cbc/:name' element={<SingeEducationPage />} />
        <Route path='/education/pre-school' element={<SingeEducationPage />} />
        <Route path='/education/pre-primary' element={<SingeEducationPage />} />
        <Route path='/education/lower-primary' element={<SingeEducationPage />} />
        <Route path='/education/upper-primary' element={<SingeEducationPage />} />
        <Route path='/education/junior-school' element={<SingeEducationPage />} />
        <Route path='/education/senior-school' element={<SingeEducationPage />} />
        <Route path='/about-MEC/leadership' element={<Leadership />} />
        <Route path='/about-MEC/word-from-our-chairman' element={<WordFromChairman />} />
        <Route path='/education/cambridge-system' element={<CambridgePage />} />
        <Route path="/about-MEC/school-events" element={<Events />} />
        <Route path="/about-MEC/school-events/:name" element={<SingleEventPage />} />
        <Route path="/about-MEC/vacancies" element={<Vacancies />} />
        <Route path="/about-MEC/careers" element={<Vacancies />} />
        <Route path="/careers" element={<Vacancies />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/about-MEC/vacancy/:title" element={<SingleVacancy />} />
        <Route path="/careers/:title" element={<SingleVacancy />} />

        <Route path="/portal/faculty" element={<FacultyPortal />} />
        <Route path="/portal/faculty/lms" element={<FacultyLMS />} />
        <Route path="/portal/faculty/schedule" element={<FacultySchedule />} />
        <Route path="/portal/faculty/hr" element={<FacultyHR />} />
        <Route path="/portal/faculty/resources" element={<FacultyResources />} />

        <Route path="/portal/students" element={<StudentPortal />} />
        <Route path="/portal/alumni" element={<AlumniPortal />} />
        <Route path="/admin-dashboard" element={<AdminERP />} />
        <Route path="/portal/admin" element={<AdminERP />} />

        <Route path="/extra-curricular" element={<ExtraCurricular />} />
        <Route path="/extra-curricular/clubs" element={<Clubs />} />
        <Route path="/extra-curricular/sports" element={<Sports />} />
        <Route path="/extra-curricular/movements" element={<Movements />} />

        <Route path="/extra-curricular/clubs/world-scholars" element={<WorldScholars />} />
        <Route path="/extra-curricular/clubs/world-scholars-cup" element={<WorldScholars />} />
        <Route path="/extra-curricular/:category/:activityId" element={<SingleActivityPage />} />
        <Route path="/extra-curricular/clubs/music-academy" element={<MusicAcademy />} />
        <Route path="/extra-curricular/clubs/computer-robotics" element={<ComputerRobotics />} />
        <Route path="/extra-curricular/clubs/debate-club" element={<DebateClub />} />
        <Route path="/extra-curricular/clubs/homescience" element={<Homescience />} />
        <Route path="/extra-curricular/clubs/art-club" element={<ArtClub />} />
        <Route path="/extra-curricular/clubs/dancing" element={<Dancing />} />
        <Route path="/extra-curricular/clubs/drama" element={<Drama />} />

        <Route path="/extra-curricular/sports/athletics" element={<Athletics />} />
        <Route path="/extra-curricular/sports/soccer-academy" element={<SoccerAcademy />} />
        <Route path="/extra-curricular/sports/swimming" element={<Swimming />} />
        <Route path="/extra-curricular/sports/basketball" element={<Basketball />} />
        <Route path="/extra-curricular/sports/skating" element={<Skating />} />
        <Route path="/extra-curricular/sports/gymnastics" element={<Gymnastics />} />
        <Route path="/extra-curricular/sports/karate-taekwondo" element={<KarateTaekwondo />} />

        <Route path="/extra-curricular/movements/girl-guides-brownies" element={<GirlGuides />} />
        <Route path="/extra-curricular/movements/scouts" element={<Scouts />} />
        <Route path="/extra-curricular/movements/st-john-ambulance" element={<StJohnAmbulance />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portal/tenders" element={<Tenders />} />

        {/* NEW COMMUNITY PAGES */}
        <Route path="/parents-hub" element={<ParentsHub />} />
        <Route path="/podcast-hub" element={<PodcastHub />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
      <MEC40AssistantTeaser onOpenChatbot={handleTeaserOpenChatbot} />
      <AIChatbot
        externalOpen={chatbotOpen}
        externalStarterQuery={chatbotStarterQuery}
        onExternalHandled={() => { setChatbotOpen(false); setChatbotStarterQuery(null); }}
      />
      <WhatsAppButton />
    </>
  )
}

export default App
