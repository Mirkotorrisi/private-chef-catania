import { useState, useEffect, useRef } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setisOnScreen] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => setisOnScreen(entry.isIntersecting),
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );
  }, []);
  useEffect(() => {
    if (!observer.current) return;
    observer.current.observe(ref.current);
    return () => {
      observer.current.disconnect();
    };
  });

  return isOnScreen;
};
