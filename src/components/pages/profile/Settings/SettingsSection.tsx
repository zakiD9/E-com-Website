import AccountSettingsForm from "./AccountSettingsForm";
import ShippingAddress from "./DefaultShippingAddress";



export default function Settings(){

    return(
        <div className="flex flex-col w-full gap-5">
        <AccountSettingsForm />
        <ShippingAddress />
        </div>
    )
}