interface HeroSliderProps {
  images: string[];     
  activeIndex:number;   
  className?: string;    
}

export default function HeroSlider({
  images,
  activeIndex=0,
  className = "",
}: HeroSliderProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
