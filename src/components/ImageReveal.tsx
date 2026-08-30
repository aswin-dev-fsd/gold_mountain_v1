import React from 'react';
import Image from 'next/image';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = '4/3',
  className = '',
}) => {
  return (
    <div
      className={`reveal-fade ${className}`.trim()}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        width: '100%',
        aspectRatio: aspectRatio,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
};
