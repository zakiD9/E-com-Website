import {ArrowRightIcon, EyeDropperIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../ui/Input/Input";
import { Checkbox } from "../../ui/Controls/Checkbox";
import { Button } from "../../ui/button/Button";



export default function LoginForm(){

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">

            {/* Logo */}

            <span className="text-xs text-gray-400">Welcome back !!</span>
            <h1 className="text-3xl font-extrabold">Sign In</h1>
            <CustomInput size="large" label="Email"/>
            <div className="flex flex-col mb-4">
            <CustomInput size="large" label="Password" icon={<EyeDropperIcon className="w-4 h-4"/>}/>
            <div className="flex justify-end text-xs text-gray-400 mt-1">
            <button className="hover:text-primary mt-1">Forgot Password?</button>
            </div>
            </div>
            <div className="flex flex-col items-center gap-4">
            <Button variant="primary" isPill={true} label="Sign In" iconPosition="right" icon={<ArrowRightIcon />}/>
            <span className="text-xs items-center text-gray-400 flex gap-3">don't have an account ?<span className="text-primary text-sm">Sign Up</span></span>
            </div>
            

        </div>
    )
}