# MEC Portal - Moodle-Inspired LMS Integration
## Comprehensive Learning Management System

### Module Structure Overview

This document outlines the complete LMS module integrated into the MEC portal. The system is designed as a modular, scalable architecture supporting multiple user roles: Students, Teachers, Parents, and Administrators.

---

## Directory Structure

```
src/modules/lms/
├── pages/                          # User-facing page components
│   ├── student/
│   │   ├── StudentDashboard.jsx
│   │   ├── StudentCourses.jsx
│   │   ├── CourseView.jsx
│   │   ├── AssignmentSubmission.jsx
│   │   ├── QuizAttempt.jsx
│   │   └── StudentGrades.jsx
│   ├── teacher/
│   │   ├── TeacherDashboard.jsx
│   │   ├── CourseManagement.jsx
│   │   ├── GradeBook.jsx
│   │   ├── ClassAnalytics.jsx
│   │   ├── QuestionBank.jsx
│   │   └── StudentManagement.jsx
│   ├── parent/
│   │   ├── ParentDashboard.jsx
│   │   ├── ChildProgress.jsx
│   │   ├── ProgressReports.jsx
│   │   └── TeacherMessaging.jsx
│   └── admin/
│       ├── AdminDashboard.jsx
│       ├── UserManagement.jsx
│       ├── CourseManagement.jsx
│       ├── SystemSettings.jsx
│       └── SystemReports.jsx
├── components/                     # Reusable LMS components
│   ├── common/
│   │   ├── CourseCard.jsx
│   │   ├── AssignmentCard.jsx
│   │   ├── QuizCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── GradeDisplay.jsx
│   │   └── NotificationBell.jsx
│   ├── courses/
│   │   ├── CourseHeader.jsx
│   │   ├── CourseContentViewer.jsx
│   │   ├── LessonModule.jsx
│   │   └── ResourceLibrary.jsx
│   ├── assessments/
│   │   ├── QuizBuilder.jsx
│   │   ├── QuestionRenderer.jsx
│   │   ├── AssignmentRubric.jsx
│   │   └── GradingInterface.jsx
│   ├── discussions/
│   │   ├── ForumThread.jsx
│   │   ├── DiscussionBoard.jsx
│   │   └── ForumModeration.jsx
│   ├── messages/
│   │   ├── MessageCenter.jsx
│   │   ├── ConversationThread.jsx
│   │   └── MessageNotification.jsx
│   ├── analytics/
│   │   ├── ProgressChart.jsx
│   │   ├── EngagementMetrics.jsx
│   │   ├── PerformanceReport.jsx
│   │   └── TimeSpentAnalytics.jsx
│   └── forms/
│       ├── CourseForm.jsx
│       ├── AssignmentForm.jsx
│       ├── QuizForm.jsx
│       └── BulkImportForm.jsx
├── context/                        # React Context for state management
│   ├── LMSContext.jsx
│   ├── UserRoleContext.jsx
│   ├── CourseContext.jsx
│   ├── GradeContext.jsx
│   └── NotificationContext.jsx
├── hooks/                          # Custom React hooks
│   ├── useCourse.js
│   ├── useAssignment.js
│   ├── useQuiz.js
│   ├── useGrades.js
│   ├── useNotifications.js
│   ├── useForum.js
│   └── useAnalytics.js
├── services/                       # API client and data management
│   ├── courseService.js
│   ├── assignmentService.js
│   ├── quizService.js
│   ├── gradeService.js
│   ├── userService.js
│   ├── messageService.js
│   ├── forumService.js
│   ├── analyticsService.js
│   └── authService.js
├── data/                          # Mock data for development
│   ├── mockCourses.js
│   ├── mockAssignments.js
│   ├── mockQuizzes.js
│   ├── mockUsers.js
│   ├── mockGrades.js
│   └── mockMessages.js
├── types/                         # TypeScript types / JSDoc definitions
│   ├── course.types.js
│   ├── user.types.js
│   ├── assessment.types.js
│   ├── grade.types.js
│   └── notification.types.js
├── utils/                         # Utility and helper functions
│   ├── gradeCalculations.js
│   ├── dateFormatting.js
│   ├── rolePermissions.js
│   ├── validations.js
│   ├── contentParser.js
│   └── reportGenerator.js
├── css/                           # LMS-specific styles
│   ├── lms-global.css
│   ├── student-dashboard.css
│   ├── teacher-dashboard.css
│   ├── parent-dashboard.css
│   ├── course-view.css
│   ├── assessments.css
│   ├── discussions.css
│   ├── analytics.css
│   └── responsive.css
├── api/                           # API endpoint definitions (conceptual)
│   ├── README.md
│   ├── courses.routes.js
│   ├── assignments.routes.js
│   ├── quizzes.routes.js
│   ├── grades.routes.js
│   ├── users.routes.js
│   ├── messages.routes.js
│   ├── forums.routes.js
│   └── analytics.routes.js
├── config/
│   ├── permissions.config.js      # Role-based access control
│   ├── gradeScales.config.js      # Grade scale configurations
│   └── featureFlags.config.js     # Feature toggles
└── README.md                      # LMS Module documentation

```

