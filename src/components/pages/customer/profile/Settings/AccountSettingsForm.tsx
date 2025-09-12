import { Button } from "../../../../ui/button/Button";
import CustomDropdown from "../../../../ui/dropdown/Dropdown";
import CustomInput from "../../../../ui/Input/Input";



export default function AccountSettingsForm(){

    return(
        <div className="w-4/5 flex flex-col">
            <span className="text-lg font-semibold">Account Settings</span>
            <hr className="border-t-2 mt-2"/>
            <div className="flex justify-end mt-1">
                <span className="text-sm ">Edit information</span>
            </div>
            <div className="flex w-full gap-5 ">
                <div className="flex flex-col items-center gap-4 w-1/5">
                    <img className="rounded-full w-24 h-24"/>
                    <span className="text-sm">Upload Image</span>
                </div>
                <div className="flex flex-col gap-3 w-2/5">
                    <CustomInput size="large"  label="First Name"/>
                    <CustomInput size="large"  label="Email Name"/>
                    <CustomDropdown />
                </div>
                <div className="flex flex-col gap-3 w-2/5">
                    <CustomInput  size="large" label="Last Name"/>
                    <CustomInput size="large"  label="Phone Number"/>
                    <CustomInput  size="large" label="Date of Birth"/>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-end mt-4">
                <Button variant="primary" label="Save"/>
                <Button label="Discard"/>
            </div>
        </div>
    )
}