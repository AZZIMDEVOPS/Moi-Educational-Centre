import React, { useState } from 'react';
import Navbar from '../../components/common/navigation/Navbar';
import Footer from '../../components/common/Footer';
import SEO from '../../components/common/SEO';
import { useLanguage } from '../../context/LanguageContext';

import {
  SCHOOL_ERP_METRICS,
  PRINCIPAL_APPROVAL_QUEUE,
  ADMISSIONS_PIPELINE,
  PROCUREMENT_REQUESTS,
  SCHOOL_ASSETS,
  ERP_AUDIT_LOGS,
  LINKED_CHILDREN,
  FEE_STATEMENTS,
  ANNOUNCEMENTS,
  SCHOOL_DOCUMENTS
} from '../../data/portalData';

import {
  FaShieldAlt, FaChartLine, FaUserGraduate, FaFileInvoiceDollar,
  FaChalkboardTeacher, FaBus, FaClipboardCheck, FaCheckCircle,
  FaTimesCircle, FaExclamationTriangle, FaSearch, FaFilter, FaPlus,
  FaDownload, FaPrint, FaCogs, FaHistory, FaBell, FaBoxes, FaTruck,
  FaFilePdf, FaPaperPlane, FaUserShield, FaRedo
} from 'react-icons/fa';

import '../../css/portal.css';

