import React, { useState } from 'react';
import Navbar from '../../components/common/navigation/Navbar';
import Footer from '../../components/common/Footer';
import SEO from '../../components/common/SEO';
import PortalHero from '../../components/portal/PortalHero';
import PortalSubMenu from '../../components/portal/PortalSubMenu';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

import {
  TEACHER_PROFILE_DATA,
  CLASS_STUDENTS_LIST,
  TEACHER_LESSON_PLANS,
  ASSIGNMENTS,
  ANNOUNCEMENTS,
  UPCOMING_EXAMS,
  SCHOOL_DOCUMENTS,
  TIMETABLE_DATA
} from '../../data/portalData';

import {
  FaBook, FaCalendarAlt, FaFileAlt, FaDesktop, FaUsers, FaBell,
  FaChalkboardTeacher, FaUserGraduate, FaClipboardCheck, FaChartLine,
  FaPlus, FaCheckCircle, FaPen, FaSave, FaPaperPlane, FaDownload,
  FaExclamationTriangle, FaSearch, FaAward, FaSlidersH, FaTimes, FaShieldAlt,
  FaFolderOpen, FaGraduationCap, FaLayerGroup, FaSchool, FaComments, FaStar, FaBookOpen, FaBriefcase
} from 'react-icons/fa';

import '../../css/portal.css';

// Assets
import facultyImg1 from '../../assets/about1.jpg';
import facultyImg2 from '../../assets/senior.jpg';
import facultyImg3 from '../../assets/academic.jpg';

