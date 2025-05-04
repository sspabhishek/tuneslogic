import { useState, useEffect } from "react";

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useIntersection(
  elementRef: React.RefObject<Element>,
  options: IntersectionOptions = {}
): boolean {
  const { threshold = 0, rootMargin = "0px", once = false } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold, rootMargin, once]);

  return isInView;
}
