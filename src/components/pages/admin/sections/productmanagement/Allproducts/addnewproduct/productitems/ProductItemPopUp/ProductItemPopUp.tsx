import { useState } from "react";
import CustomModal from "../../../../../../../../ui/Modal";
import EditButton from "../../../../../../../../ui/table.tsx/Edit";
import CustomInput from "../../../../../../../../ui/Input/Input";
import VariantItem from "./Variant/VariantItem";
import StockTable from "./Stock/StockTable";
import { Button } from "../../../../../../../../ui/button/Button";

const variants = [
    { label: "Size", value: 44 },
    { label: "Color", value: "Black" },
    { label: "Material", value: "Leather" },
    { label: "Stock", value: 12 },
  ];


export default function ProductItemPopUp(){

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <EditButton onClick={()=>{setIsOpen(true)}} userId={1}/>
      <CustomModal
        visible={isOpen}
        className="w-3/5"
        title={<div className="text-2xl flex"><span>Product Item</span></div>}
        content={<div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <CustomInput size="large" disabled={true} label="Product Item ID"/>
                        <CustomInput size="large" label="Product Item Name"/>
                    </div>
                    <div className="flex flex-col w-full">
                    <span className="font-semibold">Variants</span>
                    <hr className="border-t-2"/>
                    {variants.map((variant)=>(
                    <VariantItem {...variant} />
                    ))}
                    </div>
                    <div className="flex flex-col w-full">
                    <span className="font-semibold">Stock</span>
                    <hr className="border-t-2 mb-2"/>
                    <StockTable items={[
    {
      stockId: "10",
      availableQty: 68,
      reservedQty: 12,
      salesPrice: 12.28,
      expirationDate: "5/12/2026",
      createDate: "5/12/2025",
      status: "In Stock",
    },
    {
      stockId: "11",
      availableQty: 32,
      reservedQty: 5,
      salesPrice: 15.75,
      expirationDate: "6/10/2026",
      createDate: "6/10/2025",
      status: "Blocked",
    },
  ]}/>
                    </div>
                    <div className="flex justify-end">
                        <Button size="sm" label="ReStock" isPill={true}/>
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