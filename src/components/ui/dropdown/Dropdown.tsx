import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { CustomDropdownProps } from "./Dropdown.types";

export default function CustomDropdown({
  menuItems,
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
