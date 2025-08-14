import React from 'react';
import MyRating from '../../../ui/Controls/Ratings';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface CustomerReviewProps {
  customerName: string;
  date: string;
  isVerified: boolean;
  reviewText: string;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
  customerName="D9 bayna",
  date="12/09/2025 - 12:33PM",
  isVerified=true,
  reviewText="wlh ghir lproduct hada bien 3jbniwlh wlh ghir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbnighir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbniwlh ghir lproduct hada bien 3jbni",
}) => {
  return (
    <div className="max-w-2xl w-full p-6 mx-auto bg-white">
      <div className="mb-4 flex justify-between items-start">
        <div>
        <h3 className="text-lg font-medium text-gray-900">{customerName}</h3>
        <div className='flex gap-2'><MyRating disabled={true}/>
        <span className='text-sm text-gray-500'>{date}</span></div>
        
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
          {isVerified && (
            <span className="inline-flex items-center gap-1 text-sm text-gray-600">
              <CheckCircleIcon className="h-4 w-4" />
              Verified Purchase
            </span>
          )}
        </div>
      </div>
      
      <div className="text-gray-700">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default CustomerReview;