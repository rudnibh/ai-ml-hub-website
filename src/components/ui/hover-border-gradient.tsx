import React from "react";
import { motion } from "framer-motion";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  [key: string]: any;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 1,
  clockwise = true,
  ...otherProps
}: HoverBorderGradientProps) {
  return (
    <Component
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-transparent bg-gray-800 p-[1px] ${containerClassName}`}
      style={{
        background: `conic-gradient(from ${clockwise ? "0deg" : "360deg"}, transparent, #8B5CF6, #EC4899, transparent)`,
      }}
      {...otherProps}
    >
      <div className={`relative z-10 flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 ${className}`}>
        {children}
      </div>
    </Component>
  );
}