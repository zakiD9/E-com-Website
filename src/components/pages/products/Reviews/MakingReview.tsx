import { useState } from "react";
import CustomModal from "../../../ui/Modal";
import MyRating from "../../../ui/Controls/Ratings";
import CustomTextArea from "../../../ui/TextArea";

interface MakeReviewModalProps {
  productName: string;
  productDescription: string;
  productImage: string;
  initialRating?: number;
  onSubmit?: (rating: number, review: string) => void;
}


export default function MakeReviewModal({
  productName,
  productDescription,
  productImage,
  initialRating = 0,
  onSubmit,
}: MakeReviewModalProps){
 const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number>(initialRating);
  const [review, setReview] = useState<string>("");
    return(
         <div>
            <button
                  className="text-blue-600 font-medium text-sm"
                  onClick={() => setIsOpen(true)}
                  >
                  Write your review
                  </button>
      <CustomModal
        visible={isOpen}
        title="Rate & Review"
        content={<div className="flex gap-4">
                    <div className="w-[280px] h-[280px]">
                        <img alt={productName} src={productImage} className="object-cover w-full h-full" />
                    </div>
                     <div className="flex flex-col gap-3 flex-1">
              <span className="font-bold text-lg">{productName}</span>
              <span className="text-gray-600 text-sm">{productDescription}</span>

              <hr className="my-2" />

              <span className="font-semibold text-lg">Rate this product</span>
               <div className="flex justify-start">
                <MyRating value={rating} onChange={setRating} />
               </div>

              <span className="font-semibold mt-2 text-lg">Share your opinion</span>
              <div className="relative w-full mb-5">
                <CustomTextArea
                placeholder="Write your review..."
                onChange={(e) => setReview(e.target.value)}
                maxLength={500}
                showCharacterCount
              />
                <span className="text-xs mt-1 absolute right-28 text-gray-500">Min. 30 characters</span>
              </div>
              
              <hr />
            </div>
                </div>
        }
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("Confirmed!");
          setIsOpen(false);
        }}
      />
    </div>
    )
}