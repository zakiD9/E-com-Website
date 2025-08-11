import { Button, Dropdown } from "antd";


export default function BottomBar(){

    
    return(
        <div className="bg-white border-t border-gray-200 flex justify-between items-center px-6 py-2 text-gray-700">
        <Dropdown trigger={["click"]}>
          <Button>
            All Categories
          </Button>
        </Dropdown>
        <button className="text-sm">Support</button>
      </div>
    )
}