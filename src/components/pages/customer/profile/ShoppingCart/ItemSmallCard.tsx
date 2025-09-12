


import { XMarkIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";

interface ItemCardProps {
  id: number ;
  name: string;
  price: number;
  image?: string;
  quantity?: number; 
  currency?: string; 
  variant: "order" | "wishlist";
  onRemove?: (id: number) => void; 
}

export default function ItemCard({
  id,
  name,
  price,
  image,
  quantity,
  currency = "$",
  variant,
  onRemove,
}: ItemCardProps) {
  if (variant === "order") {
    return (
      <div key={id} className="flex items-center gap-3">
        <div className="w-12 h-12 border rounded flex items-center justify-center bg-gray-50">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <PhotoIcon className="w-6 h-6 text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 truncate">{name}</p>
          <p className="text-xs text-gray-500">
            {quantity} ×{" "}
            <span className="font-semibold text-gray-700">
              {currency}
              {price}
            </span>
          </p>
        </div>
      </div>
    );
  }

  if (variant === "wishlist") {
    return (
      <div
        key={id}
        className="flex items-center justify-between border rounded-md p-2"
      >
        <div className="flex items-center gap-3">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-md object-cover"
            />
          ) : (
            <PhotoIcon className="w-6 h-6 text-gray-400" />
          )}
          <div>
            <p className="text-sm">{name}</p>
            <p className="text-blue-600 font-semibold text-sm">
              {currency}
              {price}
            </p>
          </div>
        </div>
        {onRemove && (
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => onRemove(id)}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }

  return null;
}
