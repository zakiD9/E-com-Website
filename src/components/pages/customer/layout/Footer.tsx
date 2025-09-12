import {
  YoutubeFilled,
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-6">
          <div className="w-20 h-10 bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xs">LOGO</span>
          </div>
        </div>
        <hr className="border-gray-600 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">All Products</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Gift Ideas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Join Us</h4>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-white"><YoutubeFilled /></a>
              <a href="#" className="hover:text-white"><FacebookFilled /></a>
              <a href="#" className="hover:text-white"><TwitterOutlined /></a>
              <a href="#" className="hover:text-white"><InstagramOutlined /></a>
              <a href="#" className="hover:text-white"><LinkedinOutlined /></a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 mt-6 mb-4" />
        <p className="justify-starttext-xs text-gray-400">
          CompanyName © 2025, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
