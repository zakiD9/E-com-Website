import { Input } from "antd";
import type CustomInputProps from "./Input.types";

export default function CustomInput({
  label,
  disabled = false,
  icon,
  placeholder = "Enter text here",
  size = "middle",
  value,
  onChange
}: CustomInputProps) {
  return (
    <div>
      <label className="block mb-1 text-sm text-gray-600">{label}</label>
      <Input
        size={size}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        suffix={icon}  
        disabled={disabled}
        className="flex-1 flex"
      />
    </div>
  );
}
