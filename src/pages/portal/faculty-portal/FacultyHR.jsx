import React from 'react';
import Navbar from '../../../components/common/navigation/Navbar';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/common/SEO';
import { FaUserCircle, FaFileInvoiceDollar, FaHandPaper, FaBriefcase, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../css/portal.css';

const FacultyHR = () => {
    return (
        <>
            <SEO title="Staff HR Portal - MEC Faculty" description="Manage your payroll, leave applications, and benefits." />
            <Navbar />

            <div className="portal-subpage" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#fcfcfc' }}>
                <div className="inner-row">
                    <Link to="/portal/faculty" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--main-color)', textDecoration: 'none', marginBottom: '30px', fontWeight: '600' }}>
                        <FaChevronLeft style={{ marginRight: '8px' }} /> Back to Workspace
                    </Link>

                    <div className="portal-header" style={{ marginBottom: '50px' }}>
                        <h1 style={{ color: 'var(--main-color)', fontSize: '36px', fontWeight: '800' }}>Staff HR & Payroll Portal</h1>
                        <p style={{ color: '#666', fontSize: '18px', marginTop: '10px' }}>Securely manage your personal and professional records at Moi Educational Centre.</p>
                    </div>

                    <div className="hr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaFileInvoiceDollar /></div>
                            <h3>Payroll & Payslips</h3>
                            <p>View and download your monthly digital payslips and P9 certificates for the current fiscal year.</p>
                            <a href="#" className="portal-btn">View My Payslips</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaHandPaper /></div>
                            <h3>Leave Management</h3>
                            <p>Apply for annual, sick, or personal leave. View your remaining leaf balance and application status.</p>
                            <a href="#" className="portal-btn">Apply for Leave</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaUserCircle /></div>
                            <h3>Personal Profile</h3>
                            <p>Update your contact details, emergency contacts, and professional certification records.</p>
                            <a href="#" className="portal-btn">Update Profile</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaBriefcase /></div>
                            <h3>Staff Benefits</h3>
                            <p>Information regarding medical cover (NHIF & Private), pension schemes, and school SACCO options.</p>
                            <a href="#" className="portal-btn">Explore Benefits</a>
                        </div>
                    </div>

                    <div className="hr-policy-section" style={{ marginTop: '60px', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ marginBottom: '20px', color: 'var(--main-color)' }}>Essential HR Policies</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                'MEC Code of Professional Conduct 2024',
                                'Standard Leave Policy & Procedure',
                                'Performance Management Framework',
                                'Staff Wellness & Health Guidelines'
                            ].map((policy, idx) => (
                                <li key={idx} style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#333', fontWeight: '500' }}>{policy}</span>
                                    <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>VIEW POLICY</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FacultyHR;
