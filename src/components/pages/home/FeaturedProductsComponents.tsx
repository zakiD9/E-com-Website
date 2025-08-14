import React from "react";
import LargeProductCard from "../products/Cards/LargeProductCard/LargeProductCard"
import MdProductCard from "../products/Cards/MediumProductCard/MdProductCard";

const products = [
  {
    productId: 1,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+1",
    productName: "Stylish Backpack",
    DiscountProductPrice: 35,
    productPrice: 50,
    productRating: 4.5,
    productReviews: 120,
  },
  {
    productId: 2,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+2",
    productName: "Wireless Headphonessss",
    DiscountProductPrice: 70,
    productPrice: 90,
    productRating: 4.7,
    productReviews: 230,
  },
  {
    productId: 3,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+3",
    productName: "Smart Watch",
    DiscountProductPrice: 120,
    productPrice: 150,
    productRating: 4.3,
    productReviews: 80,
  },
  {
    productId: 4,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+4",
    productName: "Leather Wallet",
    DiscountProductPrice: 25,
    productPrice: 40,
    productRating: 4.0,
    productReviews: 60,
  },
  {
    productId: 5,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+5",
    productName: "Running Shoes",
    DiscountProductPrice: 90,
    productPrice: 120,
    productRating: 4.6,
    productReviews: 200,
  },
  {
    productId: 6,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+6",
    productName: "Bluetooth Speaker",
    DiscountProductPrice: 45,
    productPrice: 60,
    productRating: 4.2,
    productReviews: 150,
  },
  {
    productId: 7,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+7",
    productName: "Gaming Mouse",
    DiscountProductPrice: 35,
    productPrice: 50,
    productRating: 4.8,
    productReviews: 500,
  },
  {
    productId: 8,
    productImage: "https://via.placeholder.com/200x200.png?text=Product+8",
    productName: "Office Chair",
    DiscountProductPrice: 140,
    productPrice: 180,
    productRating: 4.4,
    productReviews: 95,
  },
];
const product = {
  name: "Wireless Noise-Cancelling Headphones",
  description: "High-quality over-ear headphones with active noise cancellation and 30 hours of battery life.",
  price: 199.99,
  oldPrice: 249.99,
  rating: 4.6,
  reviewsCount: 342,
  productImage: "https://images.unsplash.com/photo-1580894894512-2f8ac83149be?w=800&q=80"
};




function FeaturedProducts(){

    return(
        <div className="my-10 flex flex-col gap-2">
            <div className="flex justify-between items-center">
            <h1>Featured Products</h1>
            <p>View All Products</p>
            </div>
            <div className="flex gap-12">
            <div className="grid grid-cols-4 grid-rows-2 gap-x-12 gap-y-2">
                {products.map((product)=>{return <MdProductCard key={product.productId} productId={product.productId}
  productImage={product.productImage}
  productName={product.productName}
  DiscountProductPrice={product.DiscountProductPrice}
  productPrice={product.productPrice}
  productRating={product.productRating}
  productReviews={product.productReviews} />})}
            </div>
            <LargeProductCard description={product.description} price={product.price} name={product.name} productImage={product.productImage} rating={product.rating} reviewsCount={product.reviewsCount} oldPrice={product.oldPrice} />
            </div>
        </div>
    )
}

export default React.memo(FeaturedProducts);