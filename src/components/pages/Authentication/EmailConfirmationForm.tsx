
import OtpInput from "../../ui/OTPinput";
import { Button } from "../../ui/button/Button";



export default function EmailConfirmationForm(){

    return(
        <div className="shadow-lg w-1/2 rounded-3xl gap-3 py-5 px-10 flex flex-col">
            <h1 className="text-2xl font-extrabold">Verify your email</h1>
            <span className="text-xs text-gray-600">Enter the 6-digit PIN code sent to your email *********ma78@gmail.com.</span>
            <OtpInput />
            <div className="flex justify-center">
                <Button variant="primary" size="md" isPill={true} label="Verify" />
            </div>
            <p className="text-xs text-center font-semibold">Request new code</p>
        </div>
    )
}