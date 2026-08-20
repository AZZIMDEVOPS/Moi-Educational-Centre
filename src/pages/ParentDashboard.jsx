import React, { useState } from 'react';
import Navbar from '../components/common/navigation/Navbar';
import Footer from '../components/common/Footer';
import { useLanguage } from '../context/LanguageContext';
import {
  LINKED_CHILDREN,
  PARENT_PROFILE,
  FEE_STATEMENTS,
  SUBJECT_PERFORMANCE,
  ATTENDANCE_DATA,
  TIMETABLE_DATA,
  ASSIGNMENTS,
  ANNOUNCEMENTS,
  MESSAGES_INBOX,
  SCHOOL_EVENTS,
  SCHOOL_DOCUMENTS,
  LIBRARY_BOOKS,
  REQUEST_FORMS,
  TEACHERS_LIST
} from '../data/portalData';

import {
  FaUserGraduate, FaCalendarCheck, FaChartLine, FaCommentAlt, FaBell, FaCreditCard,
  FaFileInvoiceDollar, FaBus, FaBook, FaCalendarAlt, FaBullhorn, FaEnvelope,
  FaFilePdf, FaClipboardList, FaChalkboardTeacher, FaUserCog, FaQuestionCircle,
  FaTrophy, FaHeartbeat, FaCheckCircle, FaExclamationTriangle, FaDownload,
  FaPrint, FaPlus, FaTimes, FaSearch, FaPaperPlane, FaChevronRight, FaBars,
  FaPhone, FaShieldAlt, FaAward
} from 'react-icons/fa';

import '../css/dashboard.css';

