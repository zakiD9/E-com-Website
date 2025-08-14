import { Input, Button, Dropdown, Menu } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

interface SearchBarProps {
  categories?: { key: string; label: string }[];
  defaultCategory?: string;
  placeholder?: string;
  onSearch?: (value: string, category: string) => void;
  className?: string;
}

export default function SearchBar({
  categories = [
    { key: "all", label: "All Items" },
    { key: "electronics", label: "Electronics" },
    { key: "fashion", label: "Fashion" },
    { key: "books", label: "Books" },
  ],
  defaultCategory = "All Items",
  placeholder = "Search",
  onSearch,
  className = "",
}:SearchBarProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const menu = (
    <Menu
      onClick={(e) => {
        const category = categories.find((c) => c.key === e.key);
        if (category) setSelectedCategory(category.label);
      }}
      items={categories.map((c) => ({ key: c.key, label: c.label }))}
    />
  );

  return (
    <div className={`flex w-full max-w-3xl ${className}`}>
      <Dropdown className="rounded-r-none bg-primary" overlay={menu} trigger={["click"]}>
        <Button
          icon={<MenuOutlined />}
          className="rounded-l-md border-r-0 bg-gray-400 text-white font-semibold flex items-center gap-2"
        >
          {selectedCategory}
        </Button>
      </Dropdown>
      <Input
        placeholder={placeholder}
        suffix={<SearchOutlined />}
        className="rounded-l-none rounded-r-md"
        onPressEnter={(e) =>
          onSearch?.((e.target as HTMLInputElement).value, selectedCategory)
        }
      />
    </div>
  );
}
