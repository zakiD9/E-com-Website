import Filtering from "./Filtering";
import OrdersHistoryTable from "./OrderHistoryTable";


export default function OrderHistory(){

    return(
        <div className="flex flex-col w-full gap-5 h-screen">
            <span className="text-lg font-semibold mb-5">Order History</span>
            <div className="justify-end flex">
                <Filtering
  options={[
    { label: "Status", value: "status" },
    { label: "Date", value: "date" },
    { label: "Amount", value: "amount" },
  ]}
  defaultValue="status"
  onChange={(val) => console.log("Selected:", val)}
  onFilterClick={() => console.log("Filter button clicked")}
  showFilterButton={true}
/>
            </div>
            
        <OrdersHistoryTable />
        </div>
    )
}