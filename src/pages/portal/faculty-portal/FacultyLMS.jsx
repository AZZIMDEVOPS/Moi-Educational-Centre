import React from 'react';
import Navbar from '../../../components/common/navigation/Navbar';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/common/SEO';
import { useLanguage } from '../../../context/LanguageContext';
import { FaDesktop, FaChalkboardTeacher, FaFileUpload, FaTasks, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../css/portal.css';

const FacultyLMS = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO title="Faculty LMS - Moi Educational Centre" description="Manage your virtual classrooms, assignments, and digital resources." />
            <Navbar />

            <div className="portal-subpage" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#fcfcfc' }}>
                <div className="inner-row">
                    <Link to="/portal/faculty" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--main-color)', textDecoration: 'none', marginBottom: '30px', fontWeight: '600' }}>
                        <FaChevronLeft style={{ marginRight: '8px' }} /> Back to Workspace
                    </Link>

                    <div className="portal-header" style={{ marginBottom: '50px' }}>
                        <h1 style={{ color: 'var(--main-color)', fontSize: '36px', fontWeight: '800' }}>Learning Management System (LMS)</h1>
                        <p style={{ color: '#666', fontSize: '18px', marginTop: '10px' }}>Digitize your teaching experience and manage student engagement.</p>
                    </div>

                    <div className="lms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaChalkboardTeacher /></div>
                            <h3>Virtual Classrooms</h3>
                            <p>Direct access to your assigned Google Classrooms for all subject areas.</p>
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" className="portal-btn">Launch Classrooms</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaFileUpload /></div>
                            <h3>Resource Upload</h3>
                            <p>Add new study guides, PDFs, and multimedia content to the MEC Shared Teaching Drive.</p>
                            <a href="#" className="portal-btn">Upload Files</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaTasks /></div>
                            <h3>Assignment Tracker</h3>
                            <p>Review and grade pending submissions from your students across all grade levels.</p>
                            <a href="#" className="portal-btn">View Submissions</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaDesktop /></div>
                            <h3>Educational Tools</h3>
                            <p>Access integrated tools like Kahoot, Quizizz, and PhET Simulations directly from here.</p>
                            <a href="#" className="portal-btn">Open Toolset</a>
                        </div>
                    </div>

                    <div className="lms-support-section" style={{ marginTop: '60px', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ marginBottom: '20px', color: 'var(--main-color)' }}>LMS Training & Support</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <h4 style={{ color: '#333' }}>Getting Started Guide</h4>
                                <p style={{ color: '#666', fontSize: '15px' }}>New to our digital ecosystem? Download the educator's quick-start guide to master the basics of the MEC LMS.</p>
                                <a href="#" style={{ color: 'var(--accent-color)', fontWeight: '700', textDecoration: 'none' }}>Download PDF →</a>
                            </div>
                            <div>
                                <h4 style={{ color: '#333' }}>Need Technical Help?</h4>
                                <p style={{ color: '#666', fontSize: '15px' }}>Having trouble with login or file sync? Contact the IT support team specifically dedicated to Faculty systems.</p>
                                <a href="#" style={{ color: 'var(--accent-color)', fontWeight: '700', textDecoration: 'none' }}>Open Support Ticket →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FacultyLMS;
