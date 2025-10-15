import { useState } from "react";
import CustomModal from "../../../../../ui/Modal";
import CustomInput from "../../../../../ui/Input/Input";
import { TextButton } from "../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../ui/TextArea";
import EditButton from "../../../../../ui/table.tsx/Edit";
import { Button } from "../../../../../ui/button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

interface brandProps{
  id?:number;
  isEdit:boolean;
}

interface brand {
  name:string;
  about:string;
  image:string | File;
}


export default function BrandPopUp(props:brandProps){
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = ()=>{setIsOpen(!isOpen)}

    return(
        <div>
{props.isEdit ? (
  <EditButton id={1} onClick={handleOpen}/>
) : (
  <Button size="sm" onClick={handleOpen} isPill={true} icon={<PlusIcon />} label="Add New Brand"/>
)}
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={
          <div className="text-2xl flex">
            <span>{props.isEdit ? "Brand" : "New Brand"}</span>
          </div>
        }
        content={<div className="flex gap-4">
                    <div className="flex flex-col w-1/5 gap-2 items-center">
                        <img  className="h-[150px] w-[150px] object-cover"/>
                        <TextButton label="Upload Image"/>
                    </div>
                    <div className="flex flex-col items-center w-4/5 gap-2">
                      <div className="flex flex-col w-9/12">
                        <CustomInput label="Name"/>
                      </div>
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