const AdminERP = () => {
  const { t } = useLanguage();

  /* Role-Based Access Control (RBAC) State */
  const [currentRole, setCurrentRole] = useState('Principal'); // 'Principal' | 'Super Admin' | 'Finance' | 'Operations Admin'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [approvalQueue, setApprovalQueue] = useState(PRINCIPAL_APPROVAL_QUEUE);
  const [procurementList, setProcurementList] = useState(PROCUREMENT_REQUESTS);
  const [auditTrail, setAuditTrail] = useState(ERP_AUDIT_LOGS);

  /* Search & Filter States */
  const [globalSearch, setGlobalSearch] = useState('');
  const [approvalFilter, setApprovalFilter] = useState('All');
  const [smsSentNotice, setSmsSentNotice] = useState(false);

  /* Helper for Principal Approvals */
  const handleApprovalAction = (id, actionStatus) => {
    setApprovalQueue(prev => prev.map(item => item.id === id ? { ...item, status: actionStatus } : item));

    // Append to Audit Trail
    const newLog = {
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      user: currentRole === 'Principal' ? 'Principal Mrs. Florence Kamau' : 'Super Admin',
      role: currentRole,
      action: `${actionStatus} ${id}`,
      details: `Action executed for ${id} in Approval Queue`
    };
    setAuditTrail([newLog, ...auditTrail]);
  };

  /* Dispatch SMS Alert Simulation */
  const handleDispatchFeeReminders = () => {
    setSmsSentNotice(true);
    setTimeout(() => setSmsSentNotice(false), 3000);
  };

  return (
    <>
      <SEO title="MEC ERP Command Centre - Principal & Admin Portal" description="Moi Educational Centre Central School ERP Executive Management System." />
      <Navbar />

      <div className="student-portal-wrapper" style={{ paddingTop: 30 }}>
        <div className="inner-row" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>

          {/* ─── 1. ROLE-BASED ACCESS CONTROL (RBAC) HEADER ─────── */}
          <div className="student-welcome-banner" style={{ background: 'linear-gradient(135deg, #050816 0%, #12052C 40%, #0F3D91 100%)', marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 800, color: '#D8B4FE', textTransform: 'uppercase', marginBottom: 8 }}>
                  <FaUserShield /> Unified School ERP Command Centre
                </div>
                <h1 style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  Moi Educational Centre — Executive Portal
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4 }}>
                  Strive for Excellence · School Leadership, Operations & Financial Governance Platform
                </p>
              </div>

              {/* Live RBAC Role Switcher */}
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                <label style={{ fontSize: 11, fontWeight: 800, color: '#D8B4FE', display: 'block', marginBottom: 4, textTransform: 'uppercase' }}>
                  ACTIVE ROLE & PERMISSIONS:
                </label>
                <select
                  value={currentRole}
                  onChange={e => setCurrentRole(e.target.value)}
                  style={{ background: '#FFFFFF', color: '#0F172A', fontWeight: 800, padding: '8px 14px', borderRadius: 10, border: 'none', fontSize: 13, cursor: 'pointer', outline: 'none' }}
                >
                  <option value="Principal">Principal (Mrs. Florence Kamau) — Executive Scope</option>
                  <option value="Super Admin">Super Admin — Full System Control</option>
                  <option value="Finance">Finance Director — Accounts & Billing Scope</option>
                  <option value="Operations Admin">Operations & Transport Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* ─── 2. ERP NAVIGATION SUB-MENU ──────────────────────── */}
          <div className="portal-submenu-wrapper" style={{ background: '#FFFFFF', borderRadius: 20, marginBottom: 28, border: '1px solid #E2E8F0', padding: 8 }}>
            <ul className="portal-submenu" style={{ justifyContent: 'flex-start' }}>
              <li className="portal-submenu-item">
                <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                  📊 Executive Command Dashboard
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'approvals' ? 'active' : ''} onClick={() => setActiveTab('approvals')}>
                  ⚡ Principal Approval Queue ({approvalQueue.filter(a => a.status === 'Pending Review').length})
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'admissions' ? 'active' : ''} onClick={() => setActiveTab('admissions')}>
                  🎓 Admissions Pipeline
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'finance' ? 'active' : ''} onClick={() => setActiveTab('finance')}>
                  💳 Finance & Reconciliation
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'procurement' ? 'active' : ''} onClick={() => setActiveTab('procurement')}>
                  📦 Procurement & Assets
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'transport' ? 'active' : ''} onClick={() => setActiveTab('transport')}>
                  🚌 Transport & Fleet
                </button>
              </li>
              <li className="portal-submenu-item">
                <button className={activeTab === 'audit' ? 'active' : ''} onClick={() => setActiveTab('audit')}>
                  📜 System Audit Log
                </button>
              </li>
            </ul>
          </div>

          {/* ─── 3. TAB 1: EXECUTIVE COMMAND DASHBOARD ──────────── */}
          {activeTab === 'dashboard' && (
            <>
              {/* Executive KPI Metrics Cards Grid */}
              <div className="student-metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
                <div className="student-metric-card" onClick={() => setActiveTab('admissions')}>
                  <div className="student-card-icon-wrap purple"><FaUserGraduate /></div>
                  <div className="student-metric-title">Total Enrollment</div>
                  <div className="student-metric-val">{SCHOOL_ERP_METRICS.totalLearners.toLocaleString()}</div>
                  <div className="student-metric-sub">+{SCHOOL_ERP_METRICS.newAdmissionsThisTerm} New Admissions Term 1</div>
                </div>

                <div className="student-metric-card">
                  <div className="student-card-icon-wrap emerald"><FaCalendarCheck /></div>
                  <div className="student-metric-title">Learner Attendance</div>
                  <div className="student-metric-val">{SCHOOL_ERP_METRICS.learnerAttendanceRate}%</div>
                  <div className="student-metric-sub">Staff Attendance: {SCHOOL_ERP_METRICS.staffAttendanceRate}%</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('finance')}>
                  <div className="student-card-icon-wrap blue"><FaFileInvoiceDollar /></div>
                  <div className="student-metric-title">Fees Collected</div>
                  <div className="student-metric-val">KES {(SCHOOL_ERP_METRICS.totalFeesCollectedKES / 1000000).toFixed(1)}M</div>
                  <div className="student-metric-sub">{SCHOOL_ERP_METRICS.collectionRatePct}% Collection Rate</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('finance')}>
                  <div className="student-card-icon-wrap rose"><FaExclamationTriangle /></div>
                  <div className="student-metric-title">Outstanding Fees</div>
                  <div className="student-metric-val">KES {(SCHOOL_ERP_METRICS.outstandingFeesKES / 1000000).toFixed(1)}M</div>
                  <div className="student-metric-sub">Due before Mid-Term Break</div>
                </div>

                <div className="student-metric-card" onClick={() => setActiveTab('approvals')}>
                  <div className="student-card-icon-wrap amber"><FaClipboardCheck /></div>
                  <div className="student-metric-title">Pending Approvals</div>
                  <div className="student-metric-val">{approvalQueue.filter(a => a.status === 'Pending Review').length} Decisions</div>
                  <div className="student-metric-sub">Requires Principal Sign-off</div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="student-quick-actions-bar">
                <button className="student-action-btn" onClick={() => setActiveTab('approvals')}>
                  ⚡ Open Approval Queue
                </button>
                <button className="student-action-btn" onClick={handleDispatchFeeReminders}>
                  📲 Dispatch Fee Balance SMS Alerts
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('finance')}>
                  📈 Financial Reconciliation Report
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('procurement')}>
                  📦 View Procurement Requests
                </button>
                <button className="student-action-btn" onClick={() => setActiveTab('audit')}>
                  📜 View ERP Audit Logs
                </button>
              </div>

              {smsSentNotice && (
                <div style={{ background: '#DCFCE7', color: '#15803D', padding: 14, borderRadius: 12, fontWeight: 700, fontSize: 13, marginBottom: 24 }}>
                  ✓ SMS reminders dispatched to 48 parents with pending balances via MEC SMS Gateway.
                </div>
              )}

              {/* Principal Executive Insights Split */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
                {/* Pending Approvals Summary */}
                <div className="student-section-card" style={{ marginBottom: 0 }}>
                  <div className="student-section-header">
                    <div className="student-section-title-group">
                      <FaClipboardCheck className="student-section-icon" />
                      <div>
                        <div className="student-section-title">Priority Approval Decisions</div>
                        <div className="student-section-sub">Pending Principal Sign-off</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {approvalQueue.filter(a => a.status === 'Pending Review').map(item => (
                      <div key={item.id} style={{ background: '#F8FAFC', padding: 16, borderRadius: 14, border: '1px solid #E2E8F0', borderLeft: '4px solid #7720E9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, color: '#7720E9', textTransform: 'uppercase' }}>{item.type}</span>
                          <span style={{ fontSize: 11, color: '#64748B' }}>{item.date}</span>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: '#475569', marginBottom: 10 }}>Requester: {item.requester}</div>

                        <div style={{ display: 'flex', gap: 8 }}>
                          <button
                            className="student-action-btn"
                            style={{ background: '#16A34A', color: '#fff', padding: '4px 12px', fontSize: 12, border: 'none' }}
                            onClick={() => handleApprovalAction(item.id, 'Approved')}
                          >
                            ✓ Approve
                          </button>
                          <button
                            className="student-action-btn"
                            style={{ background: '#DC2626', color: '#fff', padding: '4px 12px', fontSize: 12, border: 'none' }}
                            onClick={() => handleApprovalAction(item.id, 'Rejected')}
                          >
                            ✗ Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audit & System Log Preview */}
                <div className="student-section-card" style={{ marginBottom: 0 }}>
                  <div className="student-section-header">
                    <div className="student-section-title-group">
                      <FaHistory className="student-section-icon" />
                      <div>
                        <div className="student-section-title">Administrative Audit Trail</div>
                        <div className="student-section-sub">Live audit log of system actions</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {auditTrail.slice(0, 4).map((log, idx) => (
                      <div key={idx} style={{ background: '#F8FAFC', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontWeight: 600, marginBottom: 2 }}>
                          <span>{log.user} ({log.role})</span>
                          <span>{log.timestamp}</span>
                        </div>
                        <div style={{ fontWeight: 800, color: '#7720E9' }}>{log.action}</div>
                        <div style={{ color: '#334155' }}>{log.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─── 4. TAB 2: PRINCIPAL APPROVAL CENTRE ─────────────── */}
          {activeTab === 'approvals' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaClipboardCheck className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Principal Approval Queue & Governance Decisions</div>
                    <div className="student-section-sub">Review fee waivers, procurement orders, staff leave, and transfers</div>
                  </div>
                </div>
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Req ID</th>
                      <th>Category</th>
                      <th>Title & Description</th>
                      <th>Requester / Dept</th>
                      <th>Amount (KES)</th>
                      <th>Status</th>
                      <th>Executive Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvalQueue.map(item => (
                      <tr key={item.id}>
                        <td><strong>{item.id}</strong></td>
                        <td><span className="badge-status active">{item.type}</span></td>
                        <td>
                          <strong>{item.title}</strong>
                          <div style={{ fontSize: 12, color: '#64748B' }}>{item.desc}</div>
                        </td>
                        <td>{item.requester}</td>
                        <td><strong>{item.amount > 0 ? `KES ${item.amount.toLocaleString()}` : 'N/A'}</strong></td>
                        <td>
                          <span className={`badge-status ${item.status === 'Approved' ? 'confirmed' : item.status === 'Rejected' ? 'urgent' : 'pending'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          {item.status === 'Pending Review' ? (
                            <div style={{ display: 'flex', gap: 6 }}>
                              <button
                                className="student-action-btn"
                                style={{ background: '#16A34A', color: '#fff', padding: '4px 10px', fontSize: 11, border: 'none' }}
                                onClick={() => handleApprovalAction(item.id, 'Approved')}
                              >
                                Approve
                              </button>
                              <button
                                className="student-action-btn"
                                style={{ background: '#DC2626', color: '#fff', padding: '4px 10px', fontSize: 11, border: 'none' }}
                                onClick={() => handleApprovalAction(item.id, 'Rejected')}
                              >
                                Reject
                              </button>
                            </div>
                          ) : (
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#64748B' }}>Action Recorded</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── 5. TAB 3: ADMISSIONS PIPELINE ───────────────────── */}
          {activeTab === 'admissions' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaUserGraduate className="student-section-icon" />
                  <div>
                    <div className="student-section-title">New Student Admissions Pipeline 2026</div>
                    <div className="student-section-sub">Application tracking, interview assessments, and class allocations</div>
                  </div>
                </div>
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>App ID</th>
                      <th>Applicant Name</th>
                      <th>Parent / Guardian</th>
                      <th>Grade Applied</th>
                      <th>Assessment Score</th>
                      <th>Allocated Stream</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADMISSIONS_PIPELINE.map(adm => (
                      <tr key={adm.id}>
                        <td><strong>{adm.id}</strong></td>
                        <td><strong>{adm.applicantName}</strong></td>
                        <td>{adm.parentName}</td>
                        <td>{adm.gradeApplied}</td>
                        <td><strong>{adm.testScore}</strong></td>
                        <td>{adm.assignedClass}</td>
                        <td><span className="badge-status confirmed">{adm.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── 6. TAB 4: FINANCE & RECONCILIATION ─────────────── */}
          {activeTab === 'finance' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaFileInvoiceDollar className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Financial Governance & M-Pesa Payment Reconciliation</div>
                    <div className="student-section-sub">Overall revenue collection, paybill logs, and outstanding balances</div>
                  </div>
                </div>

                <button className="portal-pay-btn" onClick={handleDispatchFeeReminders}>
                  <FaPaperPlane /> Send Bulk SMS Reminders
                </button>
              </div>

              <div className="finance-stats-grid">
                <div className="finance-box">
                  <div className="finance-box-label">Total Billed Fees</div>
                  <div className="finance-box-val">KES 285,000,000</div>
                </div>
                <div className="finance-box">
                  <div className="finance-box-label">M-Pesa & Bank Collected</div>
                  <div className="finance-box-val success">KES 242,500,000</div>
                </div>
                <div className="finance-box">
                  <div className="finance-box-label">Outstanding Balance</div>
                  <div className="finance-box-val danger">KES 42,500,000</div>
                </div>
                <div className="finance-box">
                  <div className="finance-box-label">Collection Efficiency</div>
                  <div className="finance-box-val" style={{ color: '#7720E9' }}>85.1%</div>
                </div>
              </div>
            </div>
          )}

          {/* ─── 7. TAB 5: AUDIT LOG ─────────────────────────────── */}
          {activeTab === 'audit' && (
            <div className="student-section-card">
              <div className="student-section-header">
                <div className="student-section-title-group">
                  <FaHistory className="student-section-icon" />
                  <div>
                    <div className="student-section-title">Administrative System Audit Log</div>
                    <div className="student-section-sub">Immutable audit trail of all governance, marks, and financial actions</div>
                  </div>
                </div>
              </div>

              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>User Name</th>
                      <th>Role Scope</th>
                      <th>Action Executed</th>
                      <th>Audit Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditTrail.map((log, i) => (
                      <tr key={i}>
                        <td>{log.timestamp}</td>
                        <td><strong>{log.user}</strong></td>
                        <td><span className="badge-status active">{log.role}</span></td>
                        <td><strong style={{ color: '#7720E9' }}>{log.action}</strong></td>
                        <td>{log.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminERP;
