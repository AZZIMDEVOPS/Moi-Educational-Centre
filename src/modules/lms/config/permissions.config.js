/**
 * Role-Based Access Control (RBAC) Configuration
 * Defines granular permissions for each user role in the LMS
 */

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
};

export const PERMISSIONS = {
  // Course Management
  COURSE_VIEW: 'course:view',
  COURSE_CREATE: 'course:create',
  COURSE_EDIT: 'course:edit',
  COURSE_DELETE: 'course:delete',
  COURSE_PUBLISH: 'course:publish',
  COURSE_ENROLL: 'course:enroll',
  COURSE_UNENROLL: 'course:unenroll',

  // Assignment Management
  ASSIGNMENT_VIEW: 'assignment:view',
  ASSIGNMENT_CREATE: 'assignment:create',
  ASSIGNMENT_EDIT: 'assignment:edit',
  ASSIGNMENT_DELETE: 'assignment:delete',
  ASSIGNMENT_SUBMIT: 'assignment:submit',
  ASSIGNMENT_GRADE: 'assignment:grade',

  // Quiz Management
  QUIZ_VIEW: 'quiz:view',
  QUIZ_CREATE: 'quiz:create',
  QUIZ_EDIT: 'quiz:edit',
  QUIZ_DELETE: 'quiz:delete',
  QUIZ_ATTEMPT: 'quiz:attempt',
  QUIZ_REVIEW: 'quiz:review',

  // Grade Management
  GRADE_VIEW_OWN: 'grade:view_own',
  GRADE_VIEW_CLASS: 'grade:view_class',
  GRADE_VIEW_CHILD: 'grade:view_child',
  GRADE_MANAGE: 'grade:manage',
  GRADE_EXPORT: 'grade:export',

  // User Management
  USER_VIEW_PROFILE: 'user:view_profile',
  USER_EDIT_PROFILE: 'user:edit_profile',
  USER_MANAGE: 'user:manage',
  USER_CREATE: 'user:create',
  USER_DELETE: 'user:delete',
  USER_ASSIGN_ROLE: 'user:assign_role',

  // Messaging & Communication
  MESSAGE_SEND: 'message:send',
  MESSAGE_RECEIVE: 'message:receive',
  MESSAGE_VIEW: 'message:view',
  FORUM_CREATE: 'forum:create',
  FORUM_MODERATE: 'forum:moderate',
  ANNOUNCEMENT_CREATE: 'announcement:create',

  // Analytics & Reporting
  ANALYTICS_VIEW_OWN: 'analytics:view_own',
  ANALYTICS_VIEW_CLASS: 'analytics:view_class',
  ANALYTICS_VIEW_SCHOOL: 'analytics:view_school',
  REPORT_GENERATE: 'report:generate',
  REPORT_EXPORT: 'report:export',

  // System Administration
  SYSTEM_SETTINGS: 'system:settings',
  SYSTEM_LOGS: 'system:logs',
  BACKUP_MANAGE: 'backup:manage',
};

