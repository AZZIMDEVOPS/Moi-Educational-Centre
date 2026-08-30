/**
 * Convenience Hook for AI Navigation and Highlighting
 */

import { useAIHighlight } from '../context/AIHighlightContext';

export function useAINavigation() {
  const {
    navigateToSection,
    highlightElement,
    clearHighlight,
    activeHighlightId,
    isSpotlightVisible
  } = useAIHighlight();

  return {
    navigateToSection,
    highlightElement,
    clearHighlight,
    activeHighlightId,
    isSpotlightVisible
  };
}

export default useAINavigation;
