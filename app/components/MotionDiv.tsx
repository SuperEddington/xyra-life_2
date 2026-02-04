"use client";

import { motion, MotionProps } from "framer-motion";

// 1. 定义接口，显式包含 delay 属性
interface MotionDivProps extends MotionProps {
  className?: string;
  delay?: number; // ✨ 新增：允许直接传 delay={0.1}
  children?: React.ReactNode;
}

export const MotionDiv = ({ 
  children, 
  className, 
  delay = 0, 
  ...props 
}: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      // ✨ 2. 设置“默认”动画效果（如果外部没传，就用这一套）
      // 这样你在 AboutPage 里只写 <MotionDiv delay={0.1}> 也能动起来
      initial={props.initial || { opacity: 0, y: 30 }}
      whileInView={props.whileInView || { opacity: 1, y: 0 }}
      viewport={props.viewport || { once: true, margin: "-50px" }}
      
      // ✨ 3. 智能合并 transition
      // 如果外部传了 transition，就合并 delay；如果没传，就用默认的
      transition={{ 
        duration: 0.8, 
        delay: delay, // 这里接收传进来的 delay
        ease: "easeOut",
        ...(props.transition as object) // 允许外部覆盖
      }}
      
      {...props} // 展开其他所有属性
    >
      {children}
    </motion.div>
  );
};
