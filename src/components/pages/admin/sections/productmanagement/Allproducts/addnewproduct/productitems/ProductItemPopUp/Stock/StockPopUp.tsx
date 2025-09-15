import { useState } from "react";
import EditButton from "../../../../../../../../../ui/table.tsx/Edit";
import CustomInput from "../../../../../../../../../ui/Input/Input";
import CustomModal from "../../../../../../../../../ui/Modal";


export default function StockPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <EditButton onClick={()=>{setIsOpen(true)}} userId={1}/>
      <CustomModal
        visible={isOpen}
        className="w-2/5"
        title={<div className="text-2xl flex"><span>Variant</span></div>}
        content={   
        <div className="flex flex-col gap-2 w-full">
            <CustomInput size="large" disabled={true} label="Total Qty"/>
            <div className="flex gap-2">
                        <CustomInput size="large" disabled={true} label="Original Price"/>
                        <CustomInput size="large" label="Sales Price"/>
            </div>
            <div className="flex gap-2">
                        <CustomInput size="large" disabled={true} label="Expiration Date"/>
                        <CustomInput size="large" label="Discount Rate (%)"/>
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