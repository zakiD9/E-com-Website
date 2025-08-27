import { Card } from "antd";
import { PhotoIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../ui/button/Button";

interface OrderItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  shipping?: number;
  currency?: string;
  onPlaceOrder?: () => void;
}

export default function OrderSummary({
  items,
  shipping = 0,
  currency = "$",
  onPlaceOrder,
}: OrderSummaryProps) {
  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subTotal + shipping;

  return (
    <Card className="w-3/4 rounded-md">
      <h3 className="font-semibold text-gray-800 mb-4">Order Summary</h3>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-12 h-12 border rounded flex items-center justify-center bg-gray-50">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <PhotoIcon className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-500">
                {item.quantity} ×{" "}
                <span className="font-semibold text-gray-700">
                  {currency}
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 text-sm space-y-1">
        <div className="flex justify-between text-gray-600">
          <span>Sub-Total:</span>
          <span>
            {currency}
            {subTotal}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span>
            {currency}
            {shipping}
          </span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-gray-800 text-base mt-4">
          <span>Total:</span>
          <span>
            {currency}
            {total}
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-1">
      <Button variant="primary" onClick={onPlaceOrder} iconPosition="right" label="Place Order" icon={<ArrowRightIcon/>}/>
      </div>
    </Card>
  );
}
