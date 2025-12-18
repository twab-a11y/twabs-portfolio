import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradientMove ${animationSpeed}s linear infinite`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <span
        className={className}
        style={{
          ...gradientStyle,
          ...(showBorder && {
            padding: "0.5em",
            border: "2px solid transparent",
            borderImage: `linear-gradient(90deg, ${colors.join(", ")}) 1`,
          }),
        }}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
