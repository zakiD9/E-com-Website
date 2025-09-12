import OrdersDetails from "./OrdersDetails";
import OrdersTable from "./OrdersTablePreview";
import ProfileCompletionReminder from "./ProfileCompletionReminder";
import SpecialOffers from "./SpecialOffers";

const sampleProducts = [
  { id: 1, image: "/img/p1.png", name: "Product 1", discountPrice: 12.99, price: 15.99 },
  { id: 2, image: "/img/p2.png", name: "Product 2", discountPrice: 10.99, price: 13.99 },
  { id: 3, image: "/img/p3.png", name: "Product 3", discountPrice: 9.99, price: 12.99 },
  { id: 4, image: "/img/p4.png", name: "Product 4", discountPrice: 14.99, price: 18.99 },
  { id: 5, image: "/img/p5.png", name: "Product 5", discountPrice: 11.99, price: 13.99 },
];


export default function Dashboard(){
    
    return(
        <div className="flex w-4/5 flex-col gap-2">
            <span className="text-xl">Hello, Oussama</span>
            <ProfileCompletionReminder />
            <OrdersDetails />
            <OrdersTable />
            <SpecialOffers products={sampleProducts} />
        </div>
    )
}