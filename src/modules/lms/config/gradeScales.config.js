/**
 * Grade Scale Configurations
 * Defines various grading systems used in the LMS
 */

export const GRADE_SCALES = {
  POINTS: 'points',
  PERCENTAGE: 'percentage',
  LETTER: 'letter',
  STANDARD: 'standard',
};

/**
 * Points-based grading (0-100)
 */
export const POINTS_SCALE = {
  type: GRADE_SCALES.POINTS,
  minScore: 0,
  maxScore: 100,
  name: 'Points (0-100)',
};

/**
 * Percentage-based grading (0-100%)
 */
export const PERCENTAGE_SCALE = {
  type: GRADE_SCALES.PERCENTAGE,
  minScore: 0,
  maxScore: 100,
  name: 'Percentage',
};

/**
 * Letter Grade Scale (A-F)
 */
export const LETTER_SCALE = {
  type: GRADE_SCALES.LETTER,
  name: 'Letter Grade',
  grades: [
    { letter: 'A', minScore: 90, maxScore: 100, description: 'Excellent' },
    { letter: 'B', minScore: 80, maxScore: 89, description: 'Good' },
    { letter: 'C', minScore: 70, maxScore: 79, description: 'Satisfactory' },
    { letter: 'D', minScore: 60, maxScore: 69, description: 'Pass' },
    { letter: 'F', minScore: 0, maxScore: 59, description: 'Fail' },
  ],
};

/**
 * Standard Scale (Beginner to Advanced)
 */
export const STANDARD_SCALE = {
  type: GRADE_SCALES.STANDARD,
  name: 'Standard Scale',
  levels: [
    { level: 'Advanced', value: 4, minScore: 90 },
    { level: 'Proficient', value: 3, minScore: 75 },
    { level: 'Developing', value: 2, minScore: 60 },
    { level: 'Beginning', value: 1, minScore: 0 },
  ],
};

/**
 * Convert a score to a grade based on the selected scale
 * @param {number} score - The score to convert
 * @param {number} maxScore - The maximum possible score
 * @param {string} scaleType - The grade scale type
 * @returns {string|object} - The converted grade
 */
export const convertToGrade = (score, maxScore, scaleType = GRADE_SCALES.PERCENTAGE) => {
  const percentage = (score / maxScore) * 100;

  switch (scaleType) {
    case GRADE_SCALES.POINTS:
      return Math.round(percentage);

    case GRADE_SCALES.PERCENTAGE:
      return `${Math.round(percentage)}%`;

    case GRADE_SCALES.LETTER:
      const letterGrade = LETTER_SCALE.grades.find(
        (g) => percentage >= g.minScore && percentage <= g.maxScore
      );
      return letterGrade ? letterGrade.letter : 'N/A';

    case GRADE_SCALES.STANDARD:
      const level = STANDARD_SCALE.levels.find((l) => percentage >= l.minScore);
      return level ? level.level : 'Beginning';

    default:
      return `${Math.round(percentage)}%`;
  }
};

/**
 * Get grade description based on score and scale
 * @param {number} score - The score
 * @param {number} maxScore - The maximum score
 * @param {string} scaleType - The grade scale type
 * @returns {string} - The description
 */
export const getGradeDescription = (score, maxScore, scaleType = GRADE_SCALES.PERCENTAGE) => {
  const percentage = (score / maxScore) * 100;

  switch (scaleType) {
    case GRADE_SCALES.LETTER:
      const letterGrade = LETTER_SCALE.grades.find(
        (g) => percentage >= g.minScore && percentage <= g.maxScore
      );
      return letterGrade ? letterGrade.description : 'No grade';

    case GRADE_SCALES.STANDARD:
      const level = STANDARD_SCALE.levels.find((l) => percentage >= l.minScore);
      return level ? level.level : 'Beginning';

    default:
      if (percentage >= 90) return 'Excellent';
      if (percentage >= 80) return 'Good';
      if (percentage >= 70) return 'Satisfactory';
      if (percentage >= 60) return 'Pass';
      return 'Fail';
  }
};
