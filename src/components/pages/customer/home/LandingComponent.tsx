import { memo, useEffect, useState } from "react";
import HeroSlider from "../../../ui/Carousel";

interface LandingComponentprops{
    firstImageList:string[];
    secondImageList:string[];
    thirdImageList:string[];
}

const MemoHeroSlider = memo(HeroSlider);

export default function LandingComponent({
  slider1= [
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  "https://images.unsplash.com/photo-1522206024047-9c9254216753?w=1600",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600",
  ],
  slider2= [
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  "https://images.unsplash.com/photo-1522206024047-9c9254216753?w=1600",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600",
  ],
  slider3= [
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  "https://images.unsplash.com/photo-1522206024047-9c9254216753?w=1600",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600",
  ],

}:LandingComponentprops){
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slider1.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
    return(
        <div className="flex p-2 my-4 gap-5">
            <MemoHeroSlider activeIndex={activeIndex}  images={slider1} className="w-[873px] h-[520px]"/>
            <div className="flex flex-col gap-5">
            <MemoHeroSlider activeIndex={activeIndex} images={slider2} className="w-[427px] h-[250px]"/>
            <MemoHeroSlider activeIndex={activeIndex} images={slider3} className="w-[427px] h-[250px]"/>
            </div>
        </div>
    )
}