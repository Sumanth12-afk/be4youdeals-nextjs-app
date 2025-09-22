import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface OptimizedImageProps {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly className?: string;
  readonly priority?: boolean;
  readonly placeholder?: 'blur' | 'empty';
  readonly blurDataURL?: string;
  readonly quality?: number;
  readonly sizes?: string;
  readonly fill?: boolean;
  readonly style?: React.CSSProperties;
  readonly onClick?: () => void;
  readonly onLoad?: () => void;
  readonly onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  quality = 75,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  style,
  onClick,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate a simple blur placeholder if none provided
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  };

  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width, height);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    // Add a small delay to prevent immediate retry
    setTimeout(() => {
      setImageSrc(`${src}?retry=${Date.now()}`);
    }, 1000);
  };

  // Render placeholder component
  const renderPlaceholder = () => (
    <motion.div
      key="placeholder"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
      style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
    >
      <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
        <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs">Loading...</span>
      </div>
    </motion.div>
  );

  // Render error component
  const renderError = () => (
    <motion.div
      key="error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 flex flex-col items-center justify-center gap-3"
      style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
    >
      <div className="text-red-500 dark:text-red-400">
        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <p className="text-sm font-medium">Failed to load image</p>
      </div>
      <button
        onClick={handleRetry}
        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg transition-colors duration-200"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRetry();
          }
        }}
      >
        Retry
      </button>
    </motion.div>
  );

  // Render image component
  const renderImage = () => (
    <motion.div
      key="image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: 'auto',
          height: 'auto',
          ...style
        }}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        quality={quality}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Loading overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
              <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs">Loading...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // Determine which component to render
  const getContent = () => {
    if (!isInView) return renderPlaceholder();
    if (hasError) return renderError();
    return renderImage();
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
      role="img"
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <AnimatePresence mode="wait">
        {getContent()}
      </AnimatePresence>
    </div>
  );
}

// Helper function to check if image is loaded
const checkImageLoaded = (src: string, loadedImages: Set<string>): Promise<void> => {
  return new Promise((resolve) => {
    const checkLoaded = () => {
      if (loadedImages.has(src)) {
        resolve();
      } else {
        setTimeout(checkLoaded, 100);
      }
    };
    checkLoaded();
  });
};

// Helper function to handle image loading
const handleImageLoad = (
  src: string,
  setLoadedImages: React.Dispatch<React.SetStateAction<Set<string>>>,
  setLoadingImages: React.Dispatch<React.SetStateAction<Set<string>>>,
  resolve: () => void
) => {
  setLoadedImages(prev => new Set(prev).add(src));
  setLoadingImages(prev => {
    const newSet = new Set(prev);
    newSet.delete(src);
    return newSet;
  });
  resolve();
};

// Helper function to handle image error
const handleImageError = (
  src: string,
  setLoadingImages: React.Dispatch<React.SetStateAction<Set<string>>>,
  reject: (error: Error) => void
) => {
  setLoadingImages(prev => {
    const newSet = new Set(prev);
    newSet.delete(src);
    return newSet;
  });
  reject(new Error(`Failed to load image: ${src}`));
};

// Hook for preloading images
export const useImagePreloader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(src)) {
        resolve();
        return;
      }

      if (loadingImages.has(src)) {
        checkImageLoaded(src, loadedImages).then(resolve);
        return;
      }

      setLoadingImages(prev => new Set(prev).add(src));

      const img = new window.Image();
      img.onload = () => handleImageLoad(src, setLoadedImages, setLoadingImages, resolve);
      img.onerror = () => handleImageError(src, setLoadingImages, reject);
      img.src = src;
    });
  };

  const preloadImages = async (srcs: string[]): Promise<void[]> => {
    return Promise.all(srcs.map(preloadImage));
  };

  return {
    preloadImage,
    preloadImages,
    loadedImages,
    loadingImages
  };
};
