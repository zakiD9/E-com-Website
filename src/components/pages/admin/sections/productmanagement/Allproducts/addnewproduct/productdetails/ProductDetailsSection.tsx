import CustomDropdown from "../../../../../../../ui/dropdown/Dropdown";
import CustomInput from "../../../../../../../ui/Input/Input";
import CustomTextArea from "../../../../../../../ui/TextArea";
import PictureCard from "./PictureCard";

const pictures = [
  { image: "https://picsum.photos/id/1016/200/200" },
  { image: "https://picsum.photos/id/1018/200/200" },
  { image: "https://picsum.photos/id/1020/200/200" },
  { isAdd: true },
];


export default function ProductDetailsSection(){


    return(
        <div className="flex flex-col justify-start gap-2 w-2/6">
            <h1 className="text-lg font-semibold mb-3">Product Details</h1>
            <CustomInput label="Product ID" disabled={true}/>
            <CustomInput label="Product Name" />
            <div className="flex gap-3">
                <CustomDropdown label="Brand"/>
                <CustomDropdown label="Category"/>
            </div>
            <CustomTextArea rows={5} label="Description"/>
            <CustomTextArea rows={5} label="Additional Information"/>
            <div className="grid grid-cols-4 gap-2">
                {pictures.map((picture)=>(
                    <PictureCard image={picture.image} isAdd={picture.isAdd}/>
                ))}
            </div>
        </div>
    )
}