import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/navbar/NavBar"
import ProductDetailsCard from "../components/pages/products/Cards/ProductDetails/productDetails"
import ProductDetailsCollapse from "../components/pages/products/Cards/ProductDetails/ProductDetailsCollapse";
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



export default function ProductDetails(){

    return(
        <>
        <Navbar />
        <Container>
         <ProductDetailsCard {...product} />
         
         <ProductDetailsCollapse />

            <div>

            </div>
        </Container>
        <Footer />
        </>
    )
}