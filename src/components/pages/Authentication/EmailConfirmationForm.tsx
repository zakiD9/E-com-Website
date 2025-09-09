
import { useState } from "react";
import OtpInput from "../../ui/OTPinput";
import { Button } from "../../ui/button/Button";
import { TextButton } from "../../ui/button/TextButton";
import { useUserStore } from "../../../store/userstore";



export default function EmailConfirmationForm(){
    const [otp, setOtp] = useState<string>("");
    const {resendOtp,verifyAccount,error,loading,user}=useUserStore();
     const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        await resendOtp(user.email);
     }
     const handleSendNewCode = async () =>{
        await verifyAccount(user.email,otp);
     }

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Verify your email</h1>
            <span className="text-xs text-gray-600">Enter the 6-digit PIN code sent to your email *********ma78@gmail.com.</span>
            <OtpInput value={otp} onChange={(e)=>{setOtp(e)}} />
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label="Verify" />
            </div>
            <TextButton onClick={handleSendNewCode} label="Request new code" />
        </div>
    )
}