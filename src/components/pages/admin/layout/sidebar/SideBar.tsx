import { HomeIcon, Cog6ToothIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Section from "./section";

type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
};

export default function Sidebar() {
  const items: SidebarItem[] = [
    { label: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, selected: true },
    { label: "Settings", icon: <Cog6ToothIcon className="w-6 h-6" /> },
    { label: "Profile", icon: <UserIcon className="w-6 h-6" /> },
  ];

  return (
    <aside
      className="
        group relative h-screen bg-gray-100 py-2 flex flex-col gap-1
        w-20 hover:w-72 transition-all duration-300 items-center hover:items-start
      "
    >
    <div className="hover:w-full h-screen">
        <div
  className="
    flex px-2 mb-24 items-center
    justify-center group-hover:justify-between
    w-full transition-all duration-300
  "
>
  <span className="text-2xl font-semibold hidden group-hover:block transition-opacity duration-200">
    D9
  </span>
  <Bars3Icon className="w-6 h-6" />
</div>
        <div className="hover:w-full flex flex-col gap-1">
            {items.map((item, index) => (
        <Section
          key={index}
          icon={item.icon}
          label={item.label}
          selected={item.selected}

        />
      ))}
        </div>
    </div>
      
      
    </aside>
  );
}
