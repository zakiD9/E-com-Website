import Sidebar from "../../components/pages/admin/layout/sidebar/SideBar";
import OrdersSection from "../../components/pages/admin/sections/orders/OrdersSection";

export default function AdminDashboard() {

  return (
    <div className="w-full flex">
      <Sidebar />
      <OrdersSection />
    </div>
  );
}
