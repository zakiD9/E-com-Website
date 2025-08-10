import React, { useState } from "react";
import { Radio } from "antd";

interface RadioGroupProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <Radio.Group
      onChange={(e) => onChange(e.target.value)}
      value={value}
      disabled={disabled}
    >
      {options.map(({ label, value }) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </Radio.Group>
  );
};
