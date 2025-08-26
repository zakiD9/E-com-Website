import AccountSettingsForm from "./AccountSettingsForm";
import ChangePassword from "./ChangePassword";
import ShippingAddress from "./DefaultShippingAddress";
import DeleteAccount from "./DeleteAccount";



export default function Settings(){

    return(
        <div className="flex flex-col w-4/5 gap-5">
        <AccountSettingsForm />
        <ShippingAddress />
        <ChangePassword />
        <DeleteAccount />
        </div>
    )
}