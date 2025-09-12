import MyPagination from "../../../../ui/Controls/Pagination";
import MdProductCard from "../../products/Cards/MediumProductCard/MdProductCard";
import SearchndFilter from "../../products/Filtering/SearchndFilter";

export const testProducts = [
  {
    productId: 1,
    productImage: "https://picsum.photos/300/200?random=1",
    productName: "Wireless Headphones",
    DiscountProductPrice: 45,
    productPrice: 60,
    productRating: 4.5,
    productReviews: 120,
  },
  {
    productId: 2,
    productImage: "https://picsum.photos/300/200?random=2",
    productName: "Smartwatch Pro",
    productPrice: 120,
    productRating: 4.2,
    productReviews: 85,
  },
  {
    productId: 3,
    productImage: "https://picsum.photos/300/200?random=3",
    productName: "Bluetooth Speaker",
    DiscountProductPrice: 35,
    productPrice: 50,
    productRating: 4.7,
    productReviews: 200,
  },
  {
    productId: 4,
    productImage: "https://picsum.photos/300/200?random=4",
    productName: "Gaming Mouse",
    productPrice: 25,
    productRating: 4.3,
    productReviews: 65,
  },
  {
    productId: 5,
    productImage: "https://picsum.photos/300/200?random=5",
    productName: "Mechanical Keyboard",
    DiscountProductPrice: 80,
    productPrice: 100,
    productRating: 4.8,
    productReviews: 150,
  },
  {
    productId: 6,
    productImage: "https://picsum.photos/300/200?random=6",
    productName: "4K Monitor",
    productPrice: 300,
    productRating: 4.6,
    productReviews: 90,
  },
  {
    productId: 7,
    productImage: "https://picsum.photos/300/200?random=7",
    productName: "Portable Charger",
    DiscountProductPrice: 20,
    productPrice: 30,
    productRating: 4.4,
    productReviews: 110,
  },
  {
    productId: 8,
    productImage: "https://picsum.photos/300/200?random=8",
    productName: "Smart LED Bulb",
    productPrice: 15,
    productRating: 4.1,
    productReviews: 40,
  },
  {
    productId: 9,
    productImage: "https://picsum.photos/300/200?random=9",
    productName: "Fitness Tracker",
    productPrice: 50,
    productRating: 4.0,
    productReviews: 55,
  },
  {
    productId: 10,
    productImage: "https://picsum.photos/300/200?random=10",
    productName: "Drone Camera",
    DiscountProductPrice: 220,
    productPrice: 280,
    productRating: 4.6,
    productReviews: 70,
  },
  {
    productId: 11,
    productImage: "https://picsum.photos/300/200?random=11",
    productName: "Noise Cancelling Earbuds",
    productPrice: 90,
    productRating: 4.4,
    productReviews: 130,
  },
  {
    productId: 12,
    productImage: "https://picsum.photos/300/200?random=12",
    productName: "Wireless Charger",
    productPrice: 25,
    productRating: 4.3,
    productReviews: 75,
  },
  {
    productId: 13,
    productImage: "https://picsum.photos/300/200?random=13",
    productName: "VR Headset",
    DiscountProductPrice: 150,
    productPrice: 200,
    productRating: 4.5,
    productReviews: 95,
  },
  {
    productId: 14,
    productImage: "https://picsum.photos/300/200?random=14",
    productName: "Smart Door Lock",
    productPrice: 180,
    productRating: 4.2,
    productReviews: 60,
  },
];


export default function WishList(){

    return(
        <div className="flex flex-col w-4/5">
            <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-semibold">Wishlist</span>
                <span className="text-md  text-gray-400">Total:</span>
            </div>
            <div className="flex flex-col items-center">
                                <div className="w-full grid grid-cols-4 mb-5 gap-x-3 gap-y-4">
                                {testProducts.map((product)=>(<MdProductCard key={product.productId} {...product} />))}
                                </div>
                                <MyPagination />
                            </div>
        </div>
    )
}