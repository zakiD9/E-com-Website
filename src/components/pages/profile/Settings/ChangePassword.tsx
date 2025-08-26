
import { Button } from "../../../ui/button/Button";
import CustomInput from "../../../ui/Input/Input";



export default function ChangePassword(){

    return(
        <div className="w-4/5 flex flex-col">
                            <span className="text-lg font-semibold">Change Password</span>
                            <hr className="border-t-2 mt-2"/>
                            <div className="flex flex-col w-full gap-5 mt-5">
                                <div className="flex gap-3 w-full">
                                    <CustomInput size="large" label="Current Password"/>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <CustomInput size="large" label="New Password"/>
                                    <CustomInput size="large" label="Confirm Password"/>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-end mt-4">
                                <Button variant="primary" label="Change Password"/>
                            </div>
                        </div>
    )
}