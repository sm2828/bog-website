import { useState, useEffect } from 'react';

const MobileOrientationBlocker: React.FC = () => {
  const [isMobileOrientation, setIsMobileOrientation] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Check if screen width is less than height (portrait mode) and width is less than 768px (mobile)
      const isPortrait = window.innerWidth < window.innerHeight;
      const isMobile = window.innerWidth < 768;
      setIsMobileOrientation(isPortrait && isMobile);
    };

    // Check on mount
    checkOrientation();

    // Check on resize and orientation change
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  if (!isMobileOrientation) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        pointerEvents: 'all',
        touchAction: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: 9999
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Boglined ?</h1>
        <p className="text-xs mt-2">(no mobile support)</p>
      </div>
    </div>
  );
};

export default MobileOrientationBlocker; 