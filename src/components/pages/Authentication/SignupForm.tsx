import {ArrowRightIcon,EyeIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../ui/Input/Input";
import { Checkbox } from "../../ui/Controls/Checkbox";
import { Button } from "../../ui/button/Button";



export default function SignupForm(){

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">

            {/* Logo */}

            <span className="text-xs text-gray-400">first time here? let's fix that</span>
            <h1 className="text-3xl font-extrabold">Sign Up</h1>
            <div className="flex items-center gap-2">
                <CustomInput size="large" label="First name"/>
                <CustomInput size="large" label="Last name"/>
            </div>
            <CustomInput size="large" label="Email"/>
            <CustomInput size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <CustomInput size="large" label="Confirm password" icon={<EyeIcon className="w-4 h-4"/>}/>
            <div className="flex items-center gap-2">
            <Checkbox />
            <span className="text-sm text-gray-400">I agree to Privacy policy and Terms of Service.</span>
            </div>
            <div className="flex flex-col items-center gap-4">
            <Button variant="primary" isPill={true} label="Sign Up" iconPosition="right" icon={<ArrowRightIcon />}/>
            <span className="text-xs items-center text-gray-400 flex gap-3">I have an account !<span className="text-primary text-sm">Sign in</span></span>
            </div>
            

        </div>
    )
}