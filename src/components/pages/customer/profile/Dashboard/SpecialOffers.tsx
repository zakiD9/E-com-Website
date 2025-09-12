import { Carousel } from "antd";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import MdProductCard from "../../products/Cards/MediumProductCard/MdProductCard";
import { useRef } from "react";

type Product = {
  id: number;
  image: string;
  name: string;
  discountPrice?: number;
  price: number;
  rating?: number;
  reviews?: number;
};

interface SpecialOffersProps {
  products: Product[];
}

export default function SpecialOffers({ products }: SpecialOffersProps) {
  const carouselRef = useRef<any>(null);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Special offers for you !!</h2>
        <a
          href="/products"
          className="text-sm text-blue-600 hover:underline flex items-center"
        >
          View All Products →
        </a>
      </div>

      <div className="relative">
        <Carousel
          ref={carouselRef}
          dots={true}
          arrows={false}
          infinite={false}
          slidesToShow={4}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {products.map((p) => (
            <div key={p.id} className="flex justify-center">
              <MdProductCard
                productId={p.id}
                productImage={p.image}
                productName={p.name}
                DiscountProductPrice={p.discountPrice}
                productPrice={p.price}
                productRating={p.rating}
                productReviews={p.reviews}
              />
            </div>
          ))}
        </Carousel>
        <button
          onClick={() => carouselRef.current?.prev()}
          className="absolute -left-1 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => carouselRef.current?.next()}
          className="absolute -right-1 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
