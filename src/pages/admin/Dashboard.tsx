import Sidebar from "../../components/pages/admin/layout/sidebar/SideBar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {

  return (
    <div className="w-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
