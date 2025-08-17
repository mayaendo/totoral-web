"use client";

import { useState, useRef, useEffect, CSSProperties, useCallback } from "react";
import Image from "next/image";

interface Album {
  id: number;
  imagePath: string;
  title: string;
  artist: string;
  credits: string;
}

export default function AlbumCarousel() {
  // Extract image names and create album data
  const albums: Album[] = [
    {
      id: 1,
      imagePath: "/images/trabajo/porta_jaze.jpg",
      title: "Personalidad 7",
      artist: "Jaze",
      credits: "Co-producción por Lorenzo Tapia",
    },
    {
      id: 2,
      imagePath: "/images/trabajo/porta_paraque.jpg",
      title: "Para Qué",
      artist: "Carlos Cruzalegui, rulolo",
      credits: "Producción y mix por Lorenzo Tapia",
    },
    {
      id: 4,
      imagePath: "/images/trabajo/porta_antesdepartirmoncho.jpg",
      title: "Antes De Partir",
      artist: "Moncho Berry, Julian Carrion",
      credits: "Producción y mix por Simon Yriberry",
    },
    {
      id: 5,
      imagePath: "/images/trabajo/porta_narrotemple.jpg",
      title: "La Beba",
      artist: "Temple Sour",
      credits: "Co-producción por Lorenzo Tapia",
    },
    {
      id: 6,
      imagePath: "/images/trabajo/porta_mattias1.jpg",
      title: "Growing Old is Getting Old",
      artist: "mattias",
      credits: "Producción por Simon Yriberry",
    },
    {
      id: 7,
      imagePath: "/images/trabajo/porta_sentirmebienmoncho.jpg",
      title: "SENTIRME BIEN",
      artist: "Moncho Berry",
      credits: "Producción por Simon Yriberry",
    },
    {
      id: 8,
      imagePath: "/images/trabajo/porta_habitacionrulolo.jpg",
      title: "Habitacion",
      artist: "rulolo, Maya Endo",
      credits: "Producción, mix y máster por Lorenzo Tapia",
    },
    {
      id: 9,
      imagePath: "/images/trabajo/porta_mattias.jpg",
      title: "letters to you, my love",
      artist: "mattias",
      credits: "Producción por Simon Yriberry y Lorenzo Tapia",
    },
    {
      id: 10,
      imagePath: "/images/trabajo/porta_nosoyyomonchotiare.jpg",
      title: "No Soy Yo",
      artist: "Moncho Berry, Tiare",
      credits:
        "Producción por Lorenzo Tapia y Simon Yriberry, máster por Lorenzo Tapia",
    },
    {
      id: 11,
      imagePath: "/images/trabajo/porta_toylokazojuanca.jpg",
      title: "TOY LOKAZO",
      artist: "Jaze",
      credits: "Producción, ingeniería de sonido por Lorenzo Tapia",
    },
    {
      id: 12,
      imagePath: "/images/trabajo/porta_rulolo.jpg",
      title: "AT",
      artist: "rulolo",
      credits:
        "Producción, ingeniería de sonido, mix y máster por Lorenzo Tapia",
    },
    {
      id: 13,
      imagePath: "/images/trabajo/porta_elsolpaiva.jpg",
      title: "El Sol",
      artist: "El Joven Paiva",
      credits: "Producción vocal por Simon Yriberry, máster por Lorenzo Tapia",
    },
    {
      id: 14,
      imagePath: "/images/trabajo/porta_sandrobevilaqu.jpg",
      title: "Lila",
      artist: "Sandro Bevilaqua",
      credits: "Producción y mix por Simon Yriberry",
    },
    {
      id: 15,
      imagePath: "/images/trabajo/porta_sophiarogers.jpg",
      title: "Spring Song",
      artist: "Sophia Rogers",
      credits: "Mix por Simon Yriberry, máster por Lorenzo Tapia",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(7); // Start in the middle
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragThreshold] = useState(40); // Desktop threshold
  const [mobileDragThreshold] = useState(70); // Higher threshold for mobile
  const [lastDragTime, setLastDragTime] = useState(0);
  const [touchThrottleTime] = useState(100); // Longer throttle time for touch (100ms)
  const [mouseThrottleTime] = useState(50); // Original throttle time for mouse (50ms)
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [isClick, setIsClick] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
    setIsClick(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    setDragOffset(deltaX);

    // Add throttling to slow down the rotation
    const now = Date.now();
    if (now - lastDragTime < mouseThrottleTime) return; // Only process every 50ms

    // Continuous rotation effect - only while dragging
    if (Math.abs(deltaX) > dragThreshold) {
      const direction = deltaX > 0 ? -1 : 1; // Reverse direction for natural feel

      // Move only one album at a time for smoother control
      setCurrentIndex((prev) => {
        let newIndex = (prev + direction) % albums.length;
        if (newIndex < 0) newIndex += albums.length;
        return newIndex;
      });

      setStartX(e.clientX);
      setLastDragTime(now);
      setIsClick(false); // If we've dragged enough to move, it's not a click
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    // If it was a click (not a significant drag) and we clicked on an album
    if (isClick) {
      // Find which album was clicked by checking if the event target is within an album div
      const albumElements = document.querySelectorAll("[data-album-index]");
      let clickedIndex = -1;

      albumElements.forEach((element) => {
        if (element.contains(e.target as Node)) {
          clickedIndex = parseInt(
            element.getAttribute("data-album-index") || "-1"
          );
        }
      });

      if (clickedIndex >= 0) {
        handleAlbumClick(clickedIndex);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setIsClick(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
    setIsClick(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    setDragOffset(deltaX);

    // Add throttling to slow down the rotation - longer for touch
    const now = Date.now();
    if (now - lastDragTime < touchThrottleTime) return; // Increased throttle time for touch

    // Continuous rotation effect - only while dragging
    // Use higher threshold for touch to make it less sensitive
    if (Math.abs(deltaX) > mobileDragThreshold) {
      // Reduce the effect of movement by only moving if drag is significant
      const direction = deltaX > 0 ? -1 : 1; // Reverse direction for natural feel

      // Move only one album at a time for smoother control
      setCurrentIndex((prev) => {
        let newIndex = (prev + direction) % albums.length;
        if (newIndex < 0) newIndex += albums.length;
        return newIndex;
      });

      // Reset start position but only partially to create resistance
      // This creates a "sticky" feel that slows down scrolling
      setStartX((prevX) => prevX + deltaX * 0.7); // Only reset 70% of the way
      setLastDragTime(now);
      setIsClick(false); // If we've dragged enough to move, it's not a click
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
    setIsClick(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
  }, [albums.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
  }, [albums.length]);

  const handleAlbumClick = (index: number) => {
    // If clicking on the current album, select it
    if (index === currentIndex) {
      setSelectedAlbum(index);
    } else {
      // Otherwise, navigate to that album
      setCurrentIndex(index);
    }
  };

  // Calculate positions for each album in a ring
  const getAlbumStyle = (index: number): CSSProperties => {
    const totalAlbums = albums.length;

    // Calculate the shortest distance around the ring
    let distance = Math.abs(index - currentIndex);
    distance = Math.min(distance, totalAlbums - distance);

    // Normalize the distance to be between 0 and 1
    const normalizedDistance = Math.min(distance, 4) / 4;

    // Calculate angle in the ring (in radians)
    const angleOffset = ((index - currentIndex) / totalAlbums) * 2 * Math.PI;
    const shortestAngleOffset =
      angleOffset > Math.PI
        ? angleOffset - 2 * Math.PI
        : angleOffset < -Math.PI
        ? angleOffset + 2 * Math.PI
        : angleOffset;

    // Calculate z-index (higher for center, lower for sides)
    const zIndex = 100 - distance * 10;

    // Calculate opacity (full for center, fading for sides)
    const opacity = 1 - normalizedDistance * 0.6;

    // Calculate scale (larger for center, smaller for sides)
    const scale = 1 - normalizedDistance * 0.3;

    // Calculate rotation (more rotated for sides)
    const rotation = shortestAngleOffset * 60; // Increased rotation angle

    // Calculate position in 3D space
    const radius = 450; // Significantly increased radius for more spacing
    const angleInRing = shortestAngleOffset;

    // Apply drag offset to rotation - reduced effect for smoother feel
    const dragRotationOffset = isDragging ? dragOffset * 0.05 : 0;

    // Calculate x position (around the ring)
    const xPosition = Math.sin(angleInRing) * radius;

    // Calculate z position (depth in the ring)
    const zPosition = (Math.cos(angleInRing) - 1) * radius;

    // Add additional spacing based on distance from center
    // Exponential spacing - albums further from center get pushed out more
    const spacingMultiplier = Math.abs(shortestAngleOffset) * 2;
    const additionalXSpacing =
      Math.sign(shortestAngleOffset) * spacingMultiplier * 30;

    // Selected album effect
    const isSelected = selectedAlbum === index;
    const isCurrentAlbumSelected = selectedAlbum === currentIndex;

    // When any album is selected, only show the selected one prominently
    let selectedScale = scale;
    let selectedZIndex = zIndex;
    let selectedOpacity = opacity;

    if (isSelected) {
      // The selected album gets larger and in front
      selectedScale = 1.3;
      selectedZIndex = 1000;
      selectedOpacity = 1;
    } else if (isCurrentAlbumSelected) {
      // If current album is selected but this is not it, make it nearly invisible
      selectedOpacity = 0.1;
      selectedZIndex = 10;
    }

    return {
      zIndex: selectedZIndex,
      opacity: selectedOpacity,
      transform: `translateX(${
        xPosition + additionalXSpacing + dragRotationOffset
      }px) translateZ(${zPosition}px) scale(${selectedScale}) rotateY(${
        rotation + dragRotationOffset
      }deg)`,
      transition: isDragging ? "transform 0.1s ease-out" : "all 0.5s ease-out",
      cursor: "pointer",
      // Hide other albums completely when one is selected
      visibility:
        isCurrentAlbumSelected && !isSelected
          ? ("hidden" as const)
          : ("visible" as const),
    };
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Enter" || e.key === " ") {
        setSelectedAlbum(currentIndex);
      } else if (e.key === "Escape" && selectedAlbum !== null) {
        setSelectedAlbum(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, selectedAlbum, goToPrevious, goToNext]); // Fixed: added missing dependencies

  // Close selected album when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        selectedAlbum !== null &&
        carouselRef.current &&
        !carouselRef.current.contains(e.target as Node)
      ) {
        setSelectedAlbum(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedAlbum]);

  return (
    <div className="bg-primary/30 backdrop-blur-sm p-1 rounded-lg shadow-xl border border-white/10 mb-8 relative overflow-hidden">
      {/* Background decorative elements for depth */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-yellow/30 blur-xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-40 h-40 rounded-full bg-accent/30 blur-xl"></div>
        <div className="absolute top-[60%] left-[40%] w-24 h-24 rounded-full bg-secondary/30 blur-xl"></div>
      </div>

      <div
        className="relative h-[400px] w-full overflow-hidden perspective-1000 my-1 z-10"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="region"
        aria-label="Album carousel"
      >
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
          {albums.map((album, index) => {
            // Only render albums that are close to the current index for performance
            // Always render the selected album regardless of distance
            const shouldRender =
              selectedAlbum === index ||
              Math.abs(
                (index - currentIndex + albums.length) % albums.length
              ) <= 5 ||
              Math.abs(
                (currentIndex - index + albums.length) % albums.length
              ) <= 5;

            if (!shouldRender) return null;

            const isSelected = selectedAlbum === index;

            return (
              <div
                key={album.id}
                className={`absolute w-56 h-56 transition-all transform-gpu ${
                  isSelected ? "selected-album" : ""
                }`}
                style={getAlbumStyle(index)}
                aria-hidden={index !== currentIndex && !isSelected}
                data-album-index={index}
              >
                <div
                  className={`relative w-full h-full rounded-lg overflow-hidden ${
                    index === currentIndex && !selectedAlbum
                      ? "ring-4 ring-yellow/70"
                      : ""
                  } ${isSelected ? "ring-4 ring-yellow" : ""}`}
                >
                  <div className="absolute inset-0 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8)] z-10"></div>
                  <Image
                    src={album.imagePath}
                    alt={`${album.title} by ${album.artist}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={
                      index === currentIndex ||
                      isSelected ||
                      Math.abs(index - currentIndex) <= 2
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons - hide when an album is selected */}
        {selectedAlbum === null && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow/80 hover:bg-yellow text-primary p-2 rounded-full z-[101] shadow-lg"
              aria-label="Previous album"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow/80 hover:bg-yellow text-primary p-2 rounded-full z-[101] shadow-lg"
              aria-label="Next album"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Close button when an album is selected */}
        {selectedAlbum !== null && (
          <button
            onClick={() => setSelectedAlbum(null)}
            className="absolute top-4 right-4 bg-yellow/80 hover:bg-yellow text-primary p-2 rounded-full z-[1001] shadow-lg"
            aria-label="Close selected album"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Album info */}
      <div className="text-center mt-2 relative z-10 space-y-1">
        <h4 className="text-xl font-lora font-semibold text-yellow">
          {selectedAlbum !== null
            ? albums[selectedAlbum].title
            : albums[currentIndex].title}
        </h4>
        <p className="font-mono text-white/80">
          {selectedAlbum !== null
            ? albums[selectedAlbum].artist
            : albums[currentIndex].artist}
        </p>
        <p className="font-mono text-white/80 text-xs">
          {selectedAlbum !== null
            ? albums[selectedAlbum].credits
            : albums[currentIndex].credits}
        </p>
      </div>

      <div className="text-center mt-1 relative z-10">
        <p className="font-mono text-xs text-white/50">
          {selectedAlbum === null
            ? "Desliza, usa los botones o las flechas del teclado para navegar entre álbumes"
            : "Haz clic en el botón de cerrar para volver al carrusel"}
        </p>
      </div>
    </div>
  );
}
