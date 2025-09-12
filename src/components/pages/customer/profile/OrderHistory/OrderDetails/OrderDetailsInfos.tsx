import Informations from "./Informations";
import ShippingSteps from "./ShippingSteps";



export default function OrderDetailsInfos(){

    return(
        <div className="flex flex-col w-full gap-4">
        <span className="font-semibold text-lg">Order Details</span>
        <hr  className="border-t-2"/>
        <div className="bg-gray-400 flex flex-col rounded-md p-3 gap-2">
                <div className="flex justify-between">
                    <span className="text-lg text-white font-semibold">ID. 90987193</span>
                    <span className="text-lg text-white font-semibold">$ 939.00</span>
                </div>
                <span className="text-sm text-white">4 Products • Order Placed in 18 August, 2025 at 6:26 PM</span>
            </div>
            <span>Order expected arrival: 19 August, 2025</span>
            <ShippingSteps />
            <Informations />
        </div>
        
    )
}