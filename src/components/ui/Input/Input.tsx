import React, { useState, type ReactNode } from "react";
import { Input } from "antd";
import { EyeOutlined } from '@ant-design/icons';

interface CustomInputProps {
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
}

export default function CustomInput({
  label,
  disabled = false,
  icon,
  placeholder = "Enter text here",
}: CustomInputProps) {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: 300 }}>
      <label className="block mb-1 text-sm text-gray-600">{label}</label>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        suffix={icon}  
        disabled={disabled}
      />
    </div>
  );
}