---

## Module Features by Category

### 1. Course Management
- Create, edit, delete courses
- Course templates and duplication
- Content organization with sections
- File upload and version control
- Resource library with tagging
- Drag-and-drop course builder (phase 2)

### 2. Assessment & Evaluation
- Quiz creation with multiple question types
- Assignment submission and grading
- Rubric-based evaluation
- Grade tracking and aggregation
- Feedback system
- Plagiarism detection API integration

### 3. Communication
- Discussion forums (Q&A, standard, single discussion)
- Direct messaging between users
- Course announcements
- Notifications system
- Email digest options

### 4. User Management
- Role-based access control (Student, Teacher, Parent, Admin)
- User profile management
- Bulk user import
- Authentication integration
- Permission management

### 5. Progress Tracking
- Student progress dashboards
- Grade reports
- Activity tracking
- Engagement metrics
- Learning time analytics
- Course completion tracking

### 6. Parent Portal
- Child progress monitoring
- Grades and assignment status
- Teacher messaging
- Attendance records
- Progress reports

### 7. Analytics & Reporting
- Student performance analytics
- Course engagement reports
- Activity reports
- Grade distribution analysis
- Custom report generation

---

## Technology Stack

**Frontend:**
- React 19.x
- React Router v7
- Framer Motion (animations)
- Chart.js or Recharts (analytics)
- Axios (API calls)

**State Management:**
- React Context API
- Custom hooks

**Styling:**
- CSS3 (custom)
- Responsive design with mobile-first approach

**Backend (to be implemented):**
- Node.js with Express OR
- Python with Flask/Django OR
- PHP Laravel

**Database (to be implemented):**
- PostgreSQL (primary)
- MySQL (alternative)

**Additional Services:**
- AWS S3 / Azure Blob (file storage)
- Redis (caching)
- Elasticsearch (search)

---

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [x] Module directory structure
- [x] Basic course management UI
- [ ] User authentication integration
- [ ] Role assignment system
- [ ] Basic assignment module
- [ ] Basic quiz module
- [ ] Student dashboard

### Phase 2: Engagement (Weeks 5-8)
- [ ] Discussion forums
- [ ] Direct messaging
- [ ] Advanced grading system
- [ ] Progress analytics
- [ ] Parent portal
- [ ] Teacher dashboard

### Phase 3: Enhancement (Weeks 9-12)
- [ ] Mobile responsive optimization
- [ ] Advanced reporting
- [ ] Collaboration tools
- [ ] API endpoints
- [ ] Third-party integrations

### Phase 4: Optimization (Weeks 13+)
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Compliance audits (GDPR, FERPA)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Production deployment

---

## API Integration Points

