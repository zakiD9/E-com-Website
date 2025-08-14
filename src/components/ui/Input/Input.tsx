import  { useState} from "react";
import { Input } from "antd";
import type CustomInputProps from "./Input.types";

export default function CustomInput({
  label,
  disabled = false,
  icon,
  placeholder = "Enter text here",
  size = "middle"
}: CustomInputProps) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label className="block mb-1 text-sm text-gray-600">{label}</label>
      <Input
      size={size}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        suffix={icon}  
        disabled={disabled}
        className="flex-1 flex"
      />
    </div>
  );
}
