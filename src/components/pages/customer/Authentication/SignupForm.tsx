import {ArrowRightIcon,EyeIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../../ui/Input/Input";
import { Checkbox } from "../../../ui/Controls/Checkbox";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { useUserStore } from "../../../../store/userstore";



export default function SignupForm(){
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [confirmPassword,setConfirmPassword]=useState<string>("");
    const [firstName,setFirstName]=useState<string>("");
    const [lastName,setLastName]=useState<string>("");

    const {register ,loading ,error} = useUserStore();
    
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
        }
        await register(firstName, lastName, email, password);
    };
    

    return(
        <form onSubmit={handleSubmit} className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">

            {/* Logo */}

            <span className="text-xs text-gray-400">first time here? let's fix that</span>
            <h1 className="text-3xl font-extrabold">Sign Up</h1>
            <div className="flex items-center gap-2">
                <CustomInput value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} size="large" label="First name"/>
                <CustomInput value={lastName} onChange={(e)=>{setLastName(e.target.value)}} size="large" label="Last name"/>
            </div>
            <CustomInput value={email} onChange={(e)=>{setEmail(e.target.value)}} size="large" label="Email"/>
            <CustomInput type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <CustomInput type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} size="large" label="Confirm password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <div className="flex items-center gap-2">
            <Checkbox checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
            <span className="text-sm text-gray-400">I agree to Privacy policy and Terms of Service.</span>
            </div>
            <span className="text-red-500 text-center text-sm">{error ? error : "" }</span>
            <div className="flex flex-col items-center gap-4">
            <Button variant="primary" isPill={true} label={loading ? "Signing up.." : "Sign Up"} iconPosition="right" icon={<ArrowRightIcon />}/>
            <span className="text-xs items-center text-gray-400 flex gap-3">I have an account !<span className="text-primary text-sm">Sign in</span></span>
            </div>
            

        </form>
    )
}