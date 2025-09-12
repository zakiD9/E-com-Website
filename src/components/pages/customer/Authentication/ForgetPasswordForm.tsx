import { useState } from "react";
import CustomInput from "../../../ui/Input/Input";
import { Button } from "../../../ui/button/Button";
import { useUserStore } from "../../../../store/userstore";



export default function ForgetPasswordForm(){
const [email,setEmail]=useState<string>("");
const{forgetPassword ,loading , error}=useUserStore();

const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    await forgetPassword(email);
};

    return(
        <form onSubmit={handleSubmit} className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Forgot password</h1>
            <span className="text-xs text-gray-600">Enter the email address associated with your ShopPal account.</span>
            <CustomInput value={email} onChange={(e)=>{setEmail(e.target.value)}} size="large" label="Email address"/>
            <span className="text-red-500 text-center text-sm">{error ? error : "" }</span>
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label={loading ? "sending...." : "Send Code"} />
            </div>
        </form>
    )
}