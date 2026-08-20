import { useContext } from 'react';
import { LMSContext } from '../context/LMSContext';

/**
 * Hook to access LMS context
 * Use this in any component to access LMS state and functions
 *
 * @example
 * const { courses, fetchCourses } = useLMS();
 */
export const useLMS = () => {
  const context = useContext(LMSContext);

  if (!context) {
    throw new Error('useLMS must be used within an LMSProvider');
  }

  return context;
};

export default useLMS;
