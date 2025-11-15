import { useState, useEffect, useCallback } from "react";

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
}

export const useScroll = (threshold: number = 20) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY >= threshold;
    
    setScrollState({ scrollY, isScrolled });
  }, [threshold]);

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollState;
};