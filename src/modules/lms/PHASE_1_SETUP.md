# LMS Module - Phase 1 Implementation Guide
## Foundation (Weeks 1-4)

---

## Overview

Phase 1 establishes the foundational infrastructure for the Moodle-inspired LMS integration. This phase focuses on:

1. **User Authentication & Role Management** - Set up authentication system with role-based access control
2. **Basic Course Management** - Simple course creation, viewing, and enrollment
3. **Basic Assessments** - Simple assignment and quiz modules
4. **Core Dashboards** - Role-specific dashboards for students, teachers, and parents
5. **Navigation & Routing** - LMS routing structure and main navigation

---

## Phase 1 Deliverables

### 1. Authentication & Role System ✓ (Foundation)

**Files Created:**
- `src/modules/lms/config/permissions.config.js` - RBAC configuration
- `src/modules/lms/context/LMSContext.jsx` - Global LMS state
- `src/modules/lms/hooks/useLMS.js` - Main context hook

**Tasks:**
- [ ] Integrate with existing MEC authentication system
- [ ] Implement role-based access control middleware
- [ ] Create login/logout flows
- [ ] Set up session management
- [ ] Create user preference storage

**API Endpoints Needed:**
```
POST /api/lms/auth/login
POST /api/lms/auth/logout
GET /api/lms/auth/verify
GET /api/lms/auth/current-user
POST /api/lms/auth/refresh-token
```

---

### 2. Course Management (MVP)

**Files to Create:**
- `src/modules/lms/pages/student/StudentCourses.jsx` - List of student's courses
- `src/modules/lms/pages/teacher/CourseManagement.jsx` - Teacher course list & creation
- `src/modules/lms/pages/admin/CourseManagement.jsx` - Admin course management
- `src/modules/lms/components/courses/CourseCard.jsx` - Reusable course card
- `src/modules/lms/components/courses/CourseHeader.jsx` - Course detail header
- `src/modules/lms/services/courseService.js` - Course API client
- `src/modules/lms/data/mockCourses.js` - Mock data for development

**Features:**
- [ ] Display list of courses (by role)
- [ ] View course details and content
- [ ] Enroll/unenroll in courses (students)
- [ ] Create new courses (teachers/admins)
- [ ] Basic course settings
- [ ] Course search and filtering
- [ ] Course visibility (active/archived)

**UI Components:**
- Course listing with search/filter
- Course card with enrollment status
- Course overview/details page
- Basic course creation form
- Course roster view (teacher only)

**API Endpoints Needed:**
```
GET /api/lms/courses - List user's courses
GET /api/lms/courses/:id - Get course details
POST /api/lms/courses - Create course
PUT /api/lms/courses/:id - Update course
DELETE /api/lms/courses/:id - Delete course
POST /api/lms/courses/:id/enroll - Enroll in course
POST /api/lms/courses/:id/unenroll - Unenroll from course
GET /api/lms/courses/:id/enrollments - List course enrollments
```

---

### 3. Assignment Module (MVP)

**Files to Create:**
- `src/modules/lms/pages/student/AssignmentSubmission.jsx` - Assignment submission page
- `src/modules/lms/pages/teacher/GradeBook.jsx` - Teacher grading interface
- `src/modules/lms/components/assessments/AssignmentCard.jsx` - Assignment card
- `src/modules/lms/components/assessments/GradingInterface.jsx` - Grading UI
- `src/modules/lms/services/assignmentService.js` - Assignment API client
- `src/modules/lms/data/mockAssignments.js` - Mock data

**Features:**
- [ ] Display assignments by course
- [ ] View assignment details & instructions
- [ ] Submit assignments (file upload or text)
- [ ] Track submission status
- [ ] Grade assignments (teacher only)
- [ ] View grades and feedback (student/parent)
- [ ] Due date tracking
- [ ] Late submission handling

**UI Components:**
- Assignment list with status indicators
- Assignment detail page
- File upload interface
- Text editor for text submissions
- Grade submission form
- Feedback view for students

**API Endpoints Needed:**
```
GET /api/lms/assignments - List assignments
GET /api/lms/assignments/:id - Get assignment details
POST /api/lms/assignments/:id/submit - Submit assignment
GET /api/lms/assignments/:id/submissions - List submissions
PUT /api/lms/assignments/:id/grade - Submit grade
GET /api/lms/assignments/:courseId - Get course assignments
```

---

### 4. Quiz Module (MVP)

