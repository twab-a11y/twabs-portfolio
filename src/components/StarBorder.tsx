import React from "react";

interface StarBorderProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "#ef4444",
  speed = "6s",
  thickness = 2,
  children,
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes star-rotate {
            100% {
              transform: rotate(360deg);
            }
          }
          
          .star-border-container {
            position: relative;
            z-index: 0;
            overflow: hidden;
            border-radius: 0.5rem;
          }
          
          .star-border-container::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: 50%;
            top: 50%;
            width: 300%;
            height: 300%;
            transform: translate(-50%, -50%) rotate(0deg);
            background-image: conic-gradient(
              from 0deg,
              transparent 0deg,
              ${color} 60deg,
              transparent 120deg,
              transparent 180deg,
              ${color} 240deg,
              transparent 300deg,
              transparent 360deg
            );
            animation: star-rotate ${speed} linear infinite;
          }
          
          .star-border-container::after {
            content: '';
            position: absolute;
            z-index: -1;
            left: ${thickness}px;
            top: ${thickness}px;
            width: calc(100% - ${thickness * 2}px);
            height: calc(100% - ${thickness * 2}px);
            background: hsl(0 0% 5%);
            border-radius: calc(0.5rem - ${thickness}px);
          }
        `}
      </style>
      <Component
        className={`star-border-container ${className}`}
        {...props}
      >
        <span className="relative z-10 block px-6 py-3">{children}</span>
      </Component>
    </>
  );
};

export default StarBorder;
