import React from 'react';
import Navbar from '../../../components/common/navigation/Navbar';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/common/SEO';
import { FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../css/portal.css';

const FacultySchedule = () => {
    return (
        <>
            <SEO title="Personal Schedule - MEC Faculty" description="View your teaching timetable and departmental meetings." />
            <Navbar />

            <div className="portal-subpage" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#fcfcfc' }}>
                <div className="inner-row">
                    <Link to="/portal/faculty" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--main-color)', textDecoration: 'none', marginBottom: '30px', fontWeight: '600' }}>
                        <FaChevronLeft style={{ marginRight: '8px' }} /> Back to Workspace
                    </Link>

                    <div className="portal-header" style={{ marginBottom: '50px' }}>
                        <h1 style={{ color: 'var(--main-color)', fontSize: '36px', fontWeight: '800' }}>Personal Teaching Schedule</h1>
                        <p style={{ color: '#666', fontSize: '18px', marginTop: '10px' }}>Term 1 | Academic Year 2024/2025</p>
                    </div>

                    <div className="schedule-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                        <div className="main-timetable" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '25px', color: 'var(--main-color)' }}>Today's Classes</h3>
                            <div className="timetable-items">
                                {[
                                    { time: '08:00 - 08:40', subject: 'Mathematics (Senior B)', room: 'Room 12 (Block A)' },
                                    { time: '09:20 - 10:00', subject: 'Physics (Year 10)', room: 'Laboratory 02' },
                                    { time: '11:00 - 11:40', subject: 'Computer Science', room: 'IT Lab 01' },
                                    { time: '14:00 - 14:40', subject: 'Staff Departmental Meeting', room: 'Conference Hall' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '15px 0', alignItems: 'center' }}>
                                        <div style={{ width: '120px', color: 'var(--accent-color)', fontWeight: '700' }}>
                                            <FaClock style={{ marginRight: '5px' }} /> {item.time}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: '700', color: '#333' }}>{item.subject}</div>
                                            <div style={{ fontSize: '14px', color: '#888' }}><FaMapMarkerAlt /> {item.room}</div>
                                        </div>
                                        <a href="#" style={{ color: 'var(--main-color)', textDecoration: 'none', fontSize: '14px', border: '1px solid #ddd', padding: '5px 12px', borderRadius: '5px' }}>Check Attendance</a>
                                    </div>
                                ))}
                            </div>
                            <a href="#" className="portal-btn" style={{ marginTop: '30px', width: 'auto', display: 'inline-block' }}>Download Full Weekly Timetable (PDF)</a>
                        </div>

                        <div className="upcoming-events" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '15px', color: 'var(--main-color)', display: 'flex', alignItems: 'center' }}><FaUsers style={{ marginRight: '10px' }} /> Meetings</h3>
                                <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px' }}>
                                    <p style={{ margin: 0, fontWeight: '700' }}>CBC Curriculum Review</p>
                                    <span style={{ fontSize: '14px', color: '#888' }}>Friday, 10:00 AM | Senior Hall</span>
                                </div>
                            </div>

                            <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '15px', color: 'var(--main-color)', display: 'flex', alignItems: 'center' }}><FaCalendarAlt style={{ marginRight: '10px' }} /> Duty Week</h3>
                                <p style={{ color: '#666', fontSize: '15px' }}>Your next active duty week (Grounds & Cafeteria) begins on **February 24th**.</p>
                                <a href="#" style={{ color: 'var(--accent-color)', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>View Duty Rota →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FacultySchedule;