/**
 * Role-Permission Mapping
 * Defines which permissions each role has
 */
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    // Admin has all permissions
    ...Object.values(PERMISSIONS),
  ],

  [ROLES.TEACHER]: [
    // Course Management
    PERMISSIONS.COURSE_VIEW,
    PERMISSIONS.COURSE_CREATE,
    PERMISSIONS.COURSE_EDIT,
    PERMISSIONS.COURSE_PUBLISH,
    PERMISSIONS.COURSE_ENROLL,
    PERMISSIONS.COURSE_UNENROLL,

    // Assignment Management
    PERMISSIONS.ASSIGNMENT_VIEW,
    PERMISSIONS.ASSIGNMENT_CREATE,
    PERMISSIONS.ASSIGNMENT_EDIT,
    PERMISSIONS.ASSIGNMENT_DELETE,
    PERMISSIONS.ASSIGNMENT_GRADE,

    // Quiz Management
    PERMISSIONS.QUIZ_VIEW,
    PERMISSIONS.QUIZ_CREATE,
    PERMISSIONS.QUIZ_EDIT,
    PERMISSIONS.QUIZ_DELETE,
    PERMISSIONS.QUIZ_REVIEW,

    // Grade Management
    PERMISSIONS.GRADE_VIEW_CLASS,
    PERMISSIONS.GRADE_MANAGE,
    PERMISSIONS.GRADE_EXPORT,

    // User Management (limited)
    PERMISSIONS.USER_VIEW_PROFILE,
    PERMISSIONS.USER_EDIT_PROFILE,

    // Messaging
    PERMISSIONS.MESSAGE_SEND,
    PERMISSIONS.MESSAGE_RECEIVE,
    PERMISSIONS.MESSAGE_VIEW,
    PERMISSIONS.FORUM_CREATE,
    PERMISSIONS.FORUM_MODERATE,
    PERMISSIONS.ANNOUNCEMENT_CREATE,

    // Analytics
    PERMISSIONS.ANALYTICS_VIEW_CLASS,
    PERMISSIONS.REPORT_GENERATE,
    PERMISSIONS.REPORT_EXPORT,
  ],

  [ROLES.STUDENT]: [
    // Course Management
    PERMISSIONS.COURSE_VIEW,

    // Assignment Management
    PERMISSIONS.ASSIGNMENT_VIEW,
    PERMISSIONS.ASSIGNMENT_SUBMIT,

    // Quiz Management
    PERMISSIONS.QUIZ_VIEW,
    PERMISSIONS.QUIZ_ATTEMPT,
    PERMISSIONS.QUIZ_REVIEW,

    // Grade Management
    PERMISSIONS.GRADE_VIEW_OWN,

    // User Management
    PERMISSIONS.USER_VIEW_PROFILE,
    PERMISSIONS.USER_EDIT_PROFILE,

    // Messaging
    PERMISSIONS.MESSAGE_SEND,
    PERMISSIONS.MESSAGE_RECEIVE,
    PERMISSIONS.MESSAGE_VIEW,
    PERMISSIONS.FORUM_CREATE,

    // Analytics
    PERMISSIONS.ANALYTICS_VIEW_OWN,
  ],

  [ROLES.PARENT]: [
    // Course Management (read-only)
    PERMISSIONS.COURSE_VIEW,

    // Assignment Management (read-only)
    PERMISSIONS.ASSIGNMENT_VIEW,

    // Quiz Management (read-only)
    PERMISSIONS.QUIZ_VIEW,
    PERMISSIONS.QUIZ_REVIEW,

    // Grade Management (child's grades only)
    PERMISSIONS.GRADE_VIEW_CHILD,

    // User Management
    PERMISSIONS.USER_VIEW_PROFILE,
    PERMISSIONS.USER_EDIT_PROFILE,

    // Messaging
    PERMISSIONS.MESSAGE_SEND,
    PERMISSIONS.MESSAGE_RECEIVE,
    PERMISSIONS.MESSAGE_VIEW,

    // Analytics (child's progress only)
    PERMISSIONS.ANALYTICS_VIEW_OWN,
  ],
};

/**
 * Check if a role has a specific permission
 * @param {string} role - User role
 * @param {string} permission - Permission to check
 * @returns {boolean} - True if role has permission
 */
export const hasPermission = (role, permission) => {
  const rolePermissions = ROLE_PERMISSIONS[role] || [];
  return rolePermissions.includes(permission);
};

/**
 * Check if a role has any of the specified permissions
 * @param {string} role - User role
 * @param {string[]} permissions - Array of permissions to check
 * @returns {boolean} - True if role has at least one permission
 */
export const hasAnyPermission = (role, permissions) => {
  return permissions.some(permission => hasPermission(role, permission));
};

/**
 * Check if a role has all of the specified permissions
 * @param {string} role - User role
 * @param {string[]} permissions - Array of permissions to check
 * @returns {boolean} - True if role has all permissions
 */
export const hasAllPermissions = (role, permissions) => {
  return permissions.every(permission => hasPermission(role, permission));
};

/**
 * Get all permissions for a role
 * @param {string} role - User role
 * @returns {string[]} - Array of permissions
 */
export const getPermissionsForRole = (role) => {
  return ROLE_PERMISSIONS[role] || [];
};
