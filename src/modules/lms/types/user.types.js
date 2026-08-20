/**
 * User Type Definitions
 * JSDoc type definitions for user-related objects
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} email - User email address
 * @property {string} firstName - First name
 * @property {string} lastName - Last name
 * @property {string} role - User role (admin|teacher|student|parent)
 * @property {string} profilePicture - Profile picture URL
 * @property {Object} preferences - User preferences
 * @property {Date} createdAt - Account creation date
 * @property {Date} lastLogin - Last login date
 */

/**
 * @typedef {Object} UserPreferences
 * @property {string} language - Preferred language
 * @property {string} timezone - User timezone
 * @property {boolean} emailNotifications - Enable email notifications
 * @property {boolean} smsNotifications - Enable SMS notifications
 * @property {string} theme - Theme preference (light|dark)
 */

/**
 * @typedef {Object} Teacher
 * @extends User
 * @property {Array<string>} courseIds - List of taught courses
 * @property {string} department - Department
 * @property {string} qualifications - Professional qualifications
 */

/**
 * @typedef {Object} Student
 * @extends User
 * @property {string} studentId - Student ID number
 * @property {Array<string>} enrolledCourses - List of enrolled courses
 * @property {string} grade - Current grade level
 */

/**
 * @typedef {Object} Parent
 * @extends User
 * @property {Array<string>} childrenIds - List of child user IDs
 * @property {string} relationship - Relationship to child
 */

export {};
