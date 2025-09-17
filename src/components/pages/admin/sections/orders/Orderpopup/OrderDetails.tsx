import { Divider } from "antd"



export default function OrderDetails(){

    return(
        <div className="flex border gap-2 p-2 w-full">
            <div className="w-2/5 flex gap-2 flex-col">
                <h2>Customer Info</h2>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">Name:</span>
                    <span className="text-xs font-semibold">Adem Fadjr Islam</span>
                </div>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">Email:</span>
                    <span className="text-xs font-semibold">Example@gmail.com</span>
                </div>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">Phone:</span>
                    <span className="text-xs font-semibold">+213699231120</span>
                </div>
            </div>
            <Divider type="vertical" size="large"/>
            <div className="3/5 flex gap-2 flex-col">
                <h2>Shipping Address</h2>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">Country:</span>
                    <span className="text-xs font-semibold">Algeria</span>
                </div>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">Region/State:</span>
                    <span className="text-xs font-semibold">Ras el Oued</span>
                </div>
                <div className="flex w-4/5 items-center justify-between">
                    <span className="text-xs text-gray-500">City:</span>
                    <span className="text-xs font-semibold">Ras el Oued</span>
                <div className="flex w-1/3 items-center justify-between">
                    <span className="text-xs text-gray-500">Zip Code:</span>
                    <span className="text-xs font-semibold">00001</span>
                </div>
                </div>
                <div className="flex w-4/5 gap-1 justify-between">
                    <span className="text-xs text-gray-500">Address:</span>
                    <span className="text-xs font-semibold">lorem adj ioajsd jasjdi fjaj sdioja f;fasldj alsdfjk as lalsd jfao lajf lsajf f</span>
                </div>
            </div>
        </div>
    )
}