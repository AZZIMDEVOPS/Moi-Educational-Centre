import React, { useEffect } from 'react';
import { useLMS } from '../../hooks/useLMS';
import '../../css/student-dashboard.css';

/**
 * Student Dashboard
 * Main landing page for students showing:
 * - Enrolled courses
 * - Upcoming assignments
 * - Recent grades
 * - Progress overview
 */
const StudentDashboard = () => {
  const {
    courses,
    assignments,
    grades,
    fetchCourses,
    fetchAssignments,
    fetchGrades,
    isLoading,
    errorMessage,
  } = useLMS();

  useEffect(() => {
    // Fetch dashboard data on mount
    fetchCourses();
    fetchAssignments();
    fetchGrades();
  }, [fetchCourses, fetchAssignments, fetchGrades]);

  if (isLoading) {
    return <div className="lms-dashboard loading">Loading dashboard...</div>;
  }

  return (
    <div className="lms-dashboard student-dashboard">
      <div className="dashboard-container">
        {/* Header Section */}
        <section className="dashboard-header">
          <h1>Welcome, Student!</h1>
          <p>Here's your learning overview</p>
        </section>

        {/* Error Message */}
        {errorMessage && (
          <div className="alert alert-error">{errorMessage}</div>
        )}

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Enrolled Courses */}
          <section className="dashboard-section courses-section">
            <div className="section-header">
              <h2>My Courses ({courses.length})</h2>
              <a href="/lms/courses" className="view-all-link">
                View All →
              </a>
            </div>
            <div className="courses-grid">
              {courses.length > 0 ? (
                courses.slice(0, 3).map(course => (
                  <div key={course.id} className="course-card-mini">
                    <h3>{course.title}</h3>
                    <p className="course-code">{course.courseCode}</p>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${course.progressPercentage || 0}%`,
                        }}
                      />
                    </div>
                    <p className="progress-text">
                      {Math.round(course.progressPercentage || 0)}% Complete
                    </p>
                    <a href={`/lms/courses/${course.id}`} className="btn-link">
                      Continue →
                    </a>
                  </div>
                ))
              ) : (
                <p className="empty-state">No courses enrolled yet</p>
              )}
            </div>
          </section>

          {/* Upcoming Assignments */}
          <section className="dashboard-section assignments-section">
            <div className="section-header">
              <h2>Upcoming Assignments</h2>
              <a href="/lms/courses" className="view-all-link">
                View All →
              </a>
            </div>
            <div className="assignments-list">
              {assignments && assignments.length > 0 ? (
                assignments.slice(0, 5).map(assignment => (
                  <div key={assignment.id} className="assignment-item">
                    <div className="assignment-info">
                      <h4>{assignment.title}</h4>
                      <p className="assignment-course">{assignment.courseName}</p>
                    </div>
                    <div className="assignment-meta">
                      <span className="due-date">
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </span>
                      <span className={`status status-${assignment.status}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-state">No upcoming assignments</p>
              )}
            </div>
          </section>

          {/* Recent Grades */}
          <section className="dashboard-section grades-section">
            <div className="section-header">
              <h2>Recent Grades</h2>
              <a href="/lms/grades" className="view-all-link">
                View All →
              </a>
            </div>
            <div className="grades-list">
              {grades && grades.length > 0 ? (
                grades.slice(0, 5).map(grade => (
                  <div key={grade.id} className="grade-item">
                    <div className="grade-info">
                      <h4>{grade.itemTitle}</h4>
                      <p className="grade-course">{grade.courseName}</p>
                    </div>
                    <div className="grade-score">
                      <span className="score">{grade.score}</span>
                      <span className="max-score">/ {grade.maxScore}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-state">No grades yet</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
