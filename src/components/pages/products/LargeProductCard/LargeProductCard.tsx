import { useState } from "react";
import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import MyRating from "../../../ui/Controls/Ratings";
import { IconButton } from "../../../ui/button/IconButton";
import { Button } from "../../../ui/button/Button";
import WishlistButton from "../AddToWishList";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number; 
  reviewsCount: number;
  productImage:string;
}

export default function LargeProductCard({
  name="product 1",
  description="this product is very good",
  price=20,
  oldPrice=25,
  rating=5,
  reviewsCount=15
  ,productImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRaNUD8fzxaV1Alela2SiKVJhxL88M4AJ4g&s"
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border border-border rounded-lg cursor-pointer overflow-hidden shadow-sm w-100 bg-white transition hover:bg-cards"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
         <img
         alt={name}
         src={productImage}
         className="w-full h-full object-cover"
         />
        </div>

      <div className="p-4">
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MyRating  value={rating} disabled={true}/>
          <span className="text-sm">({reviewsCount.toLocaleString()})</span>
        </div>
        <h3 className="font-semibold mt-1 text-gray-900 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-lg font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center px-2 gap-2 mt-3">
          <IconButton icon={<EyeIcon className="w-6 h-6" />}/>
          <Button iconPosition="left" variant="primary" icon={<ShoppingCartIcon className="w-5 h-5" />} label="ADD TO CART"/>
          <IconButton icon={<WishlistButton variant="default"/>}/>
        </div>
      </div>
    </div>
  );
}
