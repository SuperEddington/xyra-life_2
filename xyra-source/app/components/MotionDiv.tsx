"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// 1. 继承官方类型 HTMLMotionProps<'div'>
// 这意味着它自动拥有了 initial, animate, transition, whileHover 等所有属性
interface MotionDivProps extends HTMLMotionProps<'div'> {
  children?: ReactNode;
  className?: string;
}

export function MotionDiv({
  children,
  className,
  ...props // 2. 使用剩余参数 ...props 接收所有动画属性
}: MotionDivProps) {
  return (
    <motion.div 
      className={className} 
      {...props} // 3. 自动把 initial={initial} 等属性传给 motion.div
    >
      {children}
    </motion.div>
  );
}
