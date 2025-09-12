import MyRating from "../../../../../ui/Controls/Ratings";
import { RatingBar } from "./ProgressBar";

interface RatingsDetailsProps {
  rating: number;
  reviewsNumber: number;
  ratingsBreakdown: { stars: number; percentage: number }[]
}
export default function RatingsDetails({
  rating=4.2,
  reviewsNumber=210,
  ratingsBreakdown = [
    { stars: 5, percentage: 60 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 5 },
  ],
}: RatingsDetailsProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <MyRating disabled={true}/>
        <span className="font-medium">{rating}</span>
      </div>
      <p className="text-gray-500 text-[13px]">{reviewsNumber} Reviews</p>
      <div className="flex flex-col gap-2">
        {ratingsBreakdown.map((item) => (
          <div key={item.stars} className="flex items-center gap-2">
            <RatingBar percentage={item.percentage} />
            <MyRating disabled={true} value={item.stars}/>
            <span className="text-[12px] text-gray-600">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
