import { FC, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, title }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-out ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-all duration-300 ease-out ${
          isOpen ? 'bg-opacity-80' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className={`max-w-[90vw] max-h-[90vh] object-contain transition-all duration-300 ease-out transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageModal; 