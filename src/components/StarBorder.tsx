import { ReactNode, CSSProperties } from "react";

interface StarBorderProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  speed?: string;
  children?: ReactNode;
  thickness?: number;
}

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  thickness = 3,
}: StarBorderProps) => {
  const wrapperStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
    padding: `${thickness}px`,
    borderRadius: "9999px",
    overflow: "hidden",
    background: "transparent",
  };

  const borderStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: "9999px",
    background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, transparent 120deg)`,
    animation: `star-rotate ${speed} linear infinite`,
  };

  const innerStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1,
  };

  return (
    <>
      <style>
        {`
          @keyframes star-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <Component className={className} style={wrapperStyle}>
        <div style={borderStyle} />
        <div style={innerStyle}>{children}</div>
      </Component>
    </>
  );
};

export default StarBorder;