### Course Management APIs
- `GET /api/lms/courses` - List user's courses
- `POST /api/lms/courses` - Create course
- `GET /api/lms/courses/:id` - Get course details
- `PUT /api/lms/courses/:id` - Update course
- `DELETE /api/lms/courses/:id` - Delete course

### Assignment APIs
- `GET /api/lms/assignments` - List assignments
- `POST /api/lms/assignments/:courseId` - Create assignment
- `POST /api/lms/assignments/:id/submit` - Submit assignment
- `GET /api/lms/assignments/:id/submissions` - List submissions

### Quiz APIs
- `POST /api/lms/quizzes` - Create quiz
- `POST /api/lms/quizzes/:id/attempt` - Start quiz attempt
- `POST /api/lms/quizzes/:id/submit` - Submit quiz
- `GET /api/lms/quizzes/:id/results` - Get results

### Grade APIs
- `GET /api/lms/grades/:courseId` - Get course grades
- `GET /api/lms/grades/student/:studentId` - Get student grades
- `POST /api/lms/grades` - Submit grade

### User APIs
- `GET /api/lms/users` - List users
- `POST /api/lms/users` - Create user
- `GET /api/lms/users/:id` - Get user profile
- `PUT /api/lms/users/:id` - Update user

### Message APIs
- `GET /api/lms/messages` - List messages
- `POST /api/lms/messages` - Send message
- `GET /api/lms/messages/:conversationId` - Get conversation

### Forum APIs
- `GET /api/lms/forums/:courseId` - List forums
- `POST /api/lms/forums/:courseId/topics` - Create topic
- `POST /api/lms/forums/:topicId/reply` - Reply to topic

### Analytics APIs
- `GET /api/lms/analytics/student-progress` - Student progress data
- `GET /api/lms/analytics/course-engagement` - Course engagement metrics
- `GET /api/lms/analytics/class-performance` - Class performance data

---

## Database Schema (Conceptual)

```sql
-- Core Tables
Users
├── id (primary key)
├── email (unique)
├── password_hash
├── first_name
├── last_name
├── profile_picture
├── role (student|teacher|parent|admin)
├── created_at
└── updated_at

Courses
├── id (primary key)
├── title
├── description
├── course_code
├── teacher_id (foreign key → Users)
├── category_id
├── status (active|archived|hidden)
├── created_at
└── updated_at

Enrollments
├── id (primary key)
├── user_id (foreign key → Users)
├── course_id (foreign key → Courses)
├── role (student|teacher|observer)
├── enrolled_date
└── archived_date

CourseContent
├── id (primary key)
├── course_id (foreign key → Courses)
├── section_number
├── title
├── content_type (lesson|assignment|quiz|resource)
├── content_data (JSON)
└── display_order

Assignments
├── id (primary key)
├── course_id (foreign key → Courses)
├── title
├── description
├── due_date
├── max_score
├── submission_type
├── created_at
└── updated_at

Submissions
├── id (primary key)
├── assignment_id (foreign key → Assignments)
├── student_id (foreign key → Users)
├── submission_date
├── content
├── status (draft|submitted|graded)
└── file_path

Grades
├── id (primary key)
├── item_id (assignment_id or quiz_id)
├── student_id (foreign key → Users)
├── score
├── max_score
├── feedback
├── graded_date
└── graded_by (teacher_id)

Quizzes
├── id (primary key)
├── course_id (foreign key → Courses)
├── title
├── description
├── time_limit (minutes)
├── passing_score
├── attempt_limit
└── review_mode

Questions
├── id (primary key)
├── quiz_id (foreign key → Quizzes)
├── question_bank_id
├── question_text
├── question_type (multiple_choice|short_answer|essay)
├── points
└── display_order

ForumTopics
├── id (primary key)
├── forum_id
├── user_id (foreign key → Users)
├── title
├── content
├── is_locked
├── created_at
└── updated_at

ForumReplies
├── id (primary key)
├── topic_id (foreign key → ForumTopics)
├── user_id (foreign key → Users)
├── content
├── created_at
└── updated_at

Messages
├── id (primary key)
├── sender_id (foreign key → Users)
├── recipient_id (foreign key → Users)
├── subject
├── content
├── is_read
├── created_at
└── read_at

Notifications
├── id (primary key)
├── user_id (foreign key → Users)
├── notification_type
├── message
├── related_item_id
├── is_read
├── created_at
└── read_at
```

