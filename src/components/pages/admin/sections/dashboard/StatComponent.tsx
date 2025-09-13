import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

interface StatCardProps{
    name:string;
    numb:number;
    icon:ReactNode;
}

export default function StatCard(props:StatCardProps){

    return(
        <div className="bg-gray-700 rounded-lg px-3 text-white py-2 w-1/6 flex gap-3 hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
            {props.icon}
            <div className="flex flex-col justify-start gap-1">
               <span className="uppercase font-semibold text-xs">{props.name}</span> 
               <span className="font-bold text-lg">{props.numb}</span>
            </div>
        </div>
    )
}