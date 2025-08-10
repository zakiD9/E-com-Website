import React from "react";
import { Checkbox as AntCheckbox } from "antd";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
}) => {
  return (
    <AntCheckbox
      id={id}
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange(e.target.checked)}
    >
      {label}
    </AntCheckbox>
  );
};
