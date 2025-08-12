import HeroSlider from "../../ui/Carousel";

interface LandingComponentprops{
    firstImageList:string[];
    secondImageList:string[];
    thirdImageList:string[];
}

export default function LandingComponent({
    firstImageList=[
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3"
]
,
    secondImageList=[
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
]
,
    thirdImageList=[
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1514512364185-4c2b1cb96d5b",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
]

}:LandingComponentprops){
    return(
        <div className="flex p-2 my-4 gap-5">
            <HeroSlider  images={firstImageList} className="w-[873px] h-[520px]"/>
            <div className="flex flex-col gap-5">
            <HeroSlider interval={5000} images={secondImageList} className="w-[427px] h-[250px]"/>
            <HeroSlider interval={5000} images={thirdImageList} className="w-[427px] h-[250px]"/>
            </div>
        </div>
    )
}