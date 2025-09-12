import React, { useRef } from "react";
import MdProductCard from "../Cards/MediumProductCard/MdProductCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface RecommendedProductsProps {
  products: {
    productId: number;
    productImage: string;
    productName: string;
    DiscountProductPrice?: number;
    productPrice: number;
    productRating?: number;
    productReviews?: number;
  }[];
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="my-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">You may also like:</h2>
        <a href="/products" className="text-sm text-blue-600 hover:underline">
          View All Products →
        </a>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
         <ChevronLeftIcon className="w-5 h-5"/>
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide py-2 scroll-smooth"
        >
          {products.map((product) => (
            <MdProductCard
              key={product.productId}
              productId={product.productId}
              productImage={product.productImage}
              productName={product.productName}
              DiscountProductPrice={product.DiscountProductPrice}
              productPrice={product.productPrice}
              productRating={product.productRating}
              productReviews={product.productReviews}
            />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronRightIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default RecommendedProducts;
