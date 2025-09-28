"use client";

import React from "react";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const inputId = React.useId();
    
    // Filter out conflicting animation and drag props
    const { 
      onAnimationStart, 
      onAnimationEnd, 
      onAnimationIteration,
      onDragStart,
      onDrag,
      onDragEnd,
      ...inputProps 
    } = props;
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <motion.input
          id={inputId}
          type={type}
          className={`
            flex h-12 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 
            placeholder:text-gray-500 dark:placeholder:text-gray-400 
            focus:border-blue-500 dark:focus:border-blue-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 
            transition-all duration-200
            ${error ? 'border-red-500 dark:border-red-400' : ''}
            ${className || ''}
          `}
          ref={ref}
          whileFocus={{ scale: 1.02 }}
          {...inputProps}
        />
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-500 dark:text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
