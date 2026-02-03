"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children?: ReactNode;
  className?: string;
}

export function MotionDiv({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
