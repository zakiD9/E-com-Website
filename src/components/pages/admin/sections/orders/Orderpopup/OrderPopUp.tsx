import { useState } from "react";
import CustomModal from "../../../../../ui/Modal";
import EditButton from "../../../../../ui/table.tsx/Edit";
import OrderDetails from "./OrderDetails";



export default function OrderPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <EditButton onClick={()=>{setIsOpen(true)}} userId={1} />
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-xl flex"><span>Order #13412</span></div>}
        content={<div className="flex flex-col gap-4">
                   <span className="font-semibold">Details</span>
                   <OrderDetails />
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