const FacultyPortal = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  /* Teacher Profile Data */
  const teacher = TEACHER_PROFILE_DATA;
  const [students, setStudents] = useState(CLASS_STUDENTS_LIST);
  const [selectedClass, setSelectedClass] = useState('Grade 6 East');

  /* Interactive States */
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [activeTimetableDay, setActiveTimetableDay] = useState('Monday');

  /* Marks Entry State */
  const [marksData, setMarksData] = useState(
    students.map(s => ({ admNo: s.admNo, name: s.name, catScore: s.mathScore, termScore: Math.min(100, s.mathScore + 2), teacherComment: 'Consistent performance in problem solving.' }))
  );
  const [marksSavedNotice, setMarksSavedNotice] = useState(false);

  /* Modal States */
  const [showLessonPlanModal, setShowLessonPlanModal] = useState(false);
  const [lpTopic, setLpTopic] = useState('');
  const [lpObjectives, setLpObjectives] = useState('');
  const [lpCreatedNotice, setLpCreatedNotice] = useState(false);

  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [asgTitle, setAsgTitle] = useState('');
  const [asgDueDate, setAsgDueDate] = useState('2026-03-05');
  const [asgInstructions, setAsgInstructions] = useState('');
  const [asgCreatedNotice, setAsgCreatedNotice] = useState(false);

  const slides = [
    {
      image: facultyImg1,
      title: "Academic Excellence at MEC",
      description: "Empowering our faculty to lead the next generation of innovators, thinkers, and leaders."
    },
    {
      image: facultyImg2,
      title: "Dedicated Educator Workspace",
      description: "Comprehensive tools for class management, CBC/Cambridge lesson planning, and student tracking."
    },
    {
      image: facultyImg3,
      title: "Innovative Pedagogy",
      description: "Where traditional Kenyan values meet modern digital learning technology and collaboration."
    }
  ];

  /* Attendance Handler */
  const handleToggleAttendance = (admNo, newStatus) => {
    if (attendanceSubmitted) return;
    setStudents(prev => prev.map(s => s.admNo === admNo ? { ...s, status: newStatus } : s));
  };

  /* Save Attendance Handler */
  const handleSaveAttendance = () => {
    setAttendanceSubmitted(true);
  };

  /* Create Lesson Plan Handler */
  const handleCreateLessonPlan = (e) => {
    e.preventDefault();
    setLpCreatedNotice(true);
    setTimeout(() => {
      setLpCreatedNotice(false);
      setShowLessonPlanModal(false);
      setLpTopic('');
      setLpObjectives('');
    }, 2000);
  };

  /* Create Assignment Handler */
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    setAsgCreatedNotice(true);
    setTimeout(() => {
      setAsgCreatedNotice(false);
      setShowAssignmentModal(false);
      setAsgTitle('');
      setAsgInstructions('');
    }, 2000);
  };

  return (
    <>
      <SEO title={t.faculty} description={t.workspaceSub} />
      <Navbar />

      {/* Hero Section */}
      <PortalHero slides={slides} />

      {/* Portal Sub-Menu Navigation Bar */}
      <PortalSubMenu />

      {/* Interactive Teacher Navigation Workspace Bar */}
      <div className="portal-submenu-wrapper" style={{ background: '#050816', borderColor: 'rgba(255,255,255,0.1)' }}>
        <ul className="portal-submenu">
          <li className="portal-submenu-item">
            <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
              <FaLayerGroup style={{ marginRight: 6 }} /> Workspace Summary
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'my-classes' ? 'active' : ''} onClick={() => setActiveTab('my-classes')}>
              <FaSchool style={{ marginRight: 6 }} /> My Classes & Students
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>
              <FaClipboardCheck style={{ marginRight: 6 }} /> Daily Roll Call
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'lesson-planning' ? 'active' : ''} onClick={() => setActiveTab('lesson-planning')}>
              <FaBookOpen style={{ marginRight: 6 }} /> Lesson Planner
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>
              <FaPen style={{ marginRight: 6 }} /> Assignments & Marking
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'grading' ? 'active' : ''} onClick={() => setActiveTab('grading')}>
              <FaChartLine style={{ marginRight: 6 }} /> Marks Sheet & Grading
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>
              <FaFileAlt style={{ marginRight: 6 }} /> Report Cards Workflow
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'timetable' ? 'active' : ''} onClick={() => setActiveTab('timetable')}>
              <FaCalendarAlt style={{ marginRight: 6 }} /> Teaching Timetable
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'communication' ? 'active' : ''} onClick={() => setActiveTab('communication')}>
              <FaComments style={{ marginRight: 6 }} /> Parent Messaging
            </button>
          </li>
          <li className="portal-submenu-item">
            <button className={activeTab === 'pastoral' ? 'active' : ''} onClick={() => setActiveTab('pastoral')}>
              <FaStar style={{ marginRight: 6 }} /> Pastoral & Behaviour
            </button>
          </li>
        </ul>
      </div>

      <div className="student-portal-wrapper">
        <div className="inner-row" style={{ maxWidth: 1350, margin: '0 auto', padding: '0 20px' }}>

          {/* Teacher Profile Banner Header */}
          <div className="student-welcome-banner" style={{ background: 'linear-gradient(135deg, #050816 0%, #12052C 50%, #7720E9 100%)' }}>
            <div className="student-profile-strip">
              <img src={teacher.avatar} alt={teacher.name} className="student-avatar-lg" />
              <div className="student-profile-meta">
                <h1>Welcome, {teacher.name}</h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>
                  {teacher.title} · Staff ID: <strong>{teacher.staffId}</strong>
                </p>
                <div className="student-meta-badges">
                  <span className="student-badge-pill"><FaSchool style={{ marginRight: 6 }} /> Head of {teacher.headOfStream}</span>
                  <span className="student-badge-pill"><FaFolderOpen style={{ marginRight: 6 }} /> Department: {teacher.department}</span>
                  <span className="student-badge-pill"><FaGraduationCap style={{ marginRight: 6 }} /> {teacher.qualifications}</span>
                  <span className="student-badge-pill"><FaCalendarAlt style={{ marginRight: 6 }} /> Term 1, Academic Year 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── TAB 1: WORKSPACE SUMMARY (OVERVIEW) ─────────────── */}
          {activeTab === 'overview' && (
            <>
              {/* Summary Metrics Grid */}
              <div className="student-metrics-grid">
                <div className="student-metric-card" onClick={() => setActiveTab('my-classes')}>
                  <div className="student-card-icon-wrap purple"><FaUsers /></div>
                  <div className="student-metric-title">My Classes</div>
                  <div className="student-metric-val">3 Streams</div>
                  <div className="student-metric-sub">124 Total Learners</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('timetable')}>
                  <div className="student-card-icon-wrap blue"><FaChalkboardTeacher /></div>
                  <div className="student-metric-title">Today's Classes</div>
                  <div className="student-metric-val">{teacher.todayLessonsCount} Lessons</div>
                  <div className="student-metric-sub">Next: Math (Grade 6 West)</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('assignments')}>
                  <div className="student-card-icon-wrap amber"><FaClipboardCheck /></div>
                  <div className="student-metric-title">Pending Marking</div>
                  <div className="student-metric-val">{teacher.pendingMarkingCount} Submissions</div>
                  <div className="student-metric-sub">Math Fractions Project</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('attendance')}>
                  <div className="student-card-icon-wrap emerald"><FaCalendarCheck /></div>
                  <div className="student-metric-title">Daily Roll Call</div>
                  <div className="student-metric-val">{attendanceSubmitted ? 'Completed' : 'Pending'}</div>
                  <div className="student-metric-sub">Grade 6 East Attendance</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('grading')}>
                  <div className="student-card-icon-wrap rose"><FaChartLine /></div>
                  <div className="student-metric-title">Class Average</div>
                  <div className="student-metric-val">87.2% (EE)</div>
                  <div className="student-metric-sub">Term 1 Performance</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="student-quick-actions-bar">
                <button className="student-action-btn" onClick={() => setActiveTab('attendance')}>
                  <FaClipboardCheck style={{ marginRight: 6 }} /> Take Attendance
                </button>
                <button className="student-action-btn" onClick={() => setShowLessonPlanModal(true)}>
                  <FaBookOpen style={{ marginRight: 6 }} /> Create Lesson Plan
                </button>
                <button className="student-action-btn" onClick={() => setShowAssignmentModal(true)}>
                  <FaPen style={{ marginRight: 6 }} /> Create Assignment
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('grading')}>
                  <FaChartLine style={{ marginRight: 6 }} /> Enter CAT Marks
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('reports')}>
                  <FaFileAlt style={{ marginRight: 6 }} /> Submit Report Cards
                </button>
                <Link to="/portal/faculty/lms" className="student-action-btn" style={{ textDecoration: 'none' }}>
                  <FaDesktop style={{ marginRight: 6 }} /> Open Google LMS
                </Link>
                <Link to="/portal/faculty/hr" className="student-action-btn" style={{ textDecoration: 'none' }}>
                  <FaBriefcase style={{ marginRight: 6 }} /> HR & Payslips
                </Link>
              </div>

              {/* Existing Academic & Faculty Quick Cards */}
              <div className="student-section-card">
                <div className="student-section-header">
                  <div className="student-section-title-group">
                    <FaDesktop className="student-section-icon" />
                    <div>
                      <div className="student-section-title">Faculty Academic Portals & Systems</div>
                      <div className="student-section-sub">Direct access to LMS, Curriculum Guides, and HR Tools</div>
                    </div>
                  </div>
                </div>

                <div className="portal-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  <div className="portal-card">
                    <div className="card-icon-wrapper"><FaDesktop /></div>
                    <h3>LMS Management</h3>
                    <p>Upload course materials to Google Classroom, manage student enrollments, and set up assignments.</p>
                    <Link to="/portal/faculty/lms" className="portal-btn">Open LMS</Link>
                  </div>

                  <div className="portal-card">
                    <div className="card-icon-wrapper"><FaBook /></div>
                    <h3>Curriculum Developer</h3>
                    <p>Access KICD CBC standards and Cambridge IGCSE curriculum templates.</p>
                    <Link to="/portal/faculty/resources" className="portal-btn">Access Resources</Link>
                  </div>

                  <div className="portal-card">
                    <div className="card-icon-wrapper"><FaFileAlt /></div>
                    <h3>Grading & Marks Sheet</h3>
                    <p>Enter CAT scores, term results, and generate digitized report card forms.</p>
                    <button className="portal-btn" onClick={() => setActiveTab('grading')}>Enter Marks</button>
                  </div>

                  <div className="portal-card">
                    <div className="card-icon-wrapper"><FaCalendarAlt /></div>
                    <h3>Teaching Timetable</h3>
                    <p>View your teaching schedule, duty master rotas, and staff meeting calendar.</p>
                    <button className="portal-btn" onClick={() => setActiveTab('timetable')}>View Schedule</button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─── TAB 2: MY CLASSES & LEARNER MANAGEMENT ──────────── */}
          {activeTab === 'my-classes' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaUsers className="student-section-icon" />
                  <div>
                    <div className="student-section-title">My Assigned Classes & Learner Roster</div>
                    <div className="student-section-sub">Student monitoring, performance levels, and attendance rates</div>
                  </div>
                </div>
              </div>

              {/* Class Selector Row */}
              <div className="day-tab-row" style={{ marginBottom: 20 }}>
                {teacher.assignedClasses.map((cls, idx) => (
                  <button
                    key={idx}
                    className={`day-tab-btn ${selectedClass === cls.split(' ')[0] + ' ' + cls.split(' ')[1] ? 'active' : ''}`}
                    onClick={() => setSelectedClass(cls.split(' ')[0] + ' ' + cls.split(' ')[1])}
                  >
                    {cls}
                  </button>
                ))}
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Adm No</th>
                      <th>Learner Name</th>
                      <th>Class & Stream</th>
                      <th>Attendance %</th>
                      <th>Math Score %</th>
                      <th>Current Level</th>
                      <th>Pastoral Observation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(st => (
                      <tr key={st.admNo}>
                        <td><strong>{st.admNo}</strong></td>
                        <td><strong>{st.name}</strong></td>
                        <td>{st.grade}</td>
                        <td><span className="badge-status confirmed">{st.attendancePct}%</span></td>
                        <td><strong>{st.mathScore}%</strong></td>
                        <td><span className="badge-status active">{st.mathScore >= 85 ? 'Exceeding Expectations (EE)' : 'Meeting Expectations (ME)'}</span></td>
                        <td>{st.pastoralNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── TAB 3: DAILY ROLL CALL & ATTENDANCE ───────────── */}
          {activeTab === 'attendance' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaCalendarCheck className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Daily Attendance Register & Roll Call</div>
                    <div className="student-section-sub">Mark daily attendance for {selectedClass} (Prevents duplicate entries)</div>
                  </div>
                </div>

                {attendanceSubmitted ? (
                  <span className="badge-status confirmed" style={{ fontSize: 13, padding: '6px 14px' }}>
                    <FaCheckCircle style={{ marginRight: 6 }} /> Roll Call Submitted & Locked
                  </span>
                ) : (
                  <button className="portal-pay-btn" onClick={() => setAttendanceSubmitted(true)}>
                    <FaSave /> Lock & Submit Attendance
                  </button>
                )}
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Adm No</th>
                      <th>Learner Name</th>
                      <th>Class Stream</th>
                      <th>Status Action</th>
                      <th>Status Badge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(st => (
                      <tr key={st.admNo}>
                        <td><strong>{st.admNo}</strong></td>
                        <td><strong>{st.name}</strong></td>
                        <td>{st.grade}</td>
                        <td>
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button
                              className="student-action-btn"
                              style={{ padding: '3px 10px', fontSize: 11, background: st.status === 'Present' ? '#16A34A' : '#F1F5F9', color: st.status === 'Present' ? '#fff' : '#334155' }}
                              onClick={() => handleToggleAttendance(st.admNo, 'Present')}
                            >
                              P (Present)
                            </button>
                            <button
                              className="student-action-btn"
                              style={{ padding: '3px 10px', fontSize: 11, background: st.status === 'Absent' ? '#DC2626' : '#F1F5F9', color: st.status === 'Absent' ? '#fff' : '#334155' }}
                              onClick={() => handleToggleAttendance(st.admNo, 'Absent')}
                            >
                              A (Absent)
                            </button>
                            <button
                              className="student-action-btn"
                              style={{ padding: '3px 10px', fontSize: 11, background: st.status === 'Late' ? '#0F3D91' : '#F1F5F9', color: st.status === 'Late' ? '#fff' : '#334155' }}
                              onClick={() => handleToggleAttendance(st.admNo, 'Late')}
                            >
                              L (Late)
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className={`badge-status ${st.status === 'Present' ? 'confirmed' : 'urgent'}`}>
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

          {/* ─── TAB 4: LESSON PLANNER ─────────────────────────── */}
          {activeTab === 'lesson-planning' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaBook className="student-section-icon" />
                  <div>
                    <div className="student-section-title">CBC & Cambridge Lesson Planning Module</div>
                    <div className="student-section-sub">Structure learning objectives, core competencies, and assessment methods</div>
                  </div>
                </div>

                <button className="portal-pay-btn" onClick={() => setShowLessonPlanModal(true)}>
                  <FaPlus /> Create Lesson Plan
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {TEACHER_LESSON_PLANS.map(lp => (
                  <div key={lp.id} style={{ background: '#F8FAFC', padding: 20, borderRadius: 16, border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="badge-status active">{lp.curriculum}</span>
                      <span className="badge-status confirmed">{lp.status}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{lp.subject} ({lp.class}) — {lp.topic}</h3>
                    <p style={{ fontSize: 13, color: '#334155', marginTop: 6 }}><strong>Objectives:</strong> {lp.objectives}</p>
                    <div style={{ fontSize: 12, color: '#64748B', marginTop: 6 }}>
                      <strong>Core Competencies:</strong> {lp.competencies}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 5: MARKS SHEET & GRADING ──────────────────── */}
          {activeTab === 'grading' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaChartLine className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Interactive Marks Sheet & Assessment Grading</div>
                    <div className="student-section-sub">Enter CAT scores with instant CBC/Cambridge grade calculation and autosave</div>
                  </div>
                </div>

                <button className="portal-pay-btn" onClick={handleSaveMarks}>
                  <FaSave /> Save Marks Sheet
                </button>
              </div>

              {marksSavedNotice && (
                <div style={{ background: '#DCFCE7', color: '#15803D', padding: 12, borderRadius: 12, fontWeight: 700, fontSize: 13, marginBottom: 16 }}>
                  <FaCheckCircle style={{ marginRight: 6 }} /> Marks sheet successfully auto-saved and backed up to school database!
                </div>
              )}

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Adm No</th>
                      <th>Learner Name</th>
                      <th>CAT 1 (40%)</th>
                      <th>End of Term (60%)</th>
                      <th>Total Score %</th>
                      <th>Calculated Level</th>
                      <th>Teacher Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marksData.map((m, idx) => {
                      const total = Math.round((m.catScore * 0.4) + (m.termScore * 0.6));
                      const level = total >= 80 ? 'Exceeding Expectations (EE)' : total >= 65 ? 'Meeting Expectations (ME)' : 'Approaching Expectations (AE)';
                      return (
                        <tr key={m.admNo}>
                          <td><strong>{m.admNo}</strong></td>
                          <td><strong>{m.name}</strong></td>
                          <td>
                            <input
                              type="number"
                              value={m.catScore}
                              onChange={e => {
                                const val = parseInt(e.target.value || 0);
                                setMarksData(prev => prev.map((item, i) => i === idx ? { ...item, catScore: val } : item));
                              }}
                              style={{ width: 70, padding: 4, borderRadius: 6, border: '1px solid #CBD5E1' }}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={m.termScore}
                              onChange={e => {
                                const val = parseInt(e.target.value || 0);
                                setMarksData(prev => prev.map((item, i) => i === idx ? { ...item, termScore: val } : item));
                              }}
                              style={{ width: 70, padding: 4, borderRadius: 6, border: '1px solid #CBD5E1' }}
                            />
                          </td>
                          <td><strong>{total}%</strong></td>
                          <td><span className="badge-status confirmed">{level}</span></td>
                          <td>
                            <input
                              type="text"
                              value={m.teacherComment}
                              onChange={e => {
                                const txt = e.target.value;
                                setMarksData(prev => prev.map((item, i) => i === idx ? { ...item, teacherComment: txt } : item));
                              }}
                              style={{ width: '100%', padding: 4, borderRadius: 6, border: '1px solid #CBD5E1', fontSize: 12 }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── TAB 6: TIMETABLE ──────────────────────────────── */}
          {activeTab === 'timetable' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaCalendarAlt className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Teacher Master Timetable & Duty Rota</div>
                    <div className="student-section-sub">Teaching schedule for {teacher.name}</div>
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
                {(TIMETABLE_DATA['brian-g6'].find(t => t.day === activeTimetableDay)?.slots || []).map((slot, i) => (
                  <div className="timetable-slot" key={i}>
                    <div className="timetable-time">{slot.time}</div>
                    <div className="timetable-subj">{slot.subject} (Grade 6 East)</div>
                    <div className="timetable-room">{slot.room}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB 7: REPORT CARDS WORKFLOW ──────────────────── */}
          {activeTab === 'reports' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaFileAlt className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Term Report Cards Approval Workflow</div>
                    <div className="student-section-sub">Submit compiled class reports for Headteacher review</div>
                  </div>
                </div>

                <button className="portal-pay-btn" onClick={() => alert("Report cards submitted to Principal Mrs. Florence Kamau for sign-off!")}>
                  <FaPaperPlane /> Submit All Reports for Sign-Off
                </button>
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Learner Name</th>
                      <th>Class Stream</th>
                      <th>Mean Grade</th>
                      <th>Remarks Status</th>
                      <th>Principal Approval</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(st => (
                      <tr key={st.admNo}>
                        <td><strong>{st.name}</strong></td>
                        <td>{st.grade}</td>
                        <td><strong>{st.mathScore}% (EE)</strong></td>
                        <td><span className="badge-status confirmed">Comments Ready</span></td>
                        <td><span className="badge-status pending">Pending Sign-off</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ─── LESSON PLAN CREATOR MODAL ───────────────────────── */}
      {showLessonPlanModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowLessonPlanModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Create CBC / Cambridge Lesson Plan</div>
              <button className="portal-modal-close" onClick={() => setShowLessonPlanModal(false)}><FaTimes /></button>
            </div>

            {lpCreatedNotice ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 48, color: '#16A34A', marginBottom: 12 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800 }}>Lesson Plan Submitted!</h4>
                <p style={{ fontSize: 13, color: '#64748B' }}>Sent to Head of Department for curriculum review.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateLessonPlan}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Subject & Class</label>
                  <input type="text" className="portal-form-input" value="Mathematics — Grade 6 East" disabled />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Topic / Sub-Strand</label>
                  <input type="text" className="portal-form-input" value={lpTopic} onChange={e => setLpTopic(e.target.value)} placeholder="e.g. Fractions & Percentage Conversions" required />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Learning Objectives</label>
                  <textarea className="portal-form-textarea" rows={3} value={lpObjectives} onChange={e => setLpObjectives(e.target.value)} placeholder="By the end of the lesson, the learner should be able to..." required />
                </div>

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', justifyContent: 'center', height: 46 }}>
                  Save Lesson Plan →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── ASSIGNMENT CREATOR MODAL ────────────────────────── */}
      {showAssignmentModal && (
        <div className="portal-modal-backdrop" onClick={() => setShowAssignmentModal(false)}>
          <div className="portal-modal-content" onClick={e => e.stopPropagation()}>
            <div className="portal-modal-header">
              <div className="portal-modal-title">Create New Homework Assignment</div>
              <button className="portal-modal-close" onClick={() => setShowAssignmentModal(false)}><FaTimes /></button>
            </div>

            {asgCreatedNotice ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <FaCheckCircle style={{ fontSize: 48, color: '#16A34A', marginBottom: 12 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800 }}>Assignment Published to Learners & Parents!</h4>
                <p style={{ fontSize: 13, color: '#64748B' }}>Notifications sent to Grade 6 East class portal.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateAssignment}>
                <div className="portal-form-group">
                  <label className="portal-form-label">Assignment Title</label>
                  <input type="text" className="portal-form-input" value={asgTitle} onChange={e => setAsgTitle(e.target.value)} placeholder="e.g. Geometry & Angles Project 2" required />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Due Date</label>
                  <input type="date" className="portal-form-input" value={asgDueDate} onChange={e => setAsgDueDate(e.target.value)} required />
                </div>

                <div className="portal-form-group">
                  <label className="portal-form-label">Instructions & Resource Notes</label>
                  <textarea className="portal-form-textarea" rows={3} value={asgInstructions} onChange={e => setAsgInstructions(e.target.value)} placeholder="Provide instructions for students..." required />
                </div>

                <button type="submit" className="portal-pay-btn" style={{ width: '100%', justifyContent: 'center', height: 46 }}>
                  Publish Assignment →
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

export default FacultyPortal;
