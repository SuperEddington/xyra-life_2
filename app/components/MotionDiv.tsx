"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
}

export function MotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  );
}
