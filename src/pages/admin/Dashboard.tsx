import Sidebar from "../../components/pages/admin/layout/sidebar/SideBar";
import ProductManagementSection from "../../components/pages/admin/sections/productmanagement/ProductManagementSection";

export default function AdminDashboard() {

  return (
    <div className="w-full flex">
      <Sidebar />
      <ProductManagementSection />
    </div>
  );
}
