import { ReactNode, useMemo } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText = ({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) => {
  const gradientStyle = useMemo(() => {
    const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
    return {
      backgroundImage: gradient,
      backgroundSize: "300% 100%",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      animation: `gradient-animation ${animationSpeed}s linear infinite`,
    };
  }, [colors, animationSpeed]);

  const borderStyle = useMemo(() => {
    if (!showBorder) return {};
    const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
    return {
      border: "2px solid transparent",
      backgroundImage: `linear-gradient(#000, #000), ${gradient}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    };
  }, [colors, showBorder]);

  return (
    <>
      <style>
        {`
          @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <span
        className={`inline-block ${className}`}
        style={{ ...gradientStyle, ...borderStyle }}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
