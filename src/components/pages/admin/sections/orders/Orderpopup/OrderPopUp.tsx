import { useState } from "react";
import CustomModal from "../../../../../ui/Modal";
import OrderDetails from "./OrderDetails";
import ProductItemsList from "./ProductItemsList";
import CustomDropdown from "../../../../../ui/dropdown/Dropdown";
import SeeButton from "../../../../../ui/table.tsx/See";





export default function OrderPopUp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
      <SeeButton onClick={()=>{setIsOpen(true)}}/>
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-xl flex"><span>Order #13412</span></div>}
        content={<div className="flex flex-col gap-4">
                   <span className="font-semibold">Details</span>
                   <OrderDetails />
                   <div className="border p-2 flex flex-col gap-1">
                    <h2>Customer Notes</h2>
                    <span className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur. Dis neque rhoncus at tincidunt iaculis. Amet arcu venenatis a justo dolor scelerisque. Sit sit a tristique sem accumsan. </span>
                   </div>
                   <span className="font-semibold">Product Items List</span>
                   <ProductItemsList />
                   <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-2">
                    <h3>Payment Method</h3>
                    <span className="text-xs text-gray-400">Cash On Delivery</span>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h3>Order Date</h3>
                    <span className="text-xs text-gray-400">9/13/2025</span>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h3>Last Status Update</h3>
                    <span className="text-xs text-gray-400">9/15/2025</span>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h3>Status</h3>
                    <CustomDropdown />
                    </div>
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