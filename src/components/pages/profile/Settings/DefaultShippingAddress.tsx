import { Button } from "../../../ui/button/Button";
import CustomDropdown from "../../../ui/dropdown/Dropdown";
import CustomInput from "../../../ui/Input/Input";



export default function ShippingAddress(){

    return(
        <div className="w-4/5 flex flex-col">
                    <span className="text-lg font-semibold">Default Shipping Address</span>
                    <hr className="border-t-2 mt-2"/>
                    <div className="flex justify-end mt-1">
                        <span className="text-sm ">Edit Address</span>
                    </div>
                    <div className="flex w-full gap-5 ">
                        <div className="flex flex-col gap-3 w-3/6">
                            <CustomInput size="large" label="Country"/>
                            <CustomInput size="large" label="City"/>
                        </div>
                        <div className="flex flex-col gap-3 w-3/6">
                            <CustomInput size="large" label="Region/State"/>
                            <CustomInput size="large" label="Zip Code"/>
                            <CustomInput size="large" label="Address"/>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-end mt-4">
                        <Button variant="primary" label="Save"/>
                        <Button label="Discard"/>
                    </div>
                </div>
    )
}