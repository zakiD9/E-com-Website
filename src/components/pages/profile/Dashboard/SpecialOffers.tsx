import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import MdProductCard from "../../products/Cards/MediumProductCard/MdProductCard";

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

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <MdProductCard
                productId={p.id}
                productImage={p.image}
                productName={p.name}
                DiscountProductPrice={p.discountPrice}
                productPrice={p.price}
                productRating={p.rating}
                productReviews={p.reviews}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <button className="custom-prev absolute -left-10 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button className="custom-next absolute -right-10 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
