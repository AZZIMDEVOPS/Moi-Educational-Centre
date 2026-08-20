import React from 'react';
import Navbar from '../../../components/common/navigation/Navbar';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/common/SEO';
import { FaBook, FaFilePdf, FaExternalLinkAlt, FaFolderOpen, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../css/portal.css';

const FacultyResources = () => {
    return (
        <>
            <SEO title="Academic Resources - MEC Faculty" description="Download curriculum guides, templates, and teaching resources." />
            <Navbar />

            <div className="portal-subpage" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#fcfcfc' }}>
                <div className="inner-row">
                    <Link to="/portal/faculty" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--main-color)', textDecoration: 'none', marginBottom: '30px', fontWeight: '600' }}>
                        <FaChevronLeft style={{ marginRight: '8px' }} /> Back to Workspace
                    </Link>

                    <div className="portal-header" style={{ marginBottom: '50px' }}>
                        <h1 style={{ color: 'var(--main-color)', fontSize: '36px', fontWeight: '800' }}>Academic & Pedagogical Resources</h1>
                        <p style={{ color: '#666', fontSize: '18px', marginTop: '10px' }}>Your central repository for all teaching and curriculum materials.</p>
                    </div>

                    <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div className="resource-category" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '20px', color: 'var(--main-color)', display: 'flex', alignItems: 'center' }}><FaFolderOpen style={{ marginRight: '10px' }} /> Curriculum Frameworks</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'CBC Grade 1-6 Curriculum Guides',
                                    'Cambridge IGCSE Syllabus (Extended)',
                                    'Year 7-9 Lower Secondary Progression',
                                    'MEC Localized Teaching Schemes Term 2'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#444' }}>{item}</span>
                                        <a href="#" style={{ color: 'var(--accent-color)' }}><FaFilePdf /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="resource-category" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '20px', color: 'var(--main-color)', display: 'flex', alignItems: 'center' }}><FaBook style={{ marginRight: '10px' }} /> Plan Templates</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Daily Lesson Plan Template (CBC)',
                                    'Termly Scheme of Work Template',
                                    'Student Assessment Feedback Form',
                                    'Extra-Curricular Activity Log'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#444' }}>{item}</span>
                                        <a href="#" style={{ color: 'var(--accent-color)' }}><FaExternalLinkAlt /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="external-links-hub" style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        {[
                            { name: 'KICD Portal', url: '#' },
                            { name: 'Cambridge Teacher Support', url: '#' },
                            { name: 'KNEC Online Services', url: '#' },
                            { name: 'Ministry of Education News', url: '#' }
                        ].map((link, idx) => (
                            <a key={idx} href={link.url} style={{ background: 'var(--main-color)', color: 'white', padding: '20px', borderRadius: '15px', textDecoration: 'none', textAlign: 'center', fontWeight: '600', transition: 'transform 0.3s' }}>
                                {link.name} <FaExternalLinkAlt style={{ marginLeft: '10px', fontSize: '14px' }} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FacultyResources;
