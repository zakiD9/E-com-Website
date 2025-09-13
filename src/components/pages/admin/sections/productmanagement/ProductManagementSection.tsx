import { CheckIcon, FunnelIcon, PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../ui/button/Button";
import ReusableTabs from "../../layout/Tabs";
import { SearchBar } from "../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../ui/table.tsx/Table";
import EditButton from "../../../../ui/table.tsx/Edit";
import Status from "../../../../ui/table.tsx/Status";
import AvatarItem from "../../../../ui/table.tsx/AvatarItem";
import DeleteButton from "../../../../ui/table.tsx/Delete";
import AllProductSection from "./AllProductsSection";

const tabItems = [
    {
      key: "1",
      label: "All Products",
      children: <div>📊 This is the Overview tab content</div>,
    },
    {
      key: "2",
      label: "Categories",
      children: <div>👤 This is the Users tab content</div>,
    },
    {
      key: "3",
      label: "Brands",
      children: <div>⚙️ This is the Settings tab content</div>,
    },
  ];




export default function ProductManagementSection(){

    return(
        <div className="flex flex-col gap-5 mx-5 my-5">
            <ReusableTabs items={tabItems}/>
            <AllProductSection />
        </div>
    )
}