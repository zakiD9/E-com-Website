import { Checkbox } from "../../../../ui/Controls/Checkbox";
import CustomInput from "../../../../ui/Input/Input";
import CustomTextArea from "../../../../ui/TextArea";
import PaymentOption from "./PaymentOption";



export default function Billing(){
    
    return(
        <div className="flex w-full">
            <div className="w-2/3 flex flex-col gap-3">
                <span className="font-semibold text-lg">Billing Information</span>
                <hr className="border-t-2"/>
                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <CustomInput disabled={true} label="First Name"/>
                <CustomInput disabled={true} label="Last Name"/>
                <CustomInput disabled={true} label="Email"/>
                <CustomInput label="Phone Number"/>
                </div>
                <div className="flex justify-end">
                    <Checkbox checked={true} label="Ship into different address"/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                <CustomInput disabled={true} label="Country"/>
                <CustomInput disabled={true} label="Region/State"/>
                <CustomInput disabled={true} label="City"/>
                <CustomInput label="Zip Code"/>
                <div className="col-span-2">
                <CustomInput label="Address"/>
                </div>
                </div>
                <PaymentOption />
                <div>
                <span className="font-semibold text-lg">Additional Details</span>
                <hr className="border-t-2"/>
                <div className="flex flex-col gap-1 mt-3 w-full">
                <span className="text-sm">Order notes (optional)</span>
                <CustomTextArea />
                </div>
                </div>
            </div>
            <div className="w-1/3">
                
            </div>
        </div>
    )
}