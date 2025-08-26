import {
  MinusOutlined,
  PlusOutlined,
  CloseOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import QuantityButton from "../../../ui/Controls/QuantityCount";

interface ShoppingCartCardProps {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  currency?: string;
  disabled?:boolean;
  onIncrease?: (id: string | number) => void;
  onDecrease?: (id: string | number) => void;
  onRemove?: (id: string | number) => void;
}

export default function ShoppingCartCard({
  id,
  name,
  price,
  quantity,
  image,
  currency = "$",
  onIncrease,
  onDecrease,
  disabled=false,
  onRemove,
}: ShoppingCartCardProps) {
  return (
    <div className="grid grid-cols-[250px_1fr_330px_100px_1px_30px] items-center gap-4 w-full py-2 px-1 border-b">

      <div className="flex items-center gap-2">
        <div className="border-2 border-gray-300 rounded flex items-center justify-center w-12 h-12 bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <PictureOutlined className="text-2xl text-gray-400" />
        )}
      </div>

      <div className="font-medium text-gray-700 truncate">{name}</div>
      </div>
      
      <div className="text-center text-gray-700 font-medium">
        {currency}
        {price.toFixed(2)}
      </div>

      <div className="flex justify-center">
        {disabled ? (
          <span className="text-gray-600 font-medium">x{quantity}</span>
        ) : (
          <QuantityButton value={quantity} />
        )}
      </div>

      <div className="text-center text-gray-700 font-semibold">
        {currency}
        {(price * quantity).toFixed(2)}
      </div>

      {!disabled && (
        <button
          className="text-gray-400 hover:text-red-500"
          onClick={() => onRemove?.(id)}
        >
          <CloseOutlined />
        </button>
      )}
    </div>
  );
}
