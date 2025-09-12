import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeFilled,
} from "@ant-design/icons";


export default function TopBar(){

    return(
         <div className="bg-gray-800 text-white text-sm flex justify-between px-6 py-2">
        <span>Welcome to ShopAll online eCommerce store.</span>
        <div className="flex items-center gap-3">
          <span>Join Us:</span>
          <YoutubeFilled />
          <FacebookFilled />
          <TwitterOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
        </div>
      </div>
    );
}