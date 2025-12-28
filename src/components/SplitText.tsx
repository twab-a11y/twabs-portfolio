import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  splitType?: "chars" | "words";
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
}

const SplitText = ({
  text,
  splitType = "chars",
  className = "",
  delay = 100,
  duration = 0.5,
  ease = "power2.out",
}: SplitTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  const items = splitType === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!containerRef.current || animated.current) return;

    const elements = containerRef.current.querySelectorAll(".split-item");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          gsap.fromTo(
            elements,
            { opacity: 0, y: 20, rotateX: -45 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration,
              ease,
              stagger: delay / 1000,
            }
          );
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [delay, duration, ease]);

  return (
    <span ref={containerRef} className={`inline-flex flex-wrap justify-center ${className}`}>
      {items.map((item, i) => (
        <span
          key={i}
          className="split-item inline-block opacity-0"
          style={{ perspective: "500px" }}
        >
          {item === " " ? "\u00A0" : item}
          {splitType === "words" && i < items.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
