import {
  Squares2X2Icon,
  ClockIcon,
  ShoppingCartIcon,
  HeartIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";

type MenuItem = {
  label: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Squares2X2Icon, active: true },
  { label: "Order History", icon: ClockIcon },
  { label: "Shopping Cart", icon: ShoppingCartIcon },
  { label: "Wishlist", icon: HeartIcon },
  { label: "Settings", icon: Cog6ToothIcon },
  { label: "Log-Out", icon: ArrowRightOnRectangleIcon },
];

export default function DashboardSidebar() {
  return (
    <div className="w-1/5 bg-white border py-2 shadow-sm">
      <ul className="flex flex-col">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer
              ${item.active ? "bg-gray-200 font-medium " : "hover:bg-gray-100"}
            `}
          >
            <item.icon className={`w-5 h-5 text-gray-600 ${item.active ? "text-white " : ""}`} />
            <span className={`text-gray-700 ${item.active ? "text-white " : ""}`}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
