import { PlusIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../../../../../../../ui/button/IconButton";
import SubCategory from "./SubCategoryCard";
import Section from "./Sectionsection";
import { useState } from "react";


const subCategories = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Laptops"},
  { id: 3, name: "Headphones" },
  { id: 4, name: "Smart Watches" },
  { id: 5, name: "Gaming Consoles"},
];



export default function SubCategorySection(){
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number>(1);

    return(
        <div className="flex mt-2 gap-2 w-full">
                        <div className="flex border flex-col w-1/3">
                            <div className="flex justify-between border-b pl-2 items-center">
                                <h2 className="text-sm">Sub Category</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-5 h-5" />}/>
                            </div>
                            <div className="flex flex-col gap-1 p-1">
                                {subCategories.map((subCategory)=>(
                                <SubCategory onClick={() => setSelectedSubCategoryId(subCategory.id)} id={subCategory.id} selectedSubCategory={selectedSubCategoryId} name={subCategory.name}/>
                            ))}
                            </div>
                        </div>
                        <Section />
        </div>
    )
}