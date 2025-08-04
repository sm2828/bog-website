import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with current window size to prevent flash
    return typeof window !== 'undefined' && window.innerWidth < 768;
  });

  useEffect(() => {
    // Check for mobile orientation
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Wait for all resources to load
    const handleLoad = () => {
      // Add a small delay to ensure everything is fully rendered
      setTimeout(() => {
        setIsFading(true);
        // Start the 2-second fade out
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete();
        }, 2000);
      }, 400);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-[2000ms] ease-in-out pointer-events-none select-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        pointerEvents: 'none',
        touchAction: 'none'
      }}
    >
      <img 
        src={isMobile ? "/bog-loading-mobile.jpeg" : "/pampet.jpg"} 
        alt="Loading..." 
        className="w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          pointerEvents: 'none',
          touchAction: 'none'
        }}
      />
    </div>
  );
};

export default LoadingScreen; 