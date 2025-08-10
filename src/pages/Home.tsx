import MdProductCard from "../components/pages/products/MediumProductCard/MdProductCard";
import SmProductCard from "../components/pages/products/SmallProductCard/SmProductCard";


export default function Home(){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary ">
    <MdProductCard productId={1} productImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuANgsTrQGzCHaJdWoSJUPJreo6ODSmK_Eag&s" DiscountProductPrice={10.12} productName="Productthebiggestoneever" productPrice={29.99} />
    </div>
);
}