import CustomInput from "../../ui/Input/Input";
import { Button } from "../../ui/button/Button";



export default function ForgetPasswordForm(){

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Forgot password</h1>
            <span className="text-xs text-gray-600">Enter the email address associated with your ShopPal account.</span>
            <CustomInput size="large" label="Email address"/>
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label="Send Code" />
            </div>
        </div>
    )
}