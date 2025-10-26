import { useRef, useState } from "react";
import CustomModal from "../../../../../../ui/Modal";
import CustomInput from "../../../../../../ui/Input/Input";
import { TextButton } from "../../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../../ui/TextArea";
import EditButton from "../../../../../../ui/table.tsx/Edit";
import CategoryCard from "./CategoryCard";
import { Button } from "../../../../../../ui/button/Button";
import SubCategorySection from "./subcategory/SubCategorySection";

interface categoryCardProps{
    image:string;
    categoryName:string;
}

const categories = [
  { id: 1, name: "Electronics", image: "...", parentId: null, level: 1 },
  { id: 2, name: "Phones", image: "...", parentId: 1, level: 2 },
  { id: 3, name: "Laptops", image: "...", parentId: 1, level: 2 },
  { id: 4, name: "iPhone", image: "...", parentId: 2, level: 3 },
  { id: 5, name: "Samsung", image: "...", parentId: 2, level: 3 },
  { id: 6, name: "Electronics", image: "...", parentId: null, level: 1 },
  { id: 7, name: "Phones", image: "...", parentId: 1, level: 2 },
  { id: 8, name: "Laptops", image: "...", parentId: 1, level: 2 },
  { id: 9, name: "iPhone", image: "...", parentId: 2, level: 3 },
  { id: 10, name: "Samsung", image: "...", parentId: 2, level: 3 },
]






export default function CategoryPopUp(props:categoryCardProps){
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit , setIsEdit] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    


    const handleOpenDialog = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <CategoryCard categoryName={props.categoryName} image={props.image} onClick={handleOpenDialog}/>
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-2xl flex"><span>Category #13412</span></div>}
        content={<div className="flex flex-col">
                    <div className="flex gap-4">
                    <div className="flex flex-col w-1/5 gap-2 items-center">
                {image ? (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="h-[150px] w-[150px] object-cover rounded-lg border"
                    />
                    <button
                      onClick={() => setImage(null)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="h-[150px] w-[150px] border border-dashed border-gray-400 flex items-center justify-center text-sm text-gray-500 rounded-lg">
                    No image selected
                  </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="hidden"
                    ref={fileInputRef}
                  />

                  <TextButton
                    label="Upload Image"
                    onClick={() => fileInputRef.current?.click()}
                  />
              </div>
                    <div className="flex flex-col  w-4/5 gap-2">
                        <div className="flex w-full px-5 justify-between">
                        <CustomInput label="Name"/>
                        {!isEdit && <div onClick={()=>{setIsEdit(true)}} className="flex gap-1 cursor-pointer items-center">
                            <EditButton />
                            <TextButton className="text-sm" label="Edit Category"/>
                        </div>}
                        </div>
                        <CustomTextArea label="Description"/>
                        {isEdit && <div className="flex items-center gap-2 justify-end">
                            <Button onClick={()=>{setIsEdit(false)}} label="Cancel" size="sm" variant="default" isPill={true} />
                            <Button onClick={()=>{setIsEdit(false)}} label="Save" size="sm" variant="primary" isPill={true}/>
                        </div>}
                    </div>
                    </div>
                    <hr className="mt-2"/>
                    <SubCategorySection />
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