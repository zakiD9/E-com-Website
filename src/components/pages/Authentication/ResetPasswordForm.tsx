import { EyeIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../ui/Input/Input";
import { Button } from "../../ui/button/Button";



export default function ResetPasswordForm(){

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Reset password</h1>
            <span className="text-xs text-gray-600">We’ve got your back. Just choose a new password below (8+ characters).</span>
            <CustomInput size="large" label="New Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <CustomInput size="large" label="Confirm Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label="Reset Password" />
            </div>
        </div>
    )
}