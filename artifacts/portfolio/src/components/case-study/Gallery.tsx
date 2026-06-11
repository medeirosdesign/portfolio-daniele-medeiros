import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export function Gallery({ images }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-14 md:py-20 w-full overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
          Galeria
        </h2>
      </div>
      <div
        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`.cs-gallery::-webkit-scrollbar { display: none; }`}</style>

        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[65vw] snap-center cursor-pointer overflow-hidden rounded-lg bg-muted"
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
            data-testid={`gallery-item-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[45vh] md:h-[60vh] object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
