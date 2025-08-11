import Footer from "../components/layout/Footer";
import CustomerReview from "../components/pages/products/Reviews/CustomerReview";
import StarRating from "../components/pages/products/Reviews/RatingsDetails/RatingsDetails";


export default function Home(){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary ">
    <StarRating />
    </div>
);
}