import { Button, Dropdown } from "antd";
import CategoryNavbar from "../CategoriesNavbar/CategoryNavbar";


export default function BottomBar(){

    
    return(
        <div className="bg-white border-t border-b border-gray-200 flex justify-between items-center px-6 py-2 text-gray-700">
        <CategoryNavbar />
        <button className="text-sm">Support</button>
      </div>
    )
}