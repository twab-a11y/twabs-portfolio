import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  pulseDelay: number;
  scrollOffset: number;
}

const InteractiveStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [clickTarget, setClickTarget] = useState<{ x: number; y: number } | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate initial random stars
    const initialStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      pulseDelay: Math.random() * 3,
      scrollOffset: Math.random() * 100 - 50,
    }));
    setStars(initialStars);

    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!clickTarget) return;

    // Move stars toward click target
    setStars(prevStars =>
      prevStars.map(star => ({
        ...star,
        targetX: clickTarget.x,
        targetY: clickTarget.y,
      }))
    );

    // Reset to random positions after a delay
    const timeout = setTimeout(() => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          targetX: Math.random() * window.innerWidth,
          targetY: Math.random() * window.innerHeight,
        }))
      );
      setClickTarget(null);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [clickTarget]);

  useEffect(() => {
    // Animate stars
    const interval = setInterval(() => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          x: star.x + (star.targetX - star.x) * 0.05,
          y: star.y + (star.targetY - star.y) * 0.05,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    setClickTarget({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      onClick={handleClick}
      onPointerDown={(e) => {
        e.currentTarget.style.pointerEvents = 'auto';
      }}
    >
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full pointer-events-none animate-pulse"
          style={{
            left: `${star.x}px`,
            top: `${star.y + scrollY * 0.3 + star.scrollOffset}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transition: 'all 0.1s ease-out',
            opacity: 0.8,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            animationDelay: `${star.pulseDelay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveStars;
