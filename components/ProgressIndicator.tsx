import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressIndicatorProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
  type?: 'spinner' | 'bar' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  fullScreen?: boolean;
}

export default function ProgressIndicator({
  isLoading,
  progress = 0,
  message = 'Loading...',
  type = 'spinner',
  size = 'md',
  color = 'primary',
  fullScreen = false
}: ProgressIndicatorProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (type === 'dots' && isLoading) {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [type, isLoading]);

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          spinner: 'h-4 w-4',
          text: 'text-sm',
          container: 'p-2'
        };
      case 'lg':
        return {
          spinner: 'h-12 w-12',
          text: 'text-xl',
          container: 'p-8'
        };
      default:
        return {
          spinner: 'h-8 w-8',
          text: 'text-base',
          container: 'p-4'
        };
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'secondary':
        return {
          spinner: 'border-purple-400',
          bar: 'bg-purple-500',
          pulse: 'bg-purple-500',
          skeleton: 'bg-purple-500/20'
        };
      case 'success':
        return {
          spinner: 'border-green-400',
          bar: 'bg-green-500',
          pulse: 'bg-green-500',
          skeleton: 'bg-green-500/20'
        };
      case 'warning':
        return {
          spinner: 'border-yellow-400',
          bar: 'bg-yellow-500',
          pulse: 'bg-yellow-500',
          skeleton: 'bg-yellow-500/20'
        };
      case 'error':
        return {
          spinner: 'border-red-400',
          bar: 'bg-red-500',
          pulse: 'bg-red-500',
          skeleton: 'bg-red-500/20'
        };
      default:
        return {
          spinner: 'border-cyan-400',
          bar: 'bg-cyan-500',
          pulse: 'bg-cyan-500',
          skeleton: 'bg-cyan-500/20'
        };
    }
  };

  const renderSpinner = () => (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${getSizeClasses().spinner} ${getColorClasses().spinner}`} />
  );

  const renderBar = () => (
    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full ${getColorClasses().bar} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 ${getColorClasses().pulse} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`w-8 h-8 ${getColorClasses().pulse} rounded-full`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity
      }}
    />
  );

  const renderSkeleton = () => (
    <div className="space-y-3 w-full">
      <div className={`h-4 ${getColorClasses().skeleton} rounded animate-pulse`} />
      <div className={`h-4 ${getColorClasses().skeleton} rounded animate-pulse w-3/4`} />
      <div className={`h-4 ${getColorClasses().skeleton} rounded animate-pulse w-1/2`} />
    </div>
  );

  const renderProgress = () => {
    switch (type) {
      case 'bar':
        return renderBar();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-3 ${getSizeClasses().container}`}>
      {renderProgress()}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-white ${getSizeClasses().text} font-medium`}
        >
          {message}{type === 'dots' ? dots : ''}
        </motion.p>
      )}
      {type === 'bar' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-sm"
        >
          {Math.round(progress)}%
        </motion.p>
      )}
    </div>
  );

  if (!isLoading) return null;

  if (fullScreen) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            {content}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
}

// Hook for managing loading states
export function useProgressIndicator() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Loading...');

  const startLoading = (msg = 'Loading...') => {
    setIsLoading(true);
    setProgress(0);
    setMessage(msg);
  };

  const updateProgress = (newProgress: number, msg?: string) => {
    setProgress(newProgress);
    if (msg) setMessage(msg);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setProgress(100);
    setTimeout(() => setProgress(0), 500);
  };

  return {
    isLoading,
    progress,
    message,
    startLoading,
    updateProgress,
    stopLoading
  };
}

// Higher-order component for automatic loading states
export function withProgressIndicator<T extends object>(
  Component: React.ComponentType<T>,
  options: {
    loadingMessage?: string;
    type?: ProgressIndicatorProps['type'];
    fullScreen?: boolean;
  } = {}
) {
  return function WrappedComponent(props: T) {
    const { isLoading, startLoading, stopLoading } = useProgressIndicator();

    useEffect(() => {
      startLoading(options.loadingMessage);
      // Simulate loading completion
      const timer = setTimeout(() => {
        stopLoading();
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <Component {...props} />
        <ProgressIndicator
          isLoading={isLoading}
          type={options.type}
          fullScreen={options.fullScreen}
          message={options.loadingMessage}
        />
      </>
    );
  };
}