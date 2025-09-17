import { useState } from "react";
import CustomModal from "../../../../../ui/Modal";
import CustomInput from "../../../../../ui/Input/Input";
import { TextButton } from "../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../ui/TextArea";
import { PlusIcon } from "@heroicons/react/24/outline";



export default function NewCategoryPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button onClick={()=>{setIsOpen(true)}} className="h-full flex justify-center items-center w-full hover:shadow-xl duration-300 ease-in-out cursor-pointer bg-gray-300 rounded-lg"><PlusIcon className="w-8 h-8"/></button>
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-2xl flex"><span>New Category</span></div>}
        content={<div className="flex gap-4">
                    <div className="flex flex-col w-1/5 gap-2 items-center">
                        <img  className="h-[150px] w-[150px] object-cover"/>
                        <TextButton label="Upload Image"/>
                    </div>
                    <div className="flex flex-col w-4/5 gap-2">
                        <CustomInput label="Name"/>
                        <CustomTextArea label="Description"/>
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