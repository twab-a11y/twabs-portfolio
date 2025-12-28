import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
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
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const getSplitContent = useCallback(() => {
    if (splitType === "words") {
      return text.split(" ").map((word, index, array) => (
        <span
          key={index}
          className="split-word inline-block"
          style={{ opacity: 0 }}
        >
          {word}
          {index < array.length - 1 && <span>&nbsp;</span>}
        </span>
      ));
    }
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="split-char inline-block"
          style={{ opacity: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    return text;
  }, [text, splitType]);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const elements = containerRef.current?.querySelectorAll(
              splitType === "words" ? ".split-word" : ".split-char"
            );

            if (elements) {
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
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [delay, duration, ease, from, to, threshold, rootMargin, splitType, onLetterAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign }}
    >
      {getSplitContent()}
    </div>
  );
};

export default SplitText;
