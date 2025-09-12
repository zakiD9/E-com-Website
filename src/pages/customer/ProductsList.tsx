import Container from "../../components/pages/customer/layout/Container";
import Footer from "../../components/pages/customer/layout/Footer";
import Navbar from "../../components/pages/customer/layout/navbar/NavBar";
import MdProductCard from "../../components/pages/customer/products/Cards/MediumProductCard/MdProductCard";
import Categories from "../../components/pages/customer/products/category/CategoriesComponent";
import SearchndFilter from "../../components/pages/customer/products/Filtering/SearchndFilter";
import MyPagination from "../../components/ui/Controls/Pagination";
import { PriceRange } from "../../components/ui/Range";

const categories = [
  { IsActive: true, name: "Electronics" },
  { IsActive: false, name: "Fashion" },
  { IsActive: true, name: "Books" },
  { IsActive: false, name: "Sports" },
  { IsActive: false, name: "Home & Kitchen" },
  { IsActive: true, name: "Electronics" },
  { IsActive: false, name: "Fashion" },
  { IsActive: true, name: "Books" },
  { IsActive: false, name: "Sports" },
  { IsActive: false, name: "Home & Kitchen" },
  { IsActive: true, name: "Electronics" },
  { IsActive: false, name: "Fashion" },
  { IsActive: true, name: "Books" },
  { IsActive: false, name: "Sports" },
  { IsActive: false, name: "Home & Kitchen" },
];
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
  {
    productId: 15,
    productImage: "https://picsum.photos/300/200?random=15",
    productName: "Electric Kettle",
    productPrice: 40,
    productRating: 4.1,
    productReviews: 45,
  },
  {
    productId: 16,
    productImage: "https://picsum.photos/300/200?random=16",
    productName: "Air Purifier",
    productPrice: 100,
    productRating: 4.3,
    productReviews: 80,
  },
  {
    productId: 17,
    productImage: "https://picsum.photos/300/200?random=17",
    productName: "Laptop Stand",
    productPrice: 35,
    productRating: 4.5,
    productReviews: 125,
  },
  {
    productId: 18,
    productImage: "https://picsum.photos/300/200?random=18",
    productName: "Action Camera",
    DiscountProductPrice: 90,
    productPrice: 120,
    productRating: 4.6,
    productReviews: 140,
  },
  {
    productId: 19,
    productImage: "https://picsum.photos/300/200?random=19",
    productName: "Wireless Keyboard",
    productPrice: 45,
    productRating: 4.2,
    productReviews: 60,
  },
  {
    productId: 20,
    productImage: "https://picsum.photos/300/200?random=20",
    productName: "Coffee Maker",
    productPrice: 85,
    productRating: 4.4,
    productReviews: 75,
  },
  {
    productId: 21,
    productImage: "https://picsum.photos/300/200?random=21",
    productName: "Electric Toothbrush",
    productPrice: 55,
    productRating: 4.3,
    productReviews: 50,
  },
  {
    productId: 22,
    productImage: "https://picsum.photos/300/200?random=22",
    productName: "Robot Vacuum",
    DiscountProductPrice: 180,
    productPrice: 230,
    productRating: 4.6,
    productReviews: 100,
  },
  {
    productId: 23,
    productImage: "https://picsum.photos/300/200?random=23",
    productName: "Portable Projector",
    productPrice: 150,
    productRating: 4.4,
    productReviews: 65,
  },
  {
    productId: 24,
    productImage: "https://picsum.photos/300/200?random=24",
    productName: "Smart Thermostat",
    productPrice: 130,
    productRating: 4.3,
    productReviews: 55,
  },
  {
    productId: 25,
    productImage: "https://picsum.photos/300/200?random=25",
    productName: "LED Desk Lamp",
    productPrice: 20,
    productRating: 4.2,
    productReviews: 85,
  },
  {
    productId: 26,
    productImage: "https://picsum.photos/300/200?random=26",
    productName: "Streaming Stick",
    productPrice: 45,
    productRating: 4.5,
    productReviews: 115,
  },
  {
    productId: 27,
    productImage: "https://picsum.photos/300/200?random=27",
    productName: "Gaming Chair",
    DiscountProductPrice: 180,
    productPrice: 250,
    productRating: 4.7,
    productReviews: 90,
  },
  {
    productId: 28,
    productImage: "https://picsum.photos/300/200?random=28",
    productName: "External Hard Drive",
    productPrice: 75,
    productRating: 4.4,
    productReviews: 100,
  },
  {
    productId: 29,
    productImage: "https://picsum.photos/300/200?random=29",
    productName: "Noise Meter",
    productPrice: 35,
    productRating: 4.1,
    productReviews: 30,
  },
  {
    productId: 30,
    productImage: "https://picsum.photos/300/200?random=30",
    productName: "Solar Power Bank",
    productPrice: 50,
    productRating: 4.3,
    productReviews: 70,
  },
];




export default function ProductsList(){

    return(
        <>
        <Navbar />
        <Container>
            <div className="flex my-5 gap-1">
                <div className="w-2/12 flex flex-col min-h-screen">
                    <Categories categories={categories} />
                    <PriceRange />
                </div>
                <div className="w-10/12 flex flex-col items-center">
                    <SearchndFilter />
                    <div className="grid grid-cols-5 gap-x-6 gap-y-1 py-4">
                    {testProducts.map((product)=>(<MdProductCard key={product.productId} {...product} />))}
                    </div>
                    <MyPagination />
                </div>
            </div>
        </Container>
        <Footer />
        </>
    )
}