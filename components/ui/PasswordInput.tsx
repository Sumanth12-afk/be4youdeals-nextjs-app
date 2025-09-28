"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = useId();
    
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
    
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

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
        <div className="relative">
          <motion.input
            id={inputId}
            type={showPassword ? "text" : "password"}
            className={`
              flex h-12 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 
              bg-white dark:bg-gray-800 px-4 py-3 pr-12 text-sm text-gray-900 dark:text-gray-100 
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
          <motion.button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex h-full w-12 items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </motion.button>
        </div>
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

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
