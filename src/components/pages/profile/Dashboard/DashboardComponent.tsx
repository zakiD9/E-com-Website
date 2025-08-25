import OrdersDetails from "./OrdersDetails";
import OrdersTable from "./OrdersTablePreview";
import ProfileCompletionReminder from "./ProfileCompletionReminder";
import SpecialOffers from "./SpecialOffers";



export default function Dashboard(){
    
    return(
        <div className="flex w-3/5 flex-col gap-2">
            <span className="text-xl">Hello, Oussama</span>
            <ProfileCompletionReminder />
            <OrdersDetails />
            <OrdersTable />
            <SpecialOffers />
        </div>
    )
}