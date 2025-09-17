import Sidebar from "../../components/pages/admin/layout/sidebar/SideBar";
import ReviewsSection from "../../components/pages/admin/sections/reviews/ReviewsSection";

export default function AdminDashboard() {

  return (
    <div className="w-full flex">
      <Sidebar />
      <ReviewsSection />
    </div>
  );
}
