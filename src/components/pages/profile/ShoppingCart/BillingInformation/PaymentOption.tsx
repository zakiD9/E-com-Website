import { useState } from "react";
import { Card } from "antd";
import {
  CreditCardIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

type PaymentOption = "credit_card" | "cash_on_delivery";

interface PaymentSelectorProps {
  value?: PaymentOption; 
  onChange?: (method: PaymentOption) => void; 
}

export default function PaymentOption({
  value,
  onChange,
}: PaymentSelectorProps) {
  const [selected, setSelected] = useState<PaymentOption>(value || "credit_card");

  const handleSelect = (method: PaymentOption) => {
    setSelected(method);
    onChange?.(method);
  };

  const options: { key: PaymentOption; label: string; icon: JSX.Element }[] = [
    {
      key: "credit_card",
      label: "Credit Card",
      icon: <CreditCardIcon className="w-8 h-8 text-gray-600" />,
    },
    {
      key: "cash_on_delivery",
      label: "Cash on Delivery",
      icon: <BanknotesIcon className="w-8 h-8 text-gray-600" />,
    },
  ];

  return (
    <div className="w-full flex flex-col ">
        <span className="font-semibold text-lg">Payment Option</span>
        <hr className="border-t-2"/>
      <div className="grid grid-cols-2 gap-4 mt-3">
        {options.map((opt) => (
          <Card
            key={opt.key}
            onClick={() => handleSelect(opt.key)}
            className={`flex flex-col items-center justify-center cursor-pointer transition border-b-2  ${
              selected === opt.key
                ? "border-blue-500 shadow-md"
                : "border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center">
                {opt.icon}
            <span
              className={`font-medium ${
                selected === opt.key ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {opt.label}
            </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
