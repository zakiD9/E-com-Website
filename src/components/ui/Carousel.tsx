import { useEffect, useState } from "react";

interface HeroSliderProps {
  images: string[];     
  interval?: number;     
  className?: string;    
}

export default function HeroSlider({
  images,
  interval = 10000,
  className = "",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