const ParentDashboard = () => {
  const { language } = useLanguage();

  /* ─── State ────────────────────────────────────────────── */
  const [selectedChildId, setSelectedChildId] = useState('brian-g6');
  const [activeModule, setActiveModule] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [childDropdownOpen, setChildDropdownOpen] = useState(false);
  const [notifDrawerOpen, setNotifDrawerOpen] = useState(false);

  /* Modal States */
  const [showPayModal, setShowPayModal] = useState(false);
  const [payAmount, setPayAmount] = useState('14500');
  const [payMethod, setPayMethod] = useState('mpesa');
  const [payPhone, setPayPhone] = useState(PARENT_PROFILE.phone);
  const [payStatus, setPayStatus] = useState('idle'); // idle | processing | success

  const [showComposeModal, setShowComposeModal] = useState(false);
  const [msgRecipient, setMsgRecipient] = useState('Class Teacher');
  const [msgSubject, setMsgSubject] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgSentNotice, setMsgSentNotice] = useState(false);

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [reqType, setReqType] = useState('Leave Request');
  const [reqNotes, setReqNotes] = useState('');
  const [reqSentNotice, setReqSentNotice] = useState(false);

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [activeTimetableDay, setActiveTimetableDay] = useState('Monday');
  const [assignmentFilter, setAssignmentFilter] = useState('All');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  /* ─── Helpers ─────────────────────────────────────────── */
  const isAllChildren = selectedChildId === 'all';
  const currentChild = isAllChildren
    ? LINKED_CHILDREN[0]
    : LINKED_CHILDREN.find(c => c.id === selectedChildId) || LINKED_CHILDREN[0];

  const currentFeeStatement = FEE_STATEMENTS[currentChild.id] || [];
  const currentSubjects = SUBJECT_PERFORMANCE[currentChild.id] || [];
  const currentAttendance = ATTENDANCE_DATA[currentChild.id] || { rate: 100, present: 50, absent: 0, recentLog: [] };
  const currentTimetable = TIMETABLE_DATA[currentChild.id] || [];
  const currentAssignments = ASSIGNMENTS[currentChild.id] || [];
  const currentLibrary = LIBRARY_BOOKS[currentChild.id] || [];
  const currentTeachers = TEACHERS_LIST[currentChild.id] || TEACHERS_LIST['brian-g6'];

  /* Payment Processor Simulation */
  const handleProcessPayment = (e) => {
    e.preventDefault();
    setPayStatus('processing');
    setTimeout(() => {
      setPayStatus('success');
    }, 3500);
  };

  /* Send Message Helper */
  const handleSendMessage = (e) => {
    e.preventDefault();
    setMsgSentNotice(true);
    setTimeout(() => {
      setMsgSentNotice(false);
      setShowComposeModal(false);
      setMsgSubject('');
      setMsgText('');
    }, 2000);
  };

  /* Submit Request Helper */
  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setReqSentNotice(true);
    setTimeout(() => {
      setReqSentNotice(false);
      setShowRequestModal(false);
      setReqNotes('');
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="parent-portal-root">
        {/* ─── 1. SIDEBAR NAVIGATION ───────────────────────────── */}
        <aside className={`portal-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="portal-sidebar-header">
            <img src="/assets/logo.png" alt="MEC Logo" className="portal-sidebar-logo" />
            <div className="portal-sidebar-brand">
              <span className="portal-brand-title">MOI EDUCATIONAL CENTRE</span>
              <span className="portal-brand-sub">PARENT PORTAL</span>
            </div>
          </div>

          <nav className="portal-sidebar-nav">
            {/* Group 1: Core */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">DASHBOARD</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'overview' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('overview'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaChartLine /> Overview</span>
                </button>
              </div>
            </div>

            {/* Group 2: Learner & Academics */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">ACADEMICS</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'profile' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('profile'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaUserGraduate /> Learner Profile</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'performance' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('performance'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaAward /> Academic Performance</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'reports' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('reports'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaFilePdf /> Report Cards</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'assignments' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('assignments'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaClipboardList /> Assignments</span>
                  <span className="portal-nav-badge">{currentAssignments.length}</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'timetable' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('timetable'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaCalendarAlt /> Timetable</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'teachers' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('teachers'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaChalkboardTeacher /> Teaching Team</span>
                </button>
              </div>
            </div>

            {/* Group 3: Finance */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">FINANCE</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'finance' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('finance'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaFileInvoiceDollar /> Fee Statement</span>
                  {currentChild.feeBalance > 0 && <span className="portal-nav-badge">Due</span>}
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'payments' ? 'active' : ''}`}
                  onClick={() => { setShowPayModal(true); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaCreditCard /> Pay School Fees</span>
                </button>
              </div>
            </div>

            {/* Group 4: School Life */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">SCHOOL LIFE</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'attendance' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('attendance'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaCalendarCheck /> Attendance</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'transport' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('transport'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaBus /> School Bus / Transport</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'activities' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('activities'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaTrophy /> Co-Curricular & Sports</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'library' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('library'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaBook /> Library Books</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'calendar' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('calendar'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaCalendarAlt /> School Calendar</span>
                </button>
              </div>
            </div>

            {/* Group 5: Communication & Documents */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">COMMUNICATION</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'messages' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('messages'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaEnvelope /> Messages</span>
                  <span className="portal-nav-badge">2</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'announcements' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('announcements'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaBullhorn /> Announcements</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'documents' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('documents'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaFilePdf /> Documents Centre</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'requests' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('requests'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaClipboardList /> Online Requests</span>
                </button>
              </div>
            </div>

            {/* Group 6: Account & Support */}
            <div className="portal-nav-group">
              <div className="portal-nav-group-title">SUPPORT & ACCOUNT</div>
              <div className="portal-nav-items">
                <button
                  className={`portal-nav-btn ${activeModule === 'support' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('support'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaQuestionCircle /> Help & FAQs</span>
                </button>
                <button
                  className={`portal-nav-btn ${activeModule === 'settings' ? 'active' : ''}`}
                  onClick={() => { setActiveModule('settings'); setSidebarOpen(false); }}
                >
                  <span className="portal-nav-left"><FaUserCog /> Account Settings</span>
                </button>
              </div>
            </div>
          </nav>

          <div className="portal-sidebar-footer">
            <div className="portal-parent-card">
              <img src={PARENT_PROFILE.avatar} alt="Parent Avatar" className="portal-parent-avatar" />
              <div>
                <div className="portal-parent-name">{PARENT_PROFILE.name}</div>
                <div className="portal-parent-role">Parent / Guardian Account</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ─── 2. MAIN PORTAL BODY ────────────────────────────── */}
        <main className="portal-main">
          {/* Top Bar Header */}
          <header className="portal-topbar">
            <div className="portal-topbar-left">
              <button className="portal-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
                <FaBars />
              </button>

              <div className="portal-term-pill">
                <span className="portal-term-dot" />
                <span>Academic Year 2026 · Term 1</span>
              </div>
            </div>

            <div className="portal-topbar-right">
              {/* Sibling / Child Selector */}
              <div className="child-selector-wrap">
                <button className="child-selector-btn" onClick={() => setChildDropdownOpen(!childDropdownOpen)}>
                  <img src={currentChild.avatar} alt={currentChild.name} className="child-selector-avatar" />
                  <div style={{ textAlign: 'left' }}>
                    <div className="child-selector-name">{currentChild.name}</div>
                    <div className="child-selector-grade">{currentChild.grade} ({currentChild.stream})</div>
                  </div>
                  <span style={{ fontSize: 10, color: '#64748B' }}>▼</span>
                </button>

                {childDropdownOpen && (
                  <div className="child-dropdown-menu">
                    <div className="portal-nav-group-title" style={{ padding: '4px 8px', marginBottom: 4 }}>
                      SELECT LEARNER
                    </div>
                    {LINKED_CHILDREN.map(child => (
                      <div
                        key={child.id}
                        className={`child-option ${selectedChildId === child.id ? 'selected' : ''}`}
                        onClick={() => { setSelectedChildId(child.id); setChildDropdownOpen(false); }}
                      >
                        <img src={child.avatar} alt={child.name} className="child-selector-avatar" />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, color: '#0F172A' }}>{child.name}</div>
                          <div style={{ fontSize: 11, color: '#64748B' }}>{child.grade} · {child.curriculum}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Pay Fees Trigger */}
              <button className="portal-pay-btn" onClick={() => setShowPayModal(true)}>
                <FaCreditCard /> Pay Fees
              </button>

              {/* Notification Drawer Trigger */}
              <button className="portal-icon-btn" onClick={() => setNotifDrawerOpen(!notifDrawerOpen)} aria-label="Notifications">
                <FaBell />
                <span className="portal-icon-badge">3</span>
              </button>
            </div>
          </header>

          {/* ─── 3. PORTAL CONTENT AREA ─────────────────────────── */}
          <div className="portal-content-body">

            {/* MODULE: OVERVIEW DASHBOARD */}
            {activeModule === 'overview' && (
              <>
                {/* Welcome Hero */}
                <div className="portal-welcome-hero">
                  <div className="portal-welcome-top">
                    <div>
                      <h1 className="portal-welcome-title">Good Morning, {PARENT_PROFILE.name} 👋</h1>
                      <p className="portal-welcome-sub">
                        Here is your real-time snapshot for Moi Educational Centre. Track performance, fee balances, bus location, and teacher communications.
                      </p>
                    </div>

                    <button
                      className="action-pill"
                      style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
                      onClick={() => setShowComposeModal(true)}
                    >
                      <FaEnvelope /> Contact School
                    </button>
                  </div>

                  {/* Active Learner Banner Strip */}
                  <div className="portal-learner-card-strip">
                    <img src={currentChild.avatar} alt={currentChild.name} className="learner-strip-avatar" />
                    <div className="learner-strip-details">
                      <div className="learner-strip-name">{currentChild.name} ({currentChild.admNo})</div>
                      <div className="learner-strip-pills">
                        <span className="learner-pill">🏫 {currentChild.grade} - Stream {currentChild.stream}</span>
                        <span className="learner-pill">📜 {currentChild.curriculum}</span>
                        <span className="learner-pill">🏠 House: {currentChild.house}</span>
                        <span className="learner-pill">👩‍🏫 Teacher: {currentChild.classTeacher}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority Important Alerts */}
                <div className="portal-alerts-stack">
                  {currentChild.feeBalance > 0 && (
                    <div className="portal-alert-card warning">
                      <div className="portal-alert-left">
                        <FaExclamationTriangle className="portal-alert-icon" />
                        <div>
                          <strong>Outstanding Fee Balance Notice:</strong> KES {currentChild.feeBalance.toLocaleString()} is due for {currentChild.name} before Mid-Term Break (Feb 26).
                        </div>
                      </div>
                      <button className="portal-alert-btn" onClick={() => setShowPayModal(true)}>Pay Now</button>
                    </div>
                  )}

                  <div className="portal-alert-card info">
                    <div className="portal-alert-left">
                      <FaCheckCircle className="portal-alert-icon" />
                      <div>
                        <strong>Upcoming Event:</strong> Parent-Teacher Consultations on Friday, 27th February from 8:30 AM in Classroom {currentChild.stream}.
                      </div>
                    </div>
                    <button className="portal-alert-btn" onClick={() => setActiveModule('calendar')}>View Calendar</button>
                  </div>
                </div>

                {/* Quick Summary Metrics Grid */}
                <div className="portal-metrics-grid">
                  {/* Fee Balance Card */}
                  <div className="portal-metric-card" onClick={() => setActiveModule('finance')}>
                    <div className="metric-card-top">
                      <div className="metric-card-icon-wrap rose">
                        <FaFileInvoiceDollar />
                      </div>
                      <span className="metric-card-title">Fee Balance</span>
                    </div>
                    <div className="metric-card-value">
                      KES {currentChild.feeBalance.toLocaleString()}
                    </div>
                    <div className="metric-card-sub">
                      {currentChild.feeBalance === 0 ? 'Fully Cleared for Term 1' : 'Term 1 Balance Due'}
                    </div>
                  </div>

                  {/* Attendance Card */}
                  <div className="portal-metric-card" onClick={() => setActiveModule('attendance')}>
                    <div className="metric-card-top">
                      <div className="metric-card-icon-wrap emerald">
                        <FaCalendarCheck />
                      </div>
                      <span className="metric-card-title">Attendance Rate</span>
                    </div>
                    <div className="metric-card-value">{currentAttendance.rate}%</div>
                    <div className="metric-card-sub">
                      {currentAttendance.present} Days Present · {currentAttendance.absent} Absent
                    </div>
                  </div>

                  {/* Academic Performance Card */}
                  <div className="portal-metric-card" onClick={() => setActiveModule('performance')}>
                    <div className="metric-card-top">
                      <div className="metric-card-icon-wrap purple">
                        <FaAward />
                      </div>
                      <span className="metric-card-title">Academic Score</span>
                    </div>
                    <div className="metric-card-value">89.4% (EE)</div>
                    <div className="metric-card-sub">Exceeding Expectations Level</div>
                  </div>

                  {/* Assignments Card */}
                  <div className="portal-metric-card" onClick={() => setActiveModule('assignments')}>
                    <div className="metric-card-top">
                      <div className="metric-card-icon-wrap amber">
                        <FaClipboardList />
                      </div>
                      <span className="metric-card-title">Assignments</span>
                    </div>
                    <div className="metric-card-value">{currentAssignments.length} Pending</div>
                    <div className="metric-card-sub">Next due: Feb 23 (Math Set 4)</div>
                  </div>

                  {/* Transport Card */}
                  <div className="portal-metric-card" onClick={() => setActiveModule('transport')}>
                    <div className="metric-card-top">
                      <div className="metric-card-icon-wrap blue">
                        <FaBus />
                      </div>
                      <span className="metric-card-title">Transport Status</span>
                    </div>
                    <div className="metric-card-value" style={{ fontSize: 16 }}>{currentChild.busStatus}</div>
                    <div className="metric-card-sub">{currentChild.busNumber}</div>
                  </div>
                </div>

                {/* Quick Actions Bar */}
                <div className="portal-quick-actions">
                  <button className="action-pill" onClick={() => setShowPayModal(true)}>
                    💳 Pay Fees (M-Pesa)
                  </button>
                  <button className="action-pill" onClick={() => setActiveModule('reports')}>
                    📜 Download Report Card
                  </button>
                  <button className="action-pill" onClick={() => setShowComposeModal(true)}>
                    ✉️ Message Class Teacher
                  </button>
                  <button className="action-pill" onClick={() => setActiveModule('timetable')}>
                    📅 View Timetable
                  </button>
                  <button className="action-pill" onClick={() => setActiveModule('transport')}>
                    🚌 Live Bus Tracker
                  </button>
                  <button className="action-pill" onClick={() => setShowRequestModal(true)}>
                    📝 Submit Leave Request
                  </button>
                </div>

                {/* Academic Performance & Feed Split */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
                  {/* Subject Performance Box */}
                  <div className="portal-module-card" style={{ marginBottom: 0 }}>
                    <div className="module-header">
                      <div className="module-title-group">
                        <FaChartLine className="module-title-icon" />
                        <div>
                          <div className="module-title">Current Subject Performance</div>
                          <div className="module-sub">Term 1 Assessment Scores for {currentChild.name}</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {currentSubjects.slice(0, 4).map((sub, i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, fontWeight: 700 }}>
                            <span>{sub.name}</span>
                            <span style={{ color: '#7720E9' }}>{sub.score}% ({sub.grade})</span>
                          </div>
                          <div className="subject-progress-bar">
                            <div className="subject-progress-fill" style={{ width: `${sub.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="action-pill"
                      style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}
                      onClick={() => setActiveModule('performance')}
                    >
                      View All Subject Breakdown & Analytics →
                    </button>
                  </div>

                  {/* Recent Announcements & Teacher Feed */}
                  <div className="portal-module-card" style={{ marginBottom: 0 }}>
                    <div className="module-header">
                      <div className="module-title-group">
                        <FaBullhorn className="module-title-icon" />
                        <div>
                          <div className="module-title">Teacher Feed & Notices</div>
                          <div className="module-sub">Latest circulars and updates from school</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {ANNOUNCEMENTS.map(item => (
                        <div key={item.id} style={{ background: '#F8FAFC', padding: 14, borderRadius: 12, borderLeft: '4px solid #7720E9' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#7720E9', textTransform: 'uppercase' }}>{item.category}</span>
                            <span style={{ fontSize: 11, color: '#64748B' }}>{item.date}</span>
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>{item.title}</div>
                          <div style={{ fontSize: 12, color: '#475569' }}>{item.summary}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* MODULE: FINANCE & FEES */}
            {activeModule === 'finance' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaFileInvoiceDollar className="module-title-icon" />
                    <div>
                      <div className="module-title">School Fees & Payment Statement</div>
                      <div className="module-sub">Official billing statement for {currentChild.name} ({currentChild.admNo})</div>
                    </div>
                  </div>

                  <button className="portal-pay-btn" onClick={() => setShowPayModal(true)}>
                    <FaCreditCard /> Pay School Fees
                  </button>
                </div>

                <div className="finance-stats-grid">
                  <div className="finance-box">
                    <div className="finance-box-label">Total Term Invoice</div>
                    <div className="finance-box-val">KES {currentChild.termFee.toLocaleString()}</div>
                  </div>
                  <div className="finance-box">
                    <div className="finance-box-label">Amount Paid</div>
                    <div className="finance-box-val success">KES {currentChild.paidFee.toLocaleString()}</div>
                  </div>
                  <div className="finance-box">
                    <div className="finance-box-label">Outstanding Balance</div>
                    <div className="finance-box-val danger">KES {currentChild.feeBalance.toLocaleString()}</div>
                  </div>
                  <div className="finance-box">
                    <div className="finance-box-label">Payment Due Date</div>
                    <div className="finance-box-val" style={{ fontSize: 16 }}>Feb 26, 2026</div>
                  </div>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 24 }}>Transaction Ledger</h3>
                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Ref / Invoice</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount (KES)</th>
                        <th>Balance (KES)</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentFeeStatement.map((st, i) => (
                        <tr key={i}>
                          <td>{st.date}</td>
                          <td><strong>{st.id}</strong></td>
                          <td>{st.desc}</td>
                          <td>
                            <span style={{ color: st.type === 'debit' ? '#DC2626' : '#16A34A', fontWeight: 700 }}>
                              {st.type.toUpperCase()}
                            </span>
                          </td>
                          <td><strong>KES {st.amount.toLocaleString()}</strong></td>
                          <td>KES {st.balance.toLocaleString()}</td>
                          <td>
                            <span className={`badge-status ${st.status.toLowerCase()}`}>
                              {st.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MODULE: ACADEMIC PERFORMANCE */}
            {activeModule === 'performance' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaAward className="module-title-icon" />
                    <div>
                      <div className="module-title">Academic Subject Breakdown & Competency Ratings</div>
                      <div className="module-sub">Detailed assessment report for {currentChild.name} ({currentChild.curriculum})</div>
                    </div>
                  </div>
                </div>

                <div className="subjects-grid">
                  {currentSubjects.map((sub, i) => (
                    <div className="subject-card" key={i}>
                      <div>
                        <div className="subject-card-top">
                          <div>
                            <div className="subject-card-name">{sub.name}</div>
                            <div className="subject-card-teacher">Instructor: {sub.teacher}</div>
                          </div>
                          <div className="subject-score-badge">{sub.score}%</div>
                        </div>

                        <div className="subject-progress-bar">
                          <div className="subject-progress-fill" style={{ width: `${sub.score}%` }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, fontWeight: 700 }}>
                          <span>Level: <strong style={{ color: '#7720E9' }}>{sub.grade}</strong></span>
                          <span style={{ color: '#16A34A' }}>Trend: {sub.trend}</span>
                        </div>
                        <div className="subject-comment">"{sub.comment}"</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: REPORT CARDS */}
            {activeModule === 'reports' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaFilePdf className="module-title-icon" />
                    <div>
                      <div className="module-title">Official Term Report Cards</div>
                      <div className="module-sub">Certified academic transcripts for {currentChild.name}</div>
                    </div>
                  </div>

                  <button className="action-pill" onClick={() => alert("Downloading official signed PDF report card...")}>
                    <FaDownload /> Download Signed PDF
                  </button>
                </div>

                {/* Printable Report Card Preview */}
                <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                  <div style={{ textAlign: 'center', borderBottom: '2px solid #7720E9', paddingBottom: 16, marginBottom: 20 }}>
                    <img src="/assets/logo.png" alt="MEC Crest" style={{ height: 48, marginBottom: 8 }} />
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>MOI EDUCATIONAL CENTRE</h2>
                    <p style={{ fontSize: 12, color: '#64748B', fontWeight: 600 }}>P.O. Box 45372 - 00100, Mai Mahiu Road, Nairobi West</p>
                    <p style={{ fontSize: 13, fontWeight: 800, color: '#7720E9', marginTop: 4 }}>TERM 1 2026 OFFICIAL LEARNER PERFORMANCE REPORT</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 13, marginBottom: 20, background: '#FFFFFF', padding: 16, borderRadius: 12, border: '1px solid #E2E8F0' }}>
                    <div><strong>Learner Name:</strong> {currentChild.name}</div>
                    <div><strong>Admission No:</strong> {currentChild.admNo}</div>
                    <div><strong>Grade & Stream:</strong> {currentChild.grade} {currentChild.stream}</div>
                    <div><strong>Curriculum:</strong> {currentChild.curriculum}</div>
                    <div><strong>House:</strong> {currentChild.house}</div>
                    <div><strong>Class Teacher:</strong> {currentChild.classTeacher}</div>
                  </div>

                  <div className="portal-table-wrap">
                    <table className="portal-table">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Score %</th>
                          <th>Rating</th>
                          <th>Class Average</th>
                          <th>Teacher Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSubjects.map((s, i) => (
                          <tr key={i}>
                            <td><strong>{s.name}</strong></td>
                            <td><strong>{s.score}%</strong></td>
                            <td><span className="badge-status confirmed">{s.grade}</span></td>
                            <td>78%</td>
                            <td>{s.comment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ marginTop: 24, background: '#FFFFFF', padding: 16, borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 13 }}>
                    <p style={{ fontWeight: 700, marginBottom: 4 }}>Principal's Remarks:</p>
                    <p style={{ color: '#475569', fontStyle: 'italic' }}>
                      "{currentChild.name} has demonstrated exemplary dedication and academic strength this term. Outstanding performance in leadership and co-curricular activities. Keep striving for excellence!"
                    </p>
                    <div style={{ marginTop: 12, textAlign: 'right', fontWeight: 800, color: '#0F172A' }}>
                      Mrs. Florence Kamau — Principal, Primary & Junior School
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE: ASSIGNMENTS */}
            {activeModule === 'assignments' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaClipboardList className="module-title-icon" />
                    <div>
                      <div className="module-title">Learner Homework & Projects</div>
                      <div className="module-sub">Track due dates and homework tasks for {currentChild.name}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {currentAssignments.map(asg => (
                    <div key={asg.id} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <div>
                          <span style={{ fontSize: 11, fontWeight: 800, color: '#7720E9', textTransform: 'uppercase' }}>{asg.subject}</span>
                          <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginTop: 2 }}>{asg.title}</h3>
                          <p style={{ fontSize: 12, color: '#64748B' }}>Assigned by: {asg.teacher}</p>
                        </div>
                        <span className={`badge-status ${asg.status.toLowerCase().replace(' ', '')}`}>
                          {asg.status}
                        </span>
                      </div>

                      <p style={{ fontSize: 13, color: '#334155', background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0', marginBottom: 12 }}>
                        {asg.instructions}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#64748B', fontWeight: 600 }}>
                        <span>📅 Due Date: <strong style={{ color: '#DC2626' }}>{asg.dueDate}</strong></span>
                        {asg.gradeAwarded && <span>Grade: <strong style={{ color: '#16A34A' }}>{asg.gradeAwarded}</strong></span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: TIMETABLE */}
            {activeModule === 'timetable' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaCalendarAlt className="module-title-icon" />
                    <div>
                      <div className="module-title">Class Schedule & Timetable</div>
                      <div className="module-sub">Weekly lesson timing for {currentChild.name} ({currentChild.grade})</div>
                    </div>
                  </div>
                </div>

                <div className="day-tab-row">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <button
                      key={day}
                      className={`day-tab-btn ${activeTimetableDay === day ? 'active' : ''}`}
                      onClick={() => setActiveTimetableDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="timetable-list">
                  {(currentTimetable.find(t => t.day === activeTimetableDay)?.slots || []).map((slot, i) => (
                    <div className="timetable-slot" key={i}>
                      <div className="timetable-time">{slot.time}</div>
                      <div className="timetable-subj">{slot.subject}</div>
                      <div style={{ fontSize: 13, color: '#475569' }}>Teacher: {slot.teacher}</div>
                      <div className="timetable-room">{slot.room}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: TRANSPORT / BUS TRACKER */}
            {activeModule === 'transport' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaBus className="module-title-icon" />
                    <div>
                      <div className="module-title">School Bus Transport Tracker</div>
                      <div className="module-sub">Real-time status for {currentChild.name}'s route</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 16, border: '1px solid #E2E8F0', marginBottom: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 20 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Assigned Vehicle</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{currentChild.busNumber}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Driver / Contact</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A' }}>{currentChild.driver}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Current Status</div>
                      <span className="badge-status active" style={{ fontSize: 13, marginTop: 4 }}>
                        {currentChild.busStatus}
                      </span>
                    </div>
                  </div>

                  {/* Route Stepper Bar */}
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Route Progress Stepper (Morning Route)</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#FFFFFF', padding: 16, borderRadius: 12, border: '1px solid #CBD5E1', fontSize: 12, fontWeight: 700 }}>
                    <div style={{ color: '#16A34A' }}>✓ 06:40 AM Departed Depot</div>
                    <div style={{ color: '#16A34A' }}>✓ 07:05 AM Pickup Mai Mahiu Rd</div>
                    <div style={{ color: '#7720E9' }}>➔ 07:22 AM Arrived at MEC</div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE: MESSAGES & COMMUNICATION */}
            {activeModule === 'messages' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaEnvelope className="module-title-icon" />
                    <div>
                      <div className="module-title">Teacher & Parent Communication Centre</div>
                      <div className="module-sub">Direct messaging with class teachers and administration</div>
                    </div>
                  </div>

                  <button className="portal-pay-btn" onClick={() => setShowComposeModal(true)}>
                    <FaPaperPlane /> Compose Message
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {MESSAGES_INBOX.map(msg => (
                    <div key={msg.id} style={{ background: msg.read ? '#F8FAFC' : '#EFF6FF', padding: 18, borderRadius: 14, border: '1px solid #E2E8F0', borderLeft: msg.read ? '4px solid #CBD5E1' : '4px solid #3B82F6' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <strong style={{ fontSize: 14, color: '#0F172A' }}>{msg.sender}</strong>
                        <span style={{ fontSize: 11, color: '#64748B' }}>{msg.date}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#7720E9', marginBottom: 4 }}>Subject: {msg.subject}</div>
                      <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.5 }}>{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: ANNOUNCEMENTS */}
            {activeModule === 'announcements' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaBullhorn className="module-title-icon" />
                    <div>
                      <div className="module-title">School Announcements & Circulars</div>
                      <div className="module-sub">Official school communications and policy notices</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {ANNOUNCEMENTS.map(item => (
                    <div key={item.id} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span className="badge-status active">{item.category}</span>
                        <span style={{ fontSize: 12, color: '#64748B' }}>{item.date}</span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: '#334155', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: DOCUMENTS */}
            {activeModule === 'documents' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaFilePdf className="module-title-icon" />
                    <div>
                      <div className="module-title">School Documents & Resource Centre</div>
                      <div className="module-sub">Download handbooks, trip consent forms, and policies</div>
                    </div>
                  </div>
                </div>

                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Document Title</th>
                        <th>Category</th>
                        <th>Date Published</th>
                        <th>File Size</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCHOOL_DOCUMENTS.map(doc => (
                        <tr key={doc.id}>
                          <td><strong>{doc.name}</strong></td>
                          <td><span className="badge-status active">{doc.category}</span></td>
                          <td>{doc.date}</td>
                          <td>{doc.size}</td>
                          <td>
                            <button className="action-pill" style={{ padding: '4px 12px', fontSize: 12 }} onClick={() => alert(`Downloading ${doc.name}...`)}>
                              <FaDownload /> Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MODULE: ONLINE REQUESTS */}
            {activeModule === 'requests' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaClipboardList className="module-title-icon" />
                    <div>
                      <div className="module-title">Parent Requests & Approvals</div>
                      <div className="module-sub">Submit leave requests, medical updates, or transport changes</div>
                    </div>
                  </div>

                  <button className="portal-pay-btn" onClick={() => setShowRequestModal(true)}>
                    <FaPlus /> New Request
                  </button>
                </div>

                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Req ID</th>
                        <th>Type</th>
                        <th>Learner</th>
                        <th>Date Submitted</th>
                        <th>Status</th>
                        <th>Admin Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {REQUEST_FORMS.map(req => (
                        <tr key={req.id}>
                          <td><strong>{req.id}</strong></td>
                          <td>{req.type}</td>
                          <td>{req.child}</td>
                          <td>{req.dateSubmitted}</td>
                          <td><span className={`badge-status ${req.status.toLowerCase().replace(' ', '')}`}>{req.status}</span></td>
                          <td>{req.comments}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MODULE: LEARNER PROFILE */}
            {activeModule === 'profile' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaUserGraduate className="module-title-icon" />
                    <div>
                      <div className="module-title">Official Learner Profile</div>
                      <div className="module-sub">Confidential academic and personal details for {currentChild.name}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  <div style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: '#7720E9', marginBottom: 12 }}>Personal Details</h4>
                    <div style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div><strong>Full Name:</strong> {currentChild.name}</div>
                      <div><strong>Admission Number:</strong> {currentChild.admNo}</div>
                      <div><strong>Grade & Stream:</strong> {currentChild.grade} {currentChild.stream}</div>
                      <div><strong>House System:</strong> {currentChild.house}</div>
                    </div>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: '#7720E9', marginBottom: 12 }}>Academic & Staff</h4>
                    <div style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div><strong>Curriculum:</strong> {currentChild.curriculum}</div>
                      <div><strong>Class Teacher:</strong> {currentChild.classTeacher}</div>
                      <div><strong>Head Teacher:</strong> {currentChild.headTeacher}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE: TEACHERS */}
            {activeModule === 'teachers' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaChalkboardTeacher className="module-title-icon" />
                    <div>
                      <div className="module-title">Teaching Team & Faculty</div>
                      <div className="module-sub">Educators guiding {currentChild.name}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  {currentTeachers.map((t, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0', display: 'flex', gap: 16, alignItems: 'center' }}>
                      <img src={t.avatar} alt={t.name} style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', border: '2px solid #7720E9' }} />
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 800, color: '#0F172A' }}>{t.name}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#7720E9' }}>{t.subject}</div>
                        <div style={{ fontSize: 11, color: '#64748B' }}>{t.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE: HELP & FAQS */}
            {activeModule === 'support' && (
              <div className="portal-module-card">
                <div className="module-header">
                  <div className="module-title-group">
                    <FaQuestionCircle className="module-title-icon" />
                    <div>
                      <div className="module-title">Parent Support & Frequently Asked Questions</div>
                      <div className="module-sub">Quick answers and contact info for MEC Administration</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { q: 'How do I pay school fees via M-Pesa?', a: 'Click the "Pay Fees" button at the top of the portal. Enter your M-Pesa phone number and amount. You will receive an instant STK prompt on your phone.' },
                    { q: 'When are official report cards published?', a: 'Official Term Report Cards are published digitally on the portal 3 days after the conclusion of term examinations.' },
                    { q: 'How do I submit a leave of absence for my child?', a: 'Go to Online Requests in the sidebar, click "New Request", select Leave Request, fill in dates, and submit.' }
                  ].map((faq, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', padding: 16, borderRadius: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Q: {faq.q}</div>
                      <div style={{ fontSize: 13, color: '#475569' }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* ─── 4. INTERACTIVE PAYMENT MODAL (M-PESA / BANK) ────── */}
      {showPayModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowPayModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Pay School Fees Online</div>
              <button className="portal-modal-close" onClick={() => setShowPayModal(false)}><FaTimes /></button>
            </div>

            {payStatus === 'idle' && (
              <form onSubmit={handleProcessPayment}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Select Student</label>
                  <select className="portal-form-select" value={selectedChildId} onChange={e => setSelectedChildId(e.target.value)}>
                    {LINKED_CHILDREN.map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.grade}) — Balance: KES {c.feeBalance.toLocaleString()}</option>
                    ))}
                  </select>
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Payment Amount (KES)</label>
                  <input type="number" className="portal-form-input" value={payAmount} onChange={e => setPayAmount(e.target.value)} required />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Payment Method</label>
                  <select className="portal-form-select" value={payMethod} onChange={e => setPayMethod(e.target.value)}>
                    <option value="mpesa">M-Pesa Express (STK Push)</option>
                    <option value="bank">Bank Wire / Transfer (Standard Chartered)</option>
                    <option value="card">Debit / Credit Card (Visa/Mastercard)</option>
                  </select>
                </div>

                {payMethod === 'mpesa' && (
                  <div className="portal-form-group">
                    <label className="portal-form-label">M-Pesa Registered Phone Number</label>
                    <input type="tel" className="portal-form-input" value={payPhone} onChange={e => setPayPhone(e.target.value)} placeholder="2547XXXXXXXX" required />
                    <small style={{ color: '#64748B', fontSize: 11, marginTop: 4, display: 'block' }}>
                      An STK prompt will pop up on your mobile device to enter your secret M-Pesa PIN.
                    </small>
                  </div>
                )}

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', height: 48, justifyContent: 'center', marginTop: 16 }}>
                  Initiate KES {parseInt(payAmount || 0).toLocaleString()} Payment →
                </button>
              </form>
            )}

            {payStatus === 'processing' && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div className="spin-loader" style={{ margin: '0 auto 20px', borderTopColor: '#7720E9' }} />
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A' }}>Processing M-Pesa STK Push...</h3>
                <p style={{ fontSize: 13, color: '#64748B', marginTop: 8 }}>
                  Please check your phone ({payPhone}) and enter your M-Pesa PIN to complete payment of KES {parseInt(payAmount || 0).toLocaleString()}.
                </p>
              </div>
            )}

            {payStatus === 'success' && (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 56, color: '#16A34A', marginBottom: 16 }} />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>Payment Confirmed Successfully!</h3>
                <p style={{ fontSize: 13, color: '#475569', marginTop: 6, marginBottom: 20 }}>
                  Receipt #MP-{Math.floor(100000 + Math.random() * 900000)} generated. An SMS confirmation has been sent to {payPhone}.
                </p>
                <button className="action-pill" style={{ background: '#7720E9', color: '#fff' }} onClick={() => { setPayStatus('idle'); setShowPayModal(false); }}>
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── 5. COMPOSE MESSAGE MODAL ─────────────────────────── */}
      {showComposeModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowComposeModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Compose Message to School</div>
              <button className="portal-modal-close" onClick={() => setShowComposeModal(false)}><FaTimes /></button>
            </div>

            {msgSentNotice ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 48, color: '#16A34A', marginBottom: 12 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800 }}>Message Dispatched to {msgRecipient}!</h4>
                <p style={{ fontSize: 13, color: '#64748B' }}>Average response time is within 2 hours during school operating hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Recipient Office / Department</label>
                  <select className="portal-form-select" value={msgRecipient} onChange={e => setMsgRecipient(e.target.value)}>
                    <option value="Class Teacher">Class Teacher ({currentChild.classTeacher})</option>
                    <option value="Finance Department">Finance & Accounts Office</option>
                    <option value="Principal Office">Principal Office</option>
                    <option value="Transport Office">Transport & School Bus Supervisor</option>
                  </select>
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Subject</label>
                  <input type="text" className="portal-form-input" value={msgSubject} onChange={e => setMsgSubject(e.target.value)} placeholder="e.g. Enquiry regarding upcoming assessment" required />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Message Details</label>
                  <textarea className="portal-form-textarea" rows={4} value={msgText} onChange={e => setMsgText(e.target.value)} placeholder="Write your message to the school..." required />
                </div>

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── 6. ONLINE REQUEST MODAL ──────────────────────────── */}
      {showRequestModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowRequestModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Submit Parent Request</div>
              <button className="portal-modal-close" onClick={() => setShowRequestModal(false)}><FaTimes /></button>
            </div>

            {reqSentNotice ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 48, color: '#16A34A', marginBottom: 12 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800 }}>Request Submitted Successfully!</h4>
                <p style={{ fontSize: 13, color: '#64748B' }}>Assigned Ref ID #REQ-{Math.floor(100 + Math.random() * 900)}. Track under Online Requests.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequest}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Request Type</label>
                  <select className="portal-form-select" value={reqType} onChange={e => setReqType(e.target.value)}>
                    <option value="Leave Request">Leave of Absence Request</option>
                    <option value="Transport Route Change">Transport Route / Bus Stop Change</option>
                    <option value="Medical Update">Medical Record / Allergy Update</option>
                    <option value="Contact Update">Parent Contact Info Update</option>
                  </select>
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Select Student</label>
                  <input type="text" className="portal-form-input" value={`${currentChild.name} (${currentChild.grade})`} disabled />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Request Details & Dates</label>
                  <textarea className="portal-form-textarea" rows={4} value={reqNotes} onChange={e => setReqNotes(e.target.value)} placeholder="Provide reason and specific dates..." required />
                </div>

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Formal Request →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ParentDashboard;
