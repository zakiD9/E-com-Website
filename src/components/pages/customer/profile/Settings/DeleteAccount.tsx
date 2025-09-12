import { Button } from "../../../../ui/button/Button";
import CustomInput from "../../../../ui/Input/Input";



export default function DeleteAccount(){

    return(
        <div className="w-4/5 flex flex-col">
                            <span className="text-lg font-semibold">Delete Account</span>
                            <hr className="border-t-2 mt-2"/>
                            <div className="flex w-full gap-5 mt-5">
                                <div className="flex gap-3 w-3/6">
                                    <CustomInput size="large" label="Current Password"/>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-start mt-4">
                                <Button variant="primary" label="Delete Account"/>
                            </div>
                        </div>
    )
}