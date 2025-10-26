import { useState } from "react";
import CustomTextArea from "../../../../../../../ui/TextArea";
import EditButton from "../../../../../../../ui/table.tsx/Edit";
import CustomModal from "../../../../../../../ui/Modal";
import CustomInput from "../../../../../../../ui/Input/Input";


export default function QndAPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <EditButton onClick={()=>{setIsOpen(true)}} />
      <CustomModal
        visible={isOpen}
        className="w-2/5"
        title={<div className="text-2xl flex"><span>Question & Answer</span></div>}
        content={   
        <div className="flex flex-col gap-2 w-11/12">
            <CustomInput  size="large" label="Question"/>
            <CustomTextArea rows={6} label="Answer"/>
            <hr className="mt-2"/>
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