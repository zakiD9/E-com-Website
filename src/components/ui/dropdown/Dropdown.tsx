import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { CustomDropdownProps } from "./Dropdown.types";

export const testFilters = [
  {
    key: "price_low_high",
    label: "Price: Low to High",
    onClick: () => console.log("Filter: Price Low to High"),
  },
  {
    key: "price_high_low",
    label: "Price: High to Low",
    onClick: () => console.log("Filter: Price High to Low"),
  },
  {
    key: "new_arrivals",
    label: "New Arrivals",
    onClick: () => console.log("Filter: New Arrivals"),
  },
  {
    key: "best_sellers",
    label: "Best Sellers",
    onClick: () => console.log("Filter: Best Sellers"),
  },
  {
    key: "discounted",
    label: "On Sale",
    onClick: () => console.log("Filter: On Sale"),
  },
];


export default function CustomDropdown({
  menuItems=testFilters,
  triggerLabel = "Select an option",
}: CustomDropdownProps) {
  const menu = (
    <Menu>
      {menuItems.map(({ key, label, onClick }) => (
        <Menu.Item key={key} onClick={onClick}>
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        {triggerLabel} <DownOutlined />
      </Button>
    </Dropdown>
  );
}
