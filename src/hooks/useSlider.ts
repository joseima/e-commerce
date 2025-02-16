import { useState } from "react";

export const useSlider = (totalItems: number, itemsPerPage: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? totalItems - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  return { currentIndex, next, prev };
};