**Files to Create:**
- `src/modules/lms/pages/student/QuizAttempt.jsx` - Quiz attempt page
- `src/modules/lms/pages/teacher/QuestionBank.jsx` - Question management
- `src/modules/lms/components/assessments/QuizBuilder.jsx` - Quiz creation
- `src/modules/lms/components/assessments/QuestionRenderer.jsx` - Question display
- `src/modules/lms/services/quizService.js` - Quiz API client
- `src/modules/lms/data/mockQuizzes.js` - Mock data

**Features:**
- [ ] Create quizzes with multiple choice questions
- [ ] Display quiz with timer (if time-limited)
- [ ] Submit quiz and auto-grade
- [ ] View quiz results and feedback
- [ ] Question randomization (optional)
- [ ] Multiple attempt support
- [ ] Immediate or delayed feedback

**UI Components:**
- Quiz list view
- Quiz detail/preview
- Quiz attempt interface
- Question renderer (multiple choice)
- Timer display
- Results/summary page

**API Endpoints Needed:**
```
GET /api/lms/quizzes - List quizzes
POST /api/lms/quizzes - Create quiz
POST /api/lms/quizzes/:id/attempt - Start quiz attempt
POST /api/lms/quizzes/:id/submit - Submit quiz
GET /api/lms/quizzes/:id/results - Get quiz results
```

---

### 5. Core Dashboards

**Files to Create:**
- `src/modules/lms/pages/student/StudentDashboard.jsx` - Student dashboard
- `src/modules/lms/pages/teacher/TeacherDashboard.jsx` - Teacher dashboard
- `src/modules/lms/pages/parent/ParentDashboard.jsx` - Parent dashboard
- `src/modules/lms/pages/admin/AdminDashboard.jsx` - Admin dashboard
- `src/modules/lms/components/common/ProgressBar.jsx` - Progress indicator
- `src/modules/lms/components/common/GradeDisplay.jsx` - Grade display component
- `src/modules/lms/components/analytics/ProgressChart.jsx` - Progress visualization

**Student Dashboard Should Display:**
- Enrolled courses
- Upcoming assignments
- Recent grades
- Course progress overview
- Quick access to recent activities

**Teacher Dashboard Should Display:**
- Courses taught
- Recent student submissions
- Classes overview
- Quick links to grading
- Recent student performance

**Parent Dashboard Should Display:**
- Children's courses
- Recent grades
- Upcoming assignments
- Progress summary
- Quick messaging to teachers

**Admin Dashboard Should Display:**
- System statistics
- User overview
- Course overview
- Recent system activity

**API Endpoints Needed:**
```
GET /api/lms/dashboard/student - Student dashboard data
GET /api/lms/dashboard/teacher - Teacher dashboard data
GET /api/lms/dashboard/parent - Parent dashboard data
GET /api/lms/dashboard/admin - Admin dashboard data
```

---

### 6. Navigation & Routing

**Files to Modify:**
- `src/App.jsx` - Add LMS routes
- Create: `src/modules/lms/LMSRouter.jsx` - LMS-specific routing

**Routes to Add:**

```jsx
// Student Routes
/lms/dashboard - Student dashboard
/lms/courses - My courses
/lms/courses/:courseId - Course view
/lms/courses/:courseId/assignments - Course assignments
/lms/assignments/:assignmentId - Assignment detail
/lms/quizzes/:quizId - Take quiz
/lms/grades - My grades

// Teacher Routes
/lms/teacher/dashboard - Teacher dashboard
/lms/teacher/courses - My courses
/lms/teacher/courses/:courseId/manage - Course management
/lms/teacher/courses/:courseId/gradebook - Grade book
/lms/teacher/questions - Question bank

// Parent Routes
/lms/parent/dashboard - Parent dashboard
/lms/parent/children/:childId/progress - Child progress

// Admin Routes
/lms/admin/dashboard - Admin dashboard
/lms/admin/courses - Course management
/lms/admin/users - User management
/lms/admin/settings - System settings
```

---

## Implementation Steps

### Week 1: Setup & Authentication
1. [ ] Create LMS module structure directories
2. [ ] Implement LMSContext and hooks
3. [ ] Create permission/RBAC system
4. [ ] Integrate with MEC auth system
5. [ ] Create login/logout flows
6. [ ] Test authentication and role assignment

### Week 2: Course Management
1. [ ] Create course service (API client)
2. [ ] Build course list components
3. [ ] Create course detail pages
4. [ ] Implement enrollment system
5. [ ] Add course search/filtering
6. [ ] Build course management UI (teacher/admin)

### Week 3: Assessments (Assignments & Quizzes)
1. [ ] Create assignment service
2. [ ] Build assignment submission UI
3. [ ] Create grading interface
4. [ ] Create quiz service
5. [ ] Build quiz attempt interface
6. [ ] Implement auto-grading for multiple choice
7. [ ] Add quiz results display

