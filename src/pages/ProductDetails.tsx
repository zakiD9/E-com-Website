import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/navbar/NavBar"
import ProductDetailsCard from "../components/pages/products/ProductDetails/productDetails"
import ProductDetailsCollapse from "../components/pages/products/ProductDetails/ProductDetailsCollapse";
import RecommendedProducts from "../components/pages/products/ProductDetails/YouMayAlsoLike";
import BorderlessCollapse from "../components/ui/Collapse";

const product = {
  title:"MAEDIF Shoes for Men Leather Sneaker Waterproof Casual Comfortable Men's Sneaker Lace Up Footwear Vulcanized Man Shoe",
        rating:3.1,
        reviews:1024,
        sold:4000,
        price:12.99,
        oldPrice:16.99,
        discount:20,
        inStock:false,
        images:[
    { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1080&q=80&auto=format&fit=crop", alt: "Sneaker 1" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1080&q=80&auto=format&fit=crop", alt: "Sneaker 2" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1080&q=80&auto=format&fit=crop", alt: "Sneaker 3" },
    { src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=1080&q=80&auto=format&fit=crop", alt: "Sneaker 4" },
  ],
        options:[
        {
          key: "price_low_high",
          label: "Price: Low to High",
          onClick: () => console.log("Filter: Price Low to High"),
        },
        {
          key: "price_high_low",
          label: "Price: High to Low",
          onClick: () => console.log("Filter: Price High to Low"),
        },
      ]
};
const recommendedProducts = [
  {
    productId: 1,
    productImage: "/images/products/headphones.jpg",
    productName: "Wireless Over-Ear Headphones",
    DiscountProductPrice: 85,
    productPrice: 120,
    productRating: 4.5,
    productReviews: 320
  },
  {
    productId: 2,
    productImage: "/images/products/smartwatch.jpg",
    productName: "Smart Fitness Watch",
    DiscountProductPrice: 90,
    productPrice: 130,
    productRating: 4.2,
    productReviews: 210
  },
  {
    productId: 3,
    productImage: "/images/products/laptop.jpg",
    productName: "Lightweight Laptop 14\"",
    productPrice: 750,
    productRating: 4.7,
    productReviews: 145
  },
  {
    productId: 4,
    productImage: "/images/products/bluetooth_speaker.jpg",
    productName: "Portable Bluetooth Speaker",
    DiscountProductPrice: 45,
    productPrice: 60,
    productRating: 4.4,
    productReviews: 89
  },
  {
    productId: 5,
    productImage: "/images/products/camera.jpg",
    productName: "Digital Camera 20MP",
    productPrice: 300,
    productRating: 4.3,
    productReviews: 54
  },
  {
    productId: 6,
    productImage: "/images/products/keyboard.jpg",
    productName: "Mechanical Gaming Keyboard",
    DiscountProductPrice: 70,
    productPrice: 95,
    productRating: 4.6,
    productReviews: 140
  },
  {
    productId: 7,
    productImage: "/images/products/mouse.jpg",
    productName: "Wireless Ergonomic Mouse",
    productPrice: 40,
    productRating: 4.2,
    productReviews: 100
  },
  {
    productId: 8,
    productImage: "/images/products/tablet.jpg",
    productName: "10\" Android Tablet",
    DiscountProductPrice: 150,
    productPrice: 200,
    productRating: 4.1,
    productReviews: 75
  },
  {
    productId: 9,
    productImage: "/images/products/headset.jpg",
    productName: "Gaming Headset with Mic",
    productPrice: 55,
    productRating: 4.3,
    productReviews: 60
  },
  {
    productId: 10,
    productImage: "/images/products/speaker_stand.jpg",
    productName: "Adjustable Speaker Stand",
    productPrice: 35,
    productRating: 4.0,
    productReviews: 40
  }
];



export default function ProductDetails(){

    return(
        <>
        <Navbar />
        <Container>
         <ProductDetailsCard {...product} />
         
         <ProductDetailsCollapse />

         <RecommendedProducts products={recommendedProducts}/>
        </Container>
        <Footer />
        </>
    )
}