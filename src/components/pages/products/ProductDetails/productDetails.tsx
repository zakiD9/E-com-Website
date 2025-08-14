import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MyRating from "../../../ui/Controls/Ratings";
import WishlistButton from "../Cards/AddToWishList";
import CustomDropdown from "../../../ui/dropdown/Dropdown";
import { Button } from "../../../ui/button/Button";
import QuantityButton from "../../../ui/Controls/QuantityCount";

export interface ProductImage {
  src: string;
  alt?: string;
}
interface ProductOption {
  label: string;
  values: string[];
}

export interface ProductDetailsProps {
  title: string;
  rating: number;
  reviews: number;
  sold: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  inStock?: boolean;
  images: ProductImage[];
  options?: ProductOption[];
  onAddToCart?: (qty: number) => void;
  onBuyNow?: (qty: number) => void;
}

function clamp(min: number, val: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export default function ProductDetailsCard({
  title,
  rating,
  reviews,
  sold,
  price,
  oldPrice,
  discount,
  inStock = true,
  images,
  options,
  onAddToCart,
  onBuyNow,
}: ProductDetailsProps) {
  const [qty, setQty] = useState<number>(1);
  const [current, setCurrent] = useState<number>(0);

  const hasImages = images && images.length > 0;
  const safeIndex = clamp(0, current, Math.max(0, images.length - 1));

  return (
    <div className="w-full flex gap-6 my-10">
      <div className="w-full flex gap-2">
        {images.length > 1 && (
          <div className="mt-3 flex flex-col gap-2">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                onClick={() => setCurrent(i)}
                className={`relative aspect-square w-20 rounded-xl overflow-hidden border transition ${
                  i === safeIndex ? "border-gray-900" : "border-transparent hover:border-gray-300"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img.src} alt={img.alt ?? `${title} ${i + 1}`} className="w-full h-full object-cover" />
                {i === safeIndex && (
                  <span className="absolute inset-0 ring-2 ring-gray-900 rounded-xl pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        )}
        <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          {hasImages ? (
            <img
              key={images[safeIndex].src}
              src={images[safeIndex].src}
              alt={images[safeIndex].alt ?? title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No images</div>
          )}

          {images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                onClick={() => setCurrent((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                aria-label="Next image"
                onClick={() => setCurrent((i) => (i + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <MyRating disabled={true} />
            <span className="text-sm">{rating.toFixed(1)}</span>
            <span className="text-sm">{`(${reviews} Reviews)`}</span>
            <span className="text-sm">| {sold}+ Sold</span>
          </div>

          <button className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
             Add to Wishlist <WishlistButton size={20} variant="default"/>
          </button>
        </div>
        <h1 className="text-xl font-semibold leading-snug">{title}</h1>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium ${inStock ? "text-green-600" : "text-red-500"}`}>
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
          {oldPrice !== undefined && (
            <span className="text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
          )}
          {discount !== undefined && (
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-semibold">{discount}% OFF</span>
          )}
        </div>
        <hr className="border-t-2 border-gray-400"/>
        {options && options.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {options.map((opt, idx) => (
      <CustomDropdown key={idx} triggerLabel={opt.label} menuItems={opt.values}/>
    ))}
  </div>
)}

        <div className="flex items-center gap-3 mt-5">
          <QuantityButton value={qty} min={1} max={10} onChange={setQty}/>

          <Button variant="primary" label="ADD TO CART"/>
          <Button label="BUY NOW"/>
        </div>
      </div>
    </div>
  );
}
