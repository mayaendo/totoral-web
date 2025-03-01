import Image from 'next/image';

interface EspacioImage {
  src: string;
  alt: string;
}

interface EspacioGalleryProps {
  images: EspacioImage[];
  currentIndex: number;
}

export default function EspacioGallery({ 
  images, 
  currentIndex
}: EspacioGalleryProps) {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
    </>
  );
} 