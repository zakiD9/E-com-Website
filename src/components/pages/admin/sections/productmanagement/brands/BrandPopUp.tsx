import { useEffect, useRef, useState } from "react";
import CustomModal from "../../../../../ui/Modal";
import CustomInput from "../../../../../ui/Input/Input";
import { TextButton } from "../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../ui/TextArea";
import EditButton from "../../../../../ui/table.tsx/Edit";
import { Button } from "../../../../../ui/button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useBrandStore } from "../../../../../../store/brandsStore";

interface brandProps{
  id:number;
  isEdit:boolean;
}


export default function BrandPopUp(props:brandProps){
    const [isOpen, setIsOpen] = useState(false);

    const { createBrand , editBrand , editBrandImage ,selectedBrand ,fetchBrandById }=useBrandStore();

    const [name, setName] = useState(props.isEdit ? selectedBrand?.name || "" : "");
    const [about, setAbout] = useState(props.isEdit ? selectedBrand?.about || "" : "");
    const [image, setImage] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleOpen = async () => {
  if (props.isEdit) {
    await fetchBrandById(props.id);
    const brand = useBrandStore.getState().selectedBrand;
    setName(brand?.name || "");
    setAbout(brand?.about || "");
  }
  setIsOpen(true);
};


  const updateImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

    const handleSubmit = () => {
    if (props.isEdit && selectedBrand?.id) {
      editBrand(selectedBrand.id, name, about);
      if (image) editBrandImage(selectedBrand.id, image);
    } else {
      if (image) createBrand(name, about, image);
      else alert("Please upload an image");
    }
    setIsOpen(false);
  };


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
                      <img className="h-[150px] w-[150px] object-cover" />
                      <TextButton onClick={updateImage} label="Upload Image" />
                      <input 
                        type="file" 
                        className="hidden" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                      />
                    </div>
                    <div className="flex flex-col items-center w-4/5 gap-2">
                      <div className="flex flex-col w-9/12">
                        <CustomInput value={name} onChange={(e)=>{setName(e.target.value)}} label="Name"/>
                      </div>
                        <CustomTextArea onChange={(e)=>{setAbout(e)}} label="Description"/>
                    </div>
                </div>
        }
        onClose={() => setIsOpen(false)}
        onConfirm={handleSubmit}
      />
    </div>
    )
}