import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ProductManagementSection from "../../components/pages/admin/sections/productmanagement/ProductManagementSection";

export default function AdminDashboard() {
  const item = {name:"total orders",
    numb:20,
    icon:<ShoppingBagIcon className="w-10 h-10"/>
   }

  return (
    <div className="p-4 w-full">
      <ProductManagementSection />
    </div>
  );
}