---

## Role-Based Features Matrix

| Feature | Student | Teacher | Parent | Admin |
|---------|---------|---------|--------|-------|
| **Courses** |
| View enrolled courses | ✓ | ✓ | ✓ | ✓ |
| Create course | ✗ | ✓ | ✗ | ✓ |
| Edit course | ✗ | ✓ | ✗ | ✓ |
| Delete course | ✗ | ✓ | ✗ | ✓ |
| **Assignments** |
| View assignments | ✓ | ✓ | ✓ | ✓ |
| Submit assignment | ✓ | ✗ | ✗ | ✗ |
| Grade assignment | ✗ | ✓ | ✗ | ✓ |
| **Quizzes** |
| Attempt quiz | ✓ | ✗ | ✗ | ✗ |
| Create quiz | ✗ | ✓ | ✗ | ✓ |
| View results | ✓ | ✓ | ✓ | ✓ |
| **Grades** |
| View own grades | ✓ | ✗ | ✓* | ✓ |
| View class grades | ✗ | ✓ | ✗ | ✓ |
| Modify grades | ✗ | ✓ | ✗ | ✓ |
| **Messaging** |
| Send message | ✓ | ✓ | ✓ | ✓ |
| Receive message | ✓ | ✓ | ✓ | ✓ |
| **User Management** |
| View own profile | ✓ | ✓ | ✓ | ✓ |
| Edit own profile | ✓ | ✓ | ✓ | ✓ |
| Manage users | ✗ | ✗ | ✗ | ✓ |
| **System Settings** |
| Access settings | ✗ | ✗ | ✗ | ✓ |
| Manage permissions | ✗ | ✗ | ✗ | ✓ |

*Parent can view child's grades only

---

## Security Considerations

1. **Authentication**: Multi-factor authentication support
2. **Authorization**: Granular role-based access control
3. **Data Encryption**: SSL/TLS for transit, encrypted storage for sensitive data
4. **Input Validation**: Server-side validation for all inputs
5. **CSRF Protection**: Token-based CSRF protection
6. **XSS Prevention**: Content sanitization
7. **SQL Injection**: Parameterized queries
8. **Audit Logging**: Activity tracking for compliance
9. **Privacy**: GDPR and FERPA compliance

---

## Performance Targets

- Page load time: < 2 seconds
- API response time: < 500ms
- Support 1000+ concurrent users
- Database query optimization
- CDN for static assets
- Caching strategies (Redis)

---

## Success Metrics

| Metric | Target |
|--------|--------|
| User Adoption | 75%+ |
| Daily Active Users | 60%+ of registered |
| Course Completion Rate | 80%+ |
| System Uptime | 99.9% |
| Average Session Length | 15+ minutes |
| Parent Portal Logins/Week | 2+ per active parent |
| Support Tickets/Month | < 5% of user base |

---

## Getting Started

1. Review the module structure
2. Check `PHASE_1_SETUP.md` for initial implementation steps
3. Review component documentation in individual component files
4. Start with Phase 1 foundation features
5. Integrate with backend API as it's developed

---

## Contributors & Maintenance

- **Initial Implementation**: AI-assisted scaffolding
- **Backend Development**: [To be assigned]
- **QA & Testing**: [To be assigned]
- **Deployment**: [To be assigned]

---

## References

- [Moodle LMS](https://moodle.org/)
- [Learning Tools Interoperability (LTI)](https://www.imsglobal.org/activity/learning-tools-interoperability)
- [SCORM Standards](https://scorm.com/)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GDPR Compliance](https://gdpr-info.eu/)
- [FERPA Privacy Law](https://www2.ed.gov/policy/gen/guid/fpco/ferpa/)

