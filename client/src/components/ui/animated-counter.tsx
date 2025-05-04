import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  formatter?: (value: number) => string;
  className?: string;
  labelClassName?: string;
  label?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  formatter = (value: number) => value.toLocaleString(),
  className,
  labelClassName,
  label,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersection(counterRef, {
    rootMargin: "0px 0px -100px 0px",
    once: true,
  });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    let startTime: number;
    let animationFrameId: number;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(easeOutQuad * value);
      
      setCount(currentValue);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startAnimation);
      } else {
        setCount(value);
        setHasAnimated(true);
      }
    };
    
    animationFrameId = requestAnimationFrame(startAnimation);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isInView, hasAnimated]);

  return (
    <div ref={counterRef} className="text-center">
      <div
        className={cn(
          "text-3xl md:text-4xl font-bold text-primary",
          className
        )}
      >
        {prefix}
        {formatter(count)}
        {suffix}
      </div>
      {label && (
        <p className={cn("text-sm md:text-base text-muted-foreground mt-2", labelClassName)}>
          {label}
        </p>
      )}
    </div>
  );
}