### Week 4: Dashboards & Polish
1. [ ] Create dashboard components for each role
2. [ ] Add progress visualization components
3. [ ] Build navigation/routing structure
4. [ ] Add basic notifications
5. [ ] Create dashboard API endpoints
6. [ ] Test and polish UI
7. [ ] Mobile responsiveness

---

## Technology Stack for Phase 1

**Frontend:**
- React 19.x with Hooks
- React Router v7 for navigation
- Context API for state management
- CSS3 for styling (responsive design)

**Development Tools:**
- Mock data for testing (before backend ready)
- Postman or similar for API testing
- Browser DevTools for debugging

**Backend (To Be Implemented Separately):**
- Node.js + Express OR Python + Flask/Django
- PostgreSQL database
- JWT for authentication
- RESTful API design

---

## Key Files Summary

### Configuration
- `permissions.config.js` - Role-based permissions ✓
- `gradeScales.config.js` - Grade scale definitions ✓
- `featureFlags.config.js` - Feature toggles (to create)

### Type Definitions
- `course.types.js` - Course types ✓
- `user.types.js` - User types ✓
- `assessment.types.js` - Assessment types ✓
- `grade.types.js` - Grade types (to create)

### Context & Hooks
- `LMSContext.jsx` - Main context ✓
- `useLMS.js` - Main hook ✓
- Additional hooks (to create)

### Pages (To Create - Week 1-4)
- `StudentDashboard.jsx`
- `StudentCourses.jsx`
- `AssignmentSubmission.jsx`
- `QuizAttempt.jsx`
- `StudentGrades.jsx`
- `TeacherDashboard.jsx`
- `CourseManagement.jsx`
- `GradeBook.jsx`
- `ParentDashboard.jsx`
- `AdminDashboard.jsx`

### Components (To Create - Week 1-4)
- `CourseCard.jsx`
- `AssignmentCard.jsx`
- `QuizCard.jsx`
- `ProgressBar.jsx`
- `GradeDisplay.jsx`
- `CourseHeader.jsx`
- `GradingInterface.jsx`
- `QuizBuilder.jsx`
- `QuestionRenderer.jsx`
- `ProgressChart.jsx`

### Services (To Create - Week 1-4)
- `courseService.js`
- `assignmentService.js`
- `quizService.js`
- `gradeService.js`
- `userService.js`

### Mock Data (To Create - Week 1-4)
- `mockCourses.js`
- `mockAssignments.js`
- `mockQuizzes.js`
- `mockUsers.js`
- `mockGrades.js`

---

## Testing Checklist

- [ ] Authentication works (login/logout)
- [ ] Role-based access control functions
- [ ] Courses display correctly by role
- [ ] Course enrollment/unenrollment works
- [ ] Assignments can be submitted
- [ ] Grades can be submitted and viewed
- [ ] Quizzes can be attempted and graded
- [ ] Dashboards display relevant data
- [ ] Navigation is working properly
- [ ] Mobile responsive on common breakpoints
- [ ] No console errors
- [ ] Accessibility basics (keyboard navigation, alt text)

---

## Success Criteria

**Phase 1 Complete When:**
- [ ] All core dashboards functional and role-specific
- [ ] Users can view and enroll in courses
- [ ] Teachers can create courses and assignments
- [ ] Students can submit assignments and take quizzes
- [ ] Parents can monitor child progress
- [ ] All role-based permissions working
- [ ] Basic grade tracking functional
- [ ] System uptime: 95%+
- [ ] Page load time: < 3 seconds
- [ ] All unit tests passing
- [ ] Mobile responsive design working

---

## Moving to Phase 2

Once Phase 1 is complete:
- Discussion forums and messaging system
- Advanced grading and rubrics
- Learning analytics
- Parent portal enhancements
- Mobile app preparation

---

## Notes & Reminders

1. **Start with Mock Data** - Use mock data files initially before API is ready
2. **Component Reusability** - Build components to be reusable across roles
3. **Responsive First** - Design with mobile in mind from the start
4. **Error Handling** - Implement proper error messages and logging
5. **Performance** - Optimize React components (React.memo, useCallback)
6. **Accessibility** - Follow WCAG guidelines from the start
7. **Documentation** - Document components as you build them
8. **Testing** - Write tests for critical paths

---

## Contact & Support

For questions or issues during Phase 1 implementation:
- Review the LMS_MODULE_OVERVIEW.md for architecture
- Check existing component documentation
- Review mock data for structure examples
- Refer to React and React Router documentation

