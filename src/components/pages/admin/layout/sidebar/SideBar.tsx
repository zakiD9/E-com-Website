import { HomeIcon, Cog6ToothIcon, UserIcon, Bars3Icon, ClipboardDocumentListIcon, ArchiveBoxArrowDownIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  to:string;
};

export default function Sidebar() {
  const items: SidebarItem[] = [
    { label: "Dashboard", icon: <HomeIcon className="w-6 h-6" />,to: "/admin/dashboard" },
    { label: "Product Management", icon: <ClipboardDocumentListIcon className="w-6 h-6" />,to: "/admin/product-management" },
    { label: "Orders", icon: <ArchiveBoxArrowDownIcon className="w-6 h-6" /> , to: "/admin/orders" },
    { label: "Reviews", icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6" /> ,to: "/admin/reviews" },
    { label: "Customers", icon: <UserIcon className="w-6 h-6" /> ,to:"/admin/customers" },
    { label: "Settings", icon: <Cog6ToothIcon className="w-6 h-6" /> ,to:"/admin/settings" },
  ];

  return (
    <aside className="group relative h-screen py-2 flex flex-col gap-1 w-20 hover:w-72 transition-all duration-300 items-center hover:items-start">
      <div className="hover:w-full h-screen">
        <div className="flex px-2 mb-24 items-center justify-center group-hover:justify-between w-full transition-all duration-300">
          <span className="text-2xl font-semibold hidden group-hover:block transition-opacity duration-200">D9</span>
          <Bars3Icon className="w-6 h-6" />
        </div>

        <div className="hover:w-full flex flex-col gap-1">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 transition ${
                  isActive ? "bg-primary/30" : "hover:bg-gray-200"
                }`
              }
            >
              {item.icon}
              <span className="hidden group-hover:block">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
}
