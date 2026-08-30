import React from 'react';
import Image from 'next/image';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryItem[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-md)',
      }}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            position: 'relative',
            borderRadius: '2px',
            overflow: 'hidden',
            aspectRatio: '3/2',
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          {img.caption && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(20, 36, 25, 0.75)',
                color: 'var(--text-light)',
                fontSize: 'var(--fs-caption)',
              }}
            >
              {img.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
