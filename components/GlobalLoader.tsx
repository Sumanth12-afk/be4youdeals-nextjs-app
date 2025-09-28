import React from 'react';
import TetrisLoading from './tetris-loader';

interface GlobalLoaderProps {
  isLoading: boolean;
  loadingText?: string;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  children?: React.ReactNode;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({
  isLoading,
  loadingText = "Loading...",
  size = "lg",
  speed = "normal",
  className = "",
  children
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 ${className}`}>
      <div className="text-center">
        <TetrisLoading 
          size={size} 
          speed={speed} 
          showLoadingText={true}
          loadingText={loadingText}
        />
      </div>
    </div>
  );
};

export default GlobalLoader;
