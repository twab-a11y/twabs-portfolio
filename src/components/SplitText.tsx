import { useMemo, useRef, useCallback, useLayoutEffect } from "react";
import { gsap } from "gsap";

type SplitTextProps = {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words,chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const splitContent = useMemo(() => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className="inline-block"
          style={{ opacity: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className="inline-block mr-[0.25em]"
          style={{ opacity: 0 }}
        >
          {word}
        </span>
      ));
    }
    return text;
  }, [text, splitType]);

  const animate = useCallback(() => {
    const elements = elementsRef.current.filter(Boolean);
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete,
      }
    );
  }, [from, to, duration, ease, delay, onLetterAnimationComplete]);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animate, threshold, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign, display: "inline-block" }}
    >
      {splitContent}
    </div>
  );
};

export default SplitText;
