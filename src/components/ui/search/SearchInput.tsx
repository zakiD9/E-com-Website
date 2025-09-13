import React from "react";
import { Input, Button } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  showAddButton?: boolean;
  onAdd?: () => void;
  size?: "small" | "middle" | "large";
  className?: string;
  pill?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  showAddButton = false,
  onAdd,
  size = "middle",
  className = "",
  pill = false,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        suffix={<SearchOutlined />}
        onPressEnter={() => onSearch && onSearch(value)}
        size={size}
        className={pill ? "rounded-full" : ""}
      />
      {showAddButton && (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
          size={size}
          className={pill ? "rounded-full px-4" : ""}
        />
      )}
    </div>
  );
};
