import type React from "react";

export const RatingBar: React.FC<{ percentage: number }> = ({ percentage }) => {
  return (
    <div className="w-24 h-3 bg-gray-200 ">
      <div
        className="h-3 bg-primary"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};