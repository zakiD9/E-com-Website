import { EyeIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../../ui/Input/Input";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { useUserStore } from "../../../../store/userstore";
import { useSearchParams } from "react-router-dom";



export default function ResetPasswordForm(){
    const [newPassword,setNewPassword]=useState<string>("");
    const [confirmPassword,setConfirmPassword]=useState<string>("");
    const [searchParams] = useSearchParams();
    const resetCode = searchParams.get("code");
    const email = searchParams.get("email");


    const {resetPassword,loading,error}=useUserStore();

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
        }
        await resetPassword(email,resetCode,newPassword);
    }
    return(
        <form onSubmit={handleSubmit} className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Reset password</h1>
            <span className="text-xs text-gray-600">We’ve got your back. Just choose a new password below (8+ characters).</span>
           <CustomInput type="password" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <CustomInput type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} size="large" label="Confirm password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <span className="text-red-500 text-center text-sm">{error ? error : "" }</span>
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label={loading ? "reseting..." : "Reset Password"} />
            </div>
        </form>
    )
}