import React, { useState } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;
interface CustomTextAreaProps {
  placeholder?: string;
  rows?: number;
  buttonText?: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder = "Type your message...",
  rows = 4,
  buttonText = "Submit",
  onSubmit,
  onChange,
  className = "",
  label,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    if (onChange) onChange(e.target.value);
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(value);
    setValue("");
  };

  return (
    <div className={`flex flex-col flex-1 gap-2 w-full max-w-md mx-auto ${className}`}>
      {label && <span className="font-medium text-sm text-gray-700">{label}</span>}
      <div className="flex gap-3">
        <TextArea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
        />
        {onSubmit && (
          <Button type="primary" onClick={handleSubmit}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomTextArea;
