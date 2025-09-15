import { PlusIcon } from "@heroicons/react/24/outline";

interface PictureCardProps{
    image?:string;
    isAdd?:boolean;
}

export default function PictureCard({image,isAdd=false}:PictureCardProps){

    return(
        <div className="h-[100px] w-[100px]">
            {isAdd ? <button className="border-2 flex items-center justify-center w-[100px] h-[100px]"><PlusIcon className="w-8 h-8"/></button> : <img alt="image" className="w-full h-full object-cover" src={image}/>}
        </div>
    )
}