import { Modal } from "antd";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "../../../../ui/button/Button";
import ItemCard from "./ItemSmallCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity:number;
}

interface ShoppingCartPopupProps {
  products: Product[];
}

export default function ShoppingCartPopup({ products }: ShoppingCartPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleShowMore = () => {
    if (visibleCount < products.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <button
        className="text-blue-600 font-medium text-sm flex items-center gap-1"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBagIcon className="w-5 h-5" />
        Wishlist ({products.length})
      </button>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        centered
        width={350}
        className="rounded-xl"
        bodyStyle={{ padding: "1rem" }}
      >
        <h2 className="font-semibold text-lg mb-3">
          Shopping Cart ({products.length})
        </h2>
        <hr className="mb-3"/>
        <div className="flex flex-col gap-3">
          {products.slice(0, visibleCount).map((item) => (
            <ItemCard id={item.id} name={item.name} price={item.price} variant="order" quantity={item.quantity} image={item.image} />
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-right mt-2">
            <button
              onClick={handleShowMore}
              className="text-gray-500 text-xs underline hover:text-gray-700"
            >
              Show more...
            </button>
          </div>
        )}
        <div className="flex flex-col mt-2 gap-2 justify-center">
            <hr />
            <div className="flex justify-between">
            <span className="text-xs">Sub-Total:</span>
            <span className="text-sm font-semibold">$139.00 USD</span>
            </div>
            <Button label="CHECKOUT NOW" iconPosition="right" icon={<ArrowRightIcon />} variant="primary"/>
            <Button label="VIEW LIST" />
        </div>
      </Modal>
    </div>
  );
}
