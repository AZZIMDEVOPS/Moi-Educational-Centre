/**
 * Course Type Definitions
 * JSDoc type definitions for course-related objects
 */

/**
 * @typedef {Object} Course
 * @property {string} id - Unique course identifier
 * @property {string} title - Course title
 * @property {string} description - Course description
 * @property {string} courseCode - Unique course code
 * @property {string} teacherId - ID of the course instructor
 * @property {string} status - Course status (active|archived|hidden)
 * @property {string} categoryId - Course category
 * @property {Array<Section>} sections - Course sections
 * @property {number} studentCount - Number of enrolled students
 * @property {Date} createdAt - Course creation date
 * @property {Date} updatedAt - Last update date
 * @property {string} image - Course thumbnail image URL
 */

/**
 * @typedef {Object} Section
 * @property {string} id - Section identifier
 * @property {string} courseId - Parent course ID
 * @property {number} number - Section number
 * @property {string} title - Section title
 * @property {Array<Content>} contents - Content items in section
 * @property {string} description - Section description
 * @property {boolean} visible - Is section visible to students
 */

/**
 * @typedef {Object} Content
 * @property {string} id - Content identifier
 * @property {string} sectionId - Parent section ID
 * @property {string} type - Content type (lesson|assignment|quiz|resource|video)
 * @property {string} title - Content title
 * @property {string} description - Content description
 * @property {string} url - Content URL or file path
 * @property {Object} metadata - Additional metadata
 * @property {number} displayOrder - Display order in section
 * @property {Date} releaseDate - When content becomes available
 * @property {boolean} isPublished - Is content published
 */

/**
 * @typedef {Object} Enrollment
 * @property {string} id - Enrollment identifier
 * @property {string} userId - Student user ID
 * @property {string} courseId - Course ID
 * @property {string} role - Role in course (student|teacher|observer)
 * @property {Date} enrolledDate - Enrollment date
 * @property {Date} completedDate - Completion date
 * @property {number} progressPercentage - Course completion percentage
 */

export {};
