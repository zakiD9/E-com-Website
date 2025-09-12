import OrderDetailsInfos from "./OrderDetailsInfos"
import OrderProductList from "./OrderProductList"




export default function OrderDetails(){
    
    return(
        <div className="flex flex-col w-4/5 gap-5">
            <OrderDetailsInfos />
            <OrderProductList />
        </div>
    )
}