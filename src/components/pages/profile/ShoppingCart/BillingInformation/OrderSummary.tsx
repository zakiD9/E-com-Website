import { Card } from "antd";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../ui/button/Button";
import ItemCard from "../ItemSmallCard";

interface OrderItem {
  id: number;
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
          <ItemCard id={item.id} name={item.name} price={item.price} variant="order" image={item.image} quantity={item.quantity} />
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
