import { ReactNode, useId } from "react";

interface StarBorderProps {
  children: ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  borderWidth?: number;
}

const StarBorder = ({
  children,
  color = "#fff",
  speed = "5s",
  className = "",
  borderWidth = 2,
}: StarBorderProps) => {
  const id = useId();

  return (
    <>
      <style>
        {`
          @keyframes spin-${id.replace(/:/g, "")} {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        className={`relative inline-flex items-center justify-center rounded-full ${className}`}
        style={{ padding: borderWidth }}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ padding: borderWidth }}
        >
          <div
            className="absolute w-[200%] h-[200%] top-1/2 left-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${color}, transparent 30%)`,
              animation: `spin-${id.replace(/:/g, "")} ${speed} linear infinite`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <div className="relative z-10 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md">
          {children}
        </div>
      </div>
    </>
  );
};

export default StarBorder;
