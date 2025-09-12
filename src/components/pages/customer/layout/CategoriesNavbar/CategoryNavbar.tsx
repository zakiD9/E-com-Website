import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "../../../../ui/button/Button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const { SubMenu } = Menu;

const CategoryNavbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Button
        size="md"
        icon={<ArrowDownIcon />}
        iconPosition="right"
        label="Categories"
        isPill={true}
      />

      {visible && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            background: "#fff",
            width: 280,
          }}
          className="rounded-lg shadow-lg"
        >
          <Menu
            mode="vertical"
            style={{ borderRight: 0 }}
            triggerSubMenuAction="hover"
          >
            <SubMenu
              key="electronics"
              icon={<AppstoreOutlined />}
              title="Electronics"
            >
              <div className="grid grid-cols-2 gap-6 p-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Clothing
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      T-Shirts
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Jeans
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Shoes
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Accessories
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Watches
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Bags
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Hats
                    </li>
                  </ul>
                </div>
              </div>
            </SubMenu>

            <SubMenu key="fashion" title="Fashion">
              <div className="grid grid-cols-2 gap-6 p-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Men
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Shirts
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Jackets
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Women
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Dresses
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Skirts
                    </li>
                  </ul>
                </div>
              </div>
            </SubMenu>

            <SubMenu key="furniture" title="Furniture">
              <div className="grid grid-cols-2 gap-6 p-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Living Room
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Sofas
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Coffee Tables
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Bedroom
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Beds
                    </li>
                    <li className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
                      Wardrobes
                    </li>
                  </ul>
                </div>
              </div>
            </SubMenu>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default CategoryNavbar;
