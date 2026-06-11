import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      if (e.key === "ArrowRight") onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={onClose}
          data-testid="lightbox-backdrop"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-foreground p-2 rounded-full hover:bg-muted transition-colors"
            data-testid="button-lightbox-close"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1); }}
            className="absolute left-6 text-foreground p-3 rounded-full hover:bg-muted transition-colors"
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft size={32} />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-testid={`lightbox-image-${currentIndex}`}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0); }}
            className="absolute right-6 text-foreground p-3 rounded-full hover:bg-muted transition-colors"
            data-testid="button-lightbox-next"
          >
            <ChevronRight size={32} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
