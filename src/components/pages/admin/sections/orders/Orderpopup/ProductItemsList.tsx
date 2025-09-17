import { TextButton } from "../../../../../ui/button/TextButton";
import Status from "../../../../../ui/table.tsx/Status";

const items = [
  {
    stockId: 1,
    productName: "Running Shoes",
    variants: "Size 44 / Red",
    itemPrice: "$59.99",
    quantity: 2,
    subTotal: "$119.98",
    status: "In Stock",
  },
  {
    stockId: 2,
    productName: "Cotton T-Shirt",
    variants: "Large / White",
    itemPrice: "$19.50",
    quantity: 3,
    subTotal: "$58.50",
    status: "In Stock",
  },
];


export default function ProductItemsList(){

    return(
        <div className="flex flex-col w-full gap-1">
                                 <div className="flex justify-between">
                                   <span className="text-sm text-gray-600">Product Name</span>
                                   <span className="text-sm ml-32 text-gray-600">Item Price</span>
                                   <span className="text-sm text-gray-600">Quantity</span>
                                   <span className="text-sm text-gray-600">Sub-Total</span>
                                   <span className="text-sm text-gray-600">Stock Status</span>
                                   <span className="text-sm text-gray-600">Actions</span>
                                 </div>
                                 <hr className="border-t-2 border-gray-600" />
                           
                                 {items.map((item) => (
                                   <div key={item.stockId} className="flex justify-between items-center">
                                     <span className="text-sm ml-3">{item.productName}</span>
                                     <span className="text-sm">{item.variants}</span>
                                     <span className="text-sm">{item.itemPrice}</span>
                                     <span className="text-sm">{item.quantity}</span>
                                     <span className="text-sm">{item.subTotal}</span>
                                     <span className="text-sm">
                                       <Status size="small" status={item.status} />
                                     </span>
                                     <TextButton size="sm" label="View Details"/>
                                   </div>
                                 ))}
                                 <hr className="border-t-2 border-gray-600" />
                                 <div className="flex justify-end">
                                    <span className="font-semibold"> Total:$44</span>
                                 </div>
                               </div>
    )
}