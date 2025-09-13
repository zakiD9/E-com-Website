import { HomeIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import Section from "./section";

type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
};

export default function Sidebar() {
  const items: SidebarItem[] = [
    { label: "Dashboard", icon: <HomeIcon className="w-5 h-5" />, selected: true },
    { label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
    { label: "Profile", icon: <UserIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-56 h-screen bg-gray-100 p-4 flex flex-col gap-2">
      {items.map((item, index) => (
        <Section
          key={index}
          icon={item.icon}
          label={item.label}
          selected={item.selected}
        />
      ))}
    </aside>
  );
}
