import { useState } from "react";
import EditButton from "../../../../../../../../../ui/table.tsx/Edit";
import CustomInput from "../../../../../../../../../ui/Input/Input";
import CustomModal from "../../../../../../../../../ui/Modal";


export default function AddNewVariantPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <EditButton onClick={()=>{setIsOpen(true)}} userId={1}/>
      <CustomModal
        visible={isOpen}
        className="w-1/3"
        title={<div className="text-2xl flex"><span>Variant</span></div>}
        content={   <div className="flex gap-2">
                        <CustomInput size="large" disabled={true} label="Name"/>
                        <CustomInput size="large" label="Value"/>
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