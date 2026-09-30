import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks window scroll position to apply navbar background blur and styling.
 * @param {number} threshold - Scroll Y offset threshold in px.
 * @returns {boolean} isScrolled - Whether scroll Y exceeds threshold.
 */
export function useScrollNavbar(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
