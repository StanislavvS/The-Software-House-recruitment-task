import React, { useMemo } from "react";

export const useProductCard = () => {
  const convertRatingToRatingStar = (rating: number) => {
    const fullfilledStars = new Array(5).fill(0);

    return useMemo(() => {
      return fullfilledStars.map((_, index) => {
        console.log("dupa", rating, index);
        return index < rating ? 1 : 0;
      });
    }, [rating]);
  };

  return { convertRatingToRatingStar };
};
