/**
 * Assessment Type Definitions
 * JSDoc type definitions for quiz, assignment, and grading
 */

/**
 * @typedef {Object} Quiz
 * @property {string} id - Unique quiz identifier
 * @property {string} courseId - Parent course ID
 * @property {string} title - Quiz title
 * @property {string} description - Quiz description
 * @property {number} timeLimit - Time limit in minutes
 * @property {number} passingScore - Minimum score to pass
 * @property {number} attemptLimit - Max number of attempts
 * @property {string} reviewMode - When results are shown (immediate|delayed|never)
 * @property {Array<Question>} questions - Quiz questions
 * @property {Date} dueDate - Quiz due date
 * @property {boolean} shuffle - Randomize question order
 * @property {boolean} published - Is quiz published
 */

/**
 * @typedef {Object} Question
 * @property {string} id - Question identifier
 * @property {string} quizId - Parent quiz ID
 * @property {string} type - Question type (multiple_choice|short_answer|essay|matching|drag_drop)\n * @property {string} content - Question text
 * @property {number} points - Points for correct answer
 * @property {Array<string>} answers - Answer options (for multiple choice)
 * @property {string} correctAnswer - Correct answer
 * @property {string} feedback - Feedback for answer
 */

/**
 * @typedef {Object} Assignment
 * @property {string} id - Assignment identifier
 * @property {string} courseId - Parent course ID
 * @property {string} title - Assignment title
 * @property {string} description - Assignment description
 * @property {string} type - Assignment type (file_upload|online_text|group)
 * @property {number} maxScore - Maximum points
 * @property {Date} dueDate - Due date
 * @property {Date} releaseDate - When assignment becomes available
 * @property {boolean} allowLateSubmission - Allow submissions after due date
 * @property {boolean} requiresGrading - Does assignment need manual grading
 */

/**
 * @typedef {Object} Submission\n * @property {string} id - Submission identifier
 * @property {string} assignmentId - Parent assignment ID
 * @property {string} studentId - Submitting student ID
 * @property {string} content - Submission content
 * @property {Array<string>} attachments - File attachments
 * @property {string} status - Submission status (draft|submitted|graded)
 * @property {Date} submittedAt - Submission date
 * @property {Date} gradedAt - Grading date
 * @property {boolean} isLate - Is submission late
 */

/**
 * @typedef {Object} Grade
 * @property {string} id - Grade identifier
 * @property {string} itemId - Item ID (assignment, quiz, etc.)
 * @property {string} studentId - Student ID
 * @property {number} score - Points awarded
 * @property {number} maxScore - Maximum points
 * @property {string} feedback - Grading feedback
 * @property {string} status - Grade status (pending|graded|provisional)
 * @property {Date} gradedAt - When grade was assigned
 * @property {string} gradedBy - Teacher ID who assigned grade
 */

export {};
