import { ReactNode, useId } from "react";

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];
  speed?: number;
  className?: string;
}

const GradientText = ({
  children,
  colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3"],
  speed = 3,
  className = "",
}: GradientTextProps) => {
  const id = useId();
  const colorStops = colors.join(", ");

  return (
    <>
      <style>
        {`
          @keyframes flow-${id.replace(/:/g, "")} {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
      <span
        className={`inline-block bg-clip-text text-transparent ${className}`}
        style={{
          backgroundImage: `linear-gradient(270deg, ${colorStops})`,
          backgroundSize: "200% 200%",
          animation: `flow-${id.replace(/:/g, "")} ${speed}s ease infinite`,
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
