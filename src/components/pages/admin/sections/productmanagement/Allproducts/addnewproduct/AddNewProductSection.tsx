import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProductDetailsSection from "./productdetails/ProductDetailsSection";




export default function AddNewProductSection(){

    return(
        <div className="flex flex-col p-4 gap-10">
            <div className="flex items-center gap-2">
                <button className="hover:text-gray-700"><ArrowLeftIcon className="h-5 w-5"/></button>
                <span className="font-semibold">Add New Product</span>
            </div>
            <div className="flex gap-10">
                <ProductDetailsSection />
                <div className="flex flex-col gap-5">
                
                </div>
            </div>
        </div>
    )
}