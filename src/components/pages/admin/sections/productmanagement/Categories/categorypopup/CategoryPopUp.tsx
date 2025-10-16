import { useState } from "react";
import CustomModal from "../../../../../../ui/Modal";
import CustomInput from "../../../../../../ui/Input/Input";
import { TextButton } from "../../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../../ui/TextArea";
import { IconButton } from "../../../../../../ui/button/IconButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import SubCategory from "./SubCategoryCard";
import EditButton from "../../../../../../ui/table.tsx/Edit";
import DeleteButton from "../../../../../../ui/table.tsx/Delete";
import Variant from "./variantCard";
import Section from "./SectionCard";

interface categoryCardProps{
    image:string;
    categoryName:string;
}

const subCategories = [
  { id: 1, name: "Smartphones",isSelected:true },
  { id: 2, name: "Laptops",isSelected:false },
  { id: 3, name: "Headphones",isSelected:false },
  { id: 4, name: "Smart Watches",isSelected:false },
  { id: 5, name: "Gaming Consoles",isSelected:false},
];

const variants = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Green" },
];

const sections = [
  { id: 1, name: "Specifications" },
  { id: 2, name: "Materials & Build" },
  { id: 3, name: "Size & Dimensions" },
  { id: 4, name: "Care Instructions" },
  { id: 5, name: "Warranty" },
];





export default function CategoryPopUp(props:categoryCardProps){
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <div onClick={handleOpenDialog} className="flex flex-col hover:shadow-xl duration-300 ease-in-out cursor-pointer bg-white items-center rounded-lg ">
            <img src={props.image} alt={props.categoryName} className="object-cover w-full h-5/6"/>
            <span className="p-3">{props.categoryName}</span>
            </div>
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-2xl flex"><span>Category #13412</span></div>}
        content={<div className="flex flex-col">
                    <div className="flex gap-4">
                    <div className="flex flex-col w-1/5 gap-2 items-center">
                        <img  className="h-[150px] w-[150px] object-cover"/>
                        <TextButton label="Upload Image"/>
                    </div>
                    <div className="flex flex-col items-center w-4/5 gap-2">
                        <div className="flex flex-col w-3/4">
                        <CustomInput label="Name"/>
                        </div>
                        <CustomTextArea label="Description"/>
                    </div>
                    </div>
                    <hr className="mt-2"/>
                    <div className="flex mt-2 gap-2 w-full">
                        <div className="flex border flex-col w-1/3">
                            <div className="flex justify-between border-b pl-2 items-center">
                                <h2 className="text-sm">Sub Category</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-5 h-5" />}/>
                            </div>
                            <div className="flex flex-col gap-1 p-1">
                                {subCategories.map((subCategory)=>(
                                <SubCategory id={subCategory.id} isSelected={subCategory.isSelected} name={subCategory.name}/>
                            ))}
                            </div>
                        </div>
                        <div className="flex flex-col border w-2/3">
                            <div className="flex justify-between border-b p-2 items-center">
                                <h2 className="text-sm font-medium">Sub Category Name</h2>
                                <div className="flex gap-1">
                                <EditButton size="sm" />
                                <DeleteButton size="sm" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 p-2">
                                <div className="flex gap-2 items-center">
                                <h2 className="font-semibold text-sm ">Variant ({variants.length}/4)</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-4 h-4" />}/>
                                </div>
                                <div className="flex items-center gap-2">
                                {variants.map((variant)=>(
                                    <Variant {...variant}/>
                                ))
                                }
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 p-2">
                                <div className="flex gap-2 items-center">
                                <h2 className="font-semibold text-sm ">Sections</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-4 h-4" />}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                {sections.map((section)=>(
                                    <Section {...section}/>
                                ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
        }
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("Confirmed!");
          setIsOpen(false);
        }}
      />
    </div>
    )
}