import { useState } from "react";
import { Button } from "../../ui/button/Button"
import CustomInput from "../../ui/Input/Input"
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";




export default function LoginForm(){
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");

    return(
        <form className="shadow-lg w-1/3 rounded-3xl gap-3 py-5 px-10 flex flex-col">

            {/* Logo */}
            <h1 className="text-3xl font-extrabold">Sign In</h1>
            <CustomInput value={email} onChange={(e)=>{setEmail(e.target.value)}} size="large" label="Email"/>
            <div className="flex flex-col mb-4">
            <CustomInput type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <div className="flex justify-end text-xs text-gray-400 mt-1">
            <button className="hover:text-primary mt-1">Forgot Password?</button>
            </div>
            </div>
            <div className="flex flex-col items-center gap-4">
            <Button variant="primary" isPill={true} label="Log In" iconPosition="right" icon={<ArrowRightIcon />}/>
            <span className="text-xs items-center text-gray-400 flex gap-3">don't have an account ?<Link to="/signup" className="text-primary text-sm hover:underline" >Sign Up</Link></span>
            </div>
            

        </form>
    )
}