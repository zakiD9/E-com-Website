import { useState } from "react";
import CustomerReview from "./CustomerReview";
import RatingsDetails from "./RatingsDetails/RatingsDetails";
import MakeReviewModal from "./MakingReview";

const reviews = [
  {
    customerName: "John Doe",
    date: "2025-08-10",
    isVerified: true,
    reviewText:
      "These shoes are surprisingly comfortable and fit perfectly. Wore them all day without any discomfort. Definitely worth the price.",
  },
  {
    customerName: "Emily Carter",
    date: "2025-08-08",
    isVerified: true,
    reviewText:
      "Good quality leather and the waterproof feature actually works. Slightly tight at first, but they loosened up after a day of use.",
  },
  {
    customerName: "Michael Smith",
    date: "2025-08-05",
    isVerified: false,
    reviewText:
      "The design is nice but I found the sole a bit stiff. Might be better after breaking in. Delivery was quick though.",
  },
  {
    customerName: "Sophia Lee",
    date: "2025-08-03",
    isVerified: true,
    reviewText:
      "I’m impressed with the quality for the price. Perfect for casual outings and goes well with most of my outfits.",
  },
  {
    customerName: "David Johnson",
    date: "2025-08-01",
    isVerified: false,
    reviewText:
      "Looks exactly like the pictures. A little heavier than expected but feels durable. Packaging could be better.",
  },
];
const reviewprod = {
    productName: "Wireless Headphones",
    productDescription: "High-quality over-ear headphones with noise cancellation.",
    productImage: "https://images.unsplash.com/photo-1580894908361-6a1f0f847b2b?auto=format&fit=crop&w=400&q=80",
  }


export default function ReviewsSection(){
    const [showAll, setShowAll] = useState(false);
    const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

    return(
        <div className="flex gap-4">
            <div>
            <MakeReviewModal productDescription={reviewprod.productDescription} productImage={reviewprod.productImage} productName={reviewprod.productName} />
            <RatingsDetails />
            </div>
            
            <div className="flex flex-col">
                {displayedReviews.map((review)=>(<CustomerReview {...review}/>))}
                {reviews.length > 3 && (
        <button
          className="text-blue-600 font-medium text-sm"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show less" : "Show more..."}
        </button>
      )}
            </div>
        </div>
    )
}