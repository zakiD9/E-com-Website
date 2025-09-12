import { useEffect, useState } from "react";
import HeroSlider from "../../../ui/Carousel";

interface SecLandingComponentprops{
    firstImageList:string[];
    secondImageList:string[];
}


export default function SecLandingComponent({
  firstImageList= [
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  "https://images.unsplash.com/photo-1522206024047-9c9254216753?w=1600",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600",
  ],
  secondImageList= [
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  "https://images.unsplash.com/photo-1522206024047-9c9254216753?w=1600",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600",
  ],
}:SecLandingComponentprops){
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % firstImageList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
    return(
        <div className="flex my-4 gap-5">
            <HeroSlider activeIndex={activeIndex}  images={firstImageList} className="w-[650px] h-[325px]"/>
            <HeroSlider activeIndex={activeIndex}  images={secondImageList} className="w-[650px] h-[325px]"/>
        </div>
    )
}