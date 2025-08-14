import React, { useState } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

interface CustomTextAreaProps {
  placeholder?: string;
  rows?: number;
  buttonText?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder = "Type your message...",
  rows = 4,
  buttonText = "Submit",
  onSubmit,
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(value);
    setValue("");
  };

  return (
    <div className={`flex flex-col gap-3 w-full max-w-md mx-auto ${className}`}>
      <TextArea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default CustomTextArea;
