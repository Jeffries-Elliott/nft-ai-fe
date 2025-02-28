import {useEffect, useState} from "react";

export default function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const _isScrolled = window.scrollY > 20;
      if (_isScrolled !== isScrolled) setIsScrolled(_isScrolled);
    };

    const debouncedScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const optimizedScroll = debouncedScroll()
    window.addEventListener('scroll', optimizedScroll);
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, [isScrolled]);

  return isScrolled;
}
