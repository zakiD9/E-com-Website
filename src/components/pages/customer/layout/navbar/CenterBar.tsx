import SearchBar from "../../../../ui/search/NavbarSearchInput";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";


export default function CenterBar(){
    return(
        <div className="bg-gray-800 text-white flex items-center justify-between px-6 py-4">
        <div className="w-20 h-10 bg-gray-300 rounded flex items-center justify-center text-gray-800 font-bold">
          LOGO
        </div>
        <SearchBar />
        <div className="flex items-center gap-4 text-white text-lg">
          <ShoppingCartOutlined />
          <HeartOutlined />
          <UserOutlined />
        </div>
      </div>
    )
}