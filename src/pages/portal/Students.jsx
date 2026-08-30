import React, { useState } from 'react';
import Navbar from '../../components/common/navigation/Navbar';
import Footer from '../../components/common/Footer';
import HallOfFame from '../../components/portal/HallOfFame';
import SEO from '../../components/common/SEO';
import PortalHero from '../../components/portal/PortalHero';
import { useLanguage } from '../../context/LanguageContext';

import {
  LINKED_CHILDREN,
  SUBJECT_PERFORMANCE,
  ATTENDANCE_DATA,
  TIMETABLE_DATA,
  ASSIGNMENTS,
  ANNOUNCEMENTS,
  MESSAGES_INBOX,
  SCHOOL_EVENTS,
  SCHOOL_DOCUMENTS,
  LIBRARY_BOOKS,
  LEARNING_RESOURCES,
  UPCOMING_EXAMS,
  STUDENT_ACHIEVEMENTS,
  STUDENT_CLUBS
} from '../../data/portalData';

import {
  FaGraduationCap, FaLayerGroup, FaIcons, FaBookOpen, FaUserGraduate,
  FaBell, FaCalendarAlt, FaFileAlt, FaBook, FaDesktop, FaClipboardList,
  FaAward, FaCalendarCheck, FaClock, FaDownload, FaUpload, FaSearch,
  FaCheckCircle, FaStar, FaTrophy, FaEnvelope, FaExclamationTriangle, FaTimes
} from 'react-icons/fa';

import '../../css/portal.css';

// Hero Assets
import studentImg1 from '../../assets/junior1.jpg';
import studentImg2 from '../../assets/kids.jpg';
import studentImg3 from '../../assets/upper.jpg';

const StudentPortal = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  /* Active Student Data (Brian Mukanzi — Grade 6 East) */
  const student = LINKED_CHILDREN[0];
  const subjects = SUBJECT_PERFORMANCE[student.id] || [];
  const attendance = ATTENDANCE_DATA[student.id] || { rate: 98, present: 49, absent: 1, recentLog: [] };
  const timetable = TIMETABLE_DATA[student.id] || [];
  const assignments = ASSIGNMENTS[student.id] || [];
  const libraryBooks = LIBRARY_BOOKS[student.id] || [];

  /* Interactive States */
  const [activeDay, setActiveDay] = useState('Monday');
  const [resourceSearch, setResourceSearch] = useState('');
  const [resourceFilter, setResourceFilter] = useState('All');

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedAsg, setSelectedAsg] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const heroSlides = [
    {
      image: studentImg1,
      title: "Shape Your Future at MEC",
      description: "Access world-class learning resources, assignments, timetables, and campus activities."
    },
    {
      image: studentImg2,
      title: "Holistic Student Development",
      description: "From academic mastery to STEM, music, and leadership, thrive in a supportive environment."
    },
    {
      image: studentImg3,
      title: "Pioneers of Excellence",
      description: "Empowering students to become confident, innovative, and responsible global citizens."
    }
  ];

  /* Filter Learning Resources */
  const filteredResources = LEARNING_RESOURCES.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(resourceSearch.toLowerCase()) ||
                          res.subject.toLowerCase().includes(resourceSearch.toLowerCase()) ||
                          res.topic.toLowerCase().includes(resourceSearch.toLowerCase());
    const matchesFilter = resourceFilter === 'All' || res.subject === resourceFilter;
    return matchesSearch && matchesFilter;
  });

  /* Assignment Submission Handler */
  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
    }, 2000);
  };

  return (
    <>
      <SEO title={t.students} description="MEC Student Digital Learning Portal - Access homework, timetables, grades, and resources." />
      <Navbar />

      {/* Hero Section */}
      <PortalHero slides={heroSlides} />

      {/* Sub-Menu Navigation Bar */}
      <div className="portal-submenu-wrapper">
        <ul className="portal-submenu">
          <li className="portal-submenu-item">
            <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
              <FaLayerGroup style={{ marginRight: 6 }} /> Overview
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'academics' ? 'active' : ''} onClick={() => setActiveTab('academics')}>
              <FaGraduationCap style={{ marginRight: 6 }} /> Academics & Grades
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>
              <FaClipboardList style={{ marginRight: 6 }} /> Homework & Projects
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'timetable' ? 'active' : ''} onClick={() => setActiveTab('timetable')}>
              <FaCalendarAlt style={{ marginRight: 6 }} /> Class Timetable
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'exams' ? 'active' : ''} onClick={() => setActiveTab('exams')}>
              <FaFileAlt style={{ marginRight: 6 }} /> Exams & CATs
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'resources' ? 'active' : ''} onClick={() => setActiveTab('resources')}>
              <FaDesktop style={{ marginRight: 6 }} /> Learning Hub
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'library' ? 'active' : ''} onClick={() => setActiveTab('library')}>
              <FaBookOpen style={{ marginRight: 6 }} /> Digital Library
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'activities' ? 'active' : ''} onClick={() => setActiveTab('activities')}>
              <FaTrophy style={{ marginRight: 6 }} /> Clubs & Sports
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>
              <FaStar style={{ marginRight: 6 }} /> Achievements Wall
            </button>
          </li>
        </ul>
      </div>

      <div className="student-portal-wrapper">
        <div className="inner-row" style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px' }}>

          {/* Welcome Banner */}
          <div className="student-welcome-banner">
            <div className="student-profile-strip">
              <img src={student.avatar} alt={student.name} className="student-avatar-lg" />
              <div className="student-profile-meta">
                <h1>Welcome Back, {student.name}!</h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>
                  Moi Educational Centre Student Portal · Admission No: <strong>{student.admNo}</strong>
                </p>
                <div className="student-meta-badges">
                  <span className="student-badge-pill"><FaSchool style={{ marginRight: 6 }} /> {student.grade} - Stream {student.stream}</span>
                  <span className="student-badge-pill"><FaFileAlt style={{ marginRight: 6 }} /> {student.curriculum}</span>
                  <span className="student-badge-pill"><FaBuilding style={{ marginRight: 6 }} /> House: {student.house}</span>
                  <span className="student-badge-pill"><FaCalendarAlt style={{ marginRight: 6 }} /> Term 1, Academic Year 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── TAB 1: OVERVIEW DASHBOARD ─────────────────────── */}
          {activeTab === 'overview' && (
            <>
              {/* Quick Metrics Summary Cards Grid */}
              <div className="student-metrics-grid">
                <div className="student-metric-card" onClick={() => setActiveTab('timetable')}>
                  <div className="student-card-icon-wrap blue"><FaClock /></div>
                  <div className="student-metric-title">Today's Classes</div>
                  <div className="student-metric-val">5 Lessons</div>
                  <div className="student-metric-sub">Next: Science Lab 2 (08:40 AM)</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('attendance')}>
                  <div className="student-card-icon-wrap emerald"><FaCalendarCheck /></div>
                  <div className="student-metric-title">Attendance Rate</div>
                  <div className="student-metric-val">{attendance.rate}%</div>
                  <div className="student-metric-sub">{attendance.present} Days Present</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('academics')}>
                  <div className="student-card-icon-wrap purple"><FaAward /></div>
                  <div className="student-metric-title">Current Average</div>
                  <div className="student-metric-val">89.4% (EE)</div>
                  <div className="student-metric-sub">Exceeding Expectations</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('assignments')}>
                  <div className="student-card-icon-wrap amber"><FaClipboardList /></div>
                  <div className="student-metric-title">Assignments Due</div>
                  <div className="student-metric-val">{assignments.length} Tasks</div>
                  <div className="student-metric-sub">Next due: Feb 23 (Math)</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('exams')}>
                  <div className="student-card-icon-wrap rose"><FaCalendarAlt /></div>
                  <div className="student-metric-title">Upcoming Exams</div>
                  <div className="student-metric-val">{UPCOMING_EXAMS.length} CATs</div>
                  <div className="student-metric-sub">Starts: March 2, 2026</div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="student-quick-actions-bar">
                <button className="student-action-btn" onClick={() => setActiveTab('timetable')}>
                  <FaCalendarAlt style={{ marginRight: 6 }} /> View Timetable
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('assignments')}>
                  <FaClipboardList style={{ marginRight: 6 }} /> View Assignments
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('academics')}>
                  <FaGraduationCap style={{ marginRight: 6 }} /> View Results
                </button>
                <button className="student-action-btn" onClick={() => { setSelectedAsg(assignments[0]); setShowSubmitModal(true); }}>
                  <FaUpload style={{ marginRight: 6 }} /> Submit Homework
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('resources')}>
                  <FaDesktop style={{ marginRight: 6 }} /> Open Learning Hub
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('library')}>
                  <FaBookOpen style={{ marginRight: 6 }} /> Browse Library
                </button>
              </div>

              {/* Current Lesson Banner */}
              <div className="current-lesson-box">
                <div>
                  <span className="current-lesson-tag">Active Lesson in Session</span>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '4px 0' }}>
                    Mathematics & Numeracy · Room 6E
                  </h3>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: 13 }}>
                    08:00 AM - 08:40 AM · Instructor: Mr. David Omondi
                  </p>
                </div>
                <button className="student-action-btn" style={{ background: '#fff', color: '#7720E9' }} onClick={() => setActiveTab('timetable')}>
                  Full Schedule →
                </button>
              </div>

              {/* Grid Split: Subject Progress & Notices */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
                <div className="student-section-card" style={{ marginBottom: 0 }}>
                  <div className="student-section-header">
                    <div className="student-section-title-group">
                      <FaAward className="student-section-icon" />
                      <div>
                        <div className="student-section-title">Academic Subject Overview</div>
                        <div className="student-section-sub">Term 1 Assessment Scores</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {subjects.slice(0, 4).map((sub, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, fontWeight: 700 }}>
                          <span>{sub.name}</span>
                          <span style={{ color: '#7720E9' }}>{sub.score}% ({sub.grade})</span>
                        </div>
                        <div style={{ height: 8, background: '#E2E8F0', borderRadius: 999, overflow: 'hidden' }}>
                          <div style={{ height: '100%', background: 'linear-gradient(90deg, #7720E9, #2563EB)', width: `${sub.score}%`, borderRadius: 999 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="student-section-card" style={{ marginBottom: 0 }}>
                  <div className="student-section-header">
                    <div className="student-section-title-group">
                      <FaBell className="student-section-icon" />
                      <div>
                        <div className="student-section-title">School Announcements</div>
                        <div className="student-section-sub">Notices from school administration</div>
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

          {/* ─── TAB 2: ACADEMICS & RESULTS ────────────────────── */}
          {activeTab === 'academics' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaGraduationCap className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Academic Subject Performance & Competency Breakdown</div>
                    <div className="student-section-sub">Full Term 1 report for {student.name} ({student.curriculum})</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                {subjects.map((sub, i) => (
                  <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{sub.name}</div>
                          <div style={{ fontSize: 12, color: '#64748B' }}>Teacher: {sub.teacher}</div>
                        </div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#7720E9' }}>{sub.score}%</div>
                      </div>

                      <div style={{ height: 8, background: '#E2E8F0', borderRadius: 999, overflow: 'hidden', marginBottom: 12 }}>
                        <div style={{ height: '100%', background: 'linear-gradient(90deg, #7720E9, #2563EB)', width: `${sub.score}%`, borderRadius: 999 }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>
                        <span>Rating: <strong style={{ color: '#7720E9' }}>{sub.grade}</strong></span>
                        <span style={{ color: '#16A34A' }}>Trend: {sub.trend}</span>
                      </div>
                      <div style={{ fontSize: 12, color: '#475569', fontStyle: 'italic', background: '#FFFFFF', padding: 8, borderRadius: 8, border: '1px solid #E2E8F0' }}>
                        "{sub.comment}"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 3: ASSIGNMENTS & HOMEWORK ──────────────────── */}
          {activeTab === 'assignments' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaClipboardList className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Assignments & Project Manager</div>
                    <div className="student-section-sub">Track homework, due dates, and upload completed work</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {assignments.map(asg => (
                  <div key={asg.id} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#7720E9', textTransform: 'uppercase' }}>{asg.subject}</span>
                        <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginTop: 2 }}>{asg.title}</h3>
                        <p style={{ fontSize: 12, color: '#64748B' }}>Instructor: {asg.teacher}</p>
                      </div>
                      <span className={`badge-status ${asg.status.toLowerCase().replace(' ', '')}`}>
                        {asg.status}
                      </span>
                    </div>

                    <p style={{ fontSize: 13, color: '#334155', background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0', marginBottom: 12 }}>
                      {asg.instructions}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: '#64748B', fontWeight: 600 }}>
                        <FaCalendarAlt style={{ marginRight: 4 }} /> Due Date: <strong style={{ color: '#DC2626' }}>{asg.dueDate}</strong>
                      </span>

                      {asg.status !== 'Submitted' && asg.status !== 'Completed' && (
                        <button
                          className="student-action-btn"
                          style={{ background: '#7720E9', color: '#fff', border: 'none' }}
                          onClick={() => { setSelectedAsg(asg); setShowSubmitModal(true); }}
                        >
                          <FaUpload /> Upload & Submit
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 4: TIMETABLE ──────────────────────────────── */}
          {activeTab === 'timetable' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaCalendarAlt className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Weekly Class Timetable</div>
                    <div className="student-section-sub">Mon-Fri lesson schedule for {student.name}</div>
                  </div>
                </div>
              </div>

              <div className="day-tab-row">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <button
                    key={day}
                    className={`day-tab-btn ${activeDay === day ? 'active' : ''}`}
                    onClick={() => setActiveDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="timetable-list">
                {(timetable.find(t => t.day === activeDay)?.slots || []).map((slot, i) => (
                  <div className="timetable-slot" key={i}>
                    <div className="timetable-time">{slot.time}</div>
                    <div className="timetable-subj">{slot.subject}</div>
                    <div style={{ fontSize: 13, color: '#475569' }}>Instructor: {slot.teacher}</div>
                    <div className="timetable-room">{slot.room}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 5: EXAMS & CATS ────────────────────────────── */}
          {activeTab === 'exams' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaCalendarAlt className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Examination & CAT Timetable</div>
                    <div className="student-section-sub">Internal examination dates and seat allocations</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {UPCOMING_EXAMS.map(ex => (
                  <div key={ex.id} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0', borderLeft: '4px solid #EF4444' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{ex.subject}</h3>
                      <span className="badge-status urgent">{ex.duration}</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#475569', marginBottom: 8 }}>
                      <FaCalendarAlt style={{ marginRight: 4 }} /> Date: <strong>{ex.date}</strong> ({ex.time}) · Venue: <strong>{ex.venue}</strong>
                    </div>
                    <div style={{ fontSize: 12, color: '#64748B', background: '#FFFFFF', padding: 10, borderRadius: 8, border: '1px solid #E2E8F0' }}>
                      <strong>Regulations:</strong> {ex.instructions}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 6: LEARNING RESOURCES ─────────────────────── */}
          {activeTab === 'resources' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaBookOpen className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Digital Learning Resources & Revision Hub</div>
                    <div className="student-section-sub">Download schemes of work, notes, and revision papers</div>
                  </div>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Search resources by title, topic, or subject..."
                  value={resourceSearch}
                  onChange={e => setResourceSearch(e.target.value)}
                  style={{ flex: 1, padding: '10px 14px', borderRadius: 999, border: '1px solid #CBD5E1', fontSize: 13, outline: 'none' }}
                />
                <select
                  value={resourceFilter}
                  onChange={e => setResourceFilter(e.target.value)}
                  style={{ padding: '10px 14px', borderRadius: 999, border: '1px solid #CBD5E1', fontSize: 13 }}
                >
                  <option value="All">All Subjects</option>
                  <option value="Science & Tech">Science & Tech</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English">English</option>
                  <option value="Kiswahili">Kiswahili</option>
                </select>
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Subject</th>
                      <th>Resource Type</th>
                      <th>Topic</th>
                      <th>Teacher</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResources.map(res => (
                      <tr key={res.id}>
                        <td><strong>{res.title}</strong></td>
                        <td><span className="badge-status active">{res.subject}</span></td>
                        <td>{res.type}</td>
                        <td>{res.topic}</td>
                        <td>{res.teacher}</td>
                        <td>
                          <button className="student-action-btn" style={{ padding: '4px 12px', fontSize: 12 }} onClick={() => alert(`Downloading ${res.title}...`)}>
                            <FaDownload /> Download ({res.size})
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── TAB 7: DIGITAL LIBRARY ───────────────────────── */}
          {activeTab === 'library' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaBook className="student-section-icon" />
                  <div>
                    <div className="student-section-title">MEC Digital Library Catalog</div>
                    <div className="student-section-sub">Borrowed books, due dates, and digital reading portal</div>
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 14 }}>Currently Issued Books</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {libraryBooks.map((bk, i) => (
                  <div key={i} style={{ background: '#F8FAFC', padding: 18, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{bk.title}</div>
                    <div style={{ fontSize: 12, color: '#64748B', marginBottom: 8 }}>Author: {bk.author}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                      <span>Due: <strong>{bk.dueDate}</strong></span>
                      <span className="badge-status confirmed">{bk.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 8: CLUBS & ACTIVITIES ─────────────────────── */}
          {activeTab === 'activities' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaTrophy className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Registered Clubs, Societies & Sports Squads</div>
                    <div className="student-section-sub">Extracurricular membership and schedules</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {STUDENT_CLUBS.map((cl, i) => (
                  <div key={i} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <span className="badge-status active" style={{ marginBottom: 8 }}>{cl.category}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginTop: 4 }}>{cl.name}</h3>
                    <p style={{ fontSize: 12, color: '#64748B' }}>Patron / Coach: {cl.patron}</p>
                    <div style={{ fontSize: 12, color: '#334155', marginTop: 10 }}>
                      <FaClock style={{ marginRight: 4 }} /> Meeting: <strong>{cl.meeting}</strong> ({cl.venue})
                    </div>
                    <div style={{ marginTop: 12, textAlign: 'right' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#7720E9', background: '#F3E8FF', padding: '4px 10px', borderRadius: 999 }}>
                        {cl.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 9: ACHIEVEMENTS WALL ──────────────────────── */}
          {activeTab === 'achievements' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaStar className="student-section-icon" style={{ color: '#0F3D91' }} />
                  <div>
                    <div className="student-section-title">Student Achievements & Awards Gallery</div>
                    <div className="student-section-sub">Academic, music, sports, and leadership accolades</div>
                  </div>
                </div>
              </div>

              <div className="achievements-grid">
                {STUDENT_ACHIEVEMENTS.map(ach => (
                  <div className="achievement-card" key={ach.id}>
                    <span className="achievement-badge-pill">{ach.badge}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>{ach.title}</h3>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#7720E9', textTransform: 'uppercase' }}>{ach.category} · {ach.date}</p>
                    <p style={{ fontSize: 12, color: '#475569', marginTop: 8 }}>{ach.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ─── SUBMIT ASSIGNMENT MODAL ─────────────────────────── */}
      {showSubmitModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Submit Homework Assignment</div>
              <button className="portal-modal-close" onClick={() => setShowSubmitModal(false)}><FaTimes /></button>
            </div>

            {submitSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 48, color: '#16A34A', marginBottom: 12 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800 }}>Assignment Submitted Successfully!</h4>
                <p style={{ fontSize: 13, color: '#64748B' }}>Your work has been uploaded and timestamped for instructor review.</p>
              </div>
            ) : (
              <form onSubmit={handleAssignmentSubmit}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Assignment Title</label>
                  <input type="text" className="portal-form-input" value={selectedAsg?.title || ''} disabled />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Upload Homework File (PDF, DOCX, PNG)</label>
                  <input type="file" className="portal-form-input" required />
                </div>

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', justifyContent: 'center', height: 46 }}>
                  <FaUpload /> Confirm & Submit Homework
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <HallOfFame />
      <Footer />
    </>
  );
};

export default StudentPortal;
