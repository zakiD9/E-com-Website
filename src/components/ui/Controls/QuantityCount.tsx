import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export interface QuantityButtonProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  value,
  min = 1,
  max = 99,
  onChange,
}) => {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-32">
      <button
        onClick={handleDecrease}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
      >
        <MinusOutlined />
      </button>
      <div className="flex-1 text-center text-base">{value}</div>
      <button
        onClick={handleIncrease}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
      >
        <PlusOutlined />
      </button>
    </div>
  );
};

export default QuantityButton;
