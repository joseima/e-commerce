import { useRef } from "react";
import { Product } from "../../models/Product";
import { ProductCard } from "../productCard/ProductCard";

import LeftArrow from "../../assets/arrow.svg";

interface ProductsSliderProps {
  products: Product[];
}

export const ProductsSlider: React.FC<ProductsSliderProps> = ({ products }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="slider overflow-hidden relative mb-20">
      <button
        onClick={scrollLeft}
        className="absolute items-center justify-center flex  w-12 h-12 left-0 top-1/3  z-10 border-gray-900  hover:bg-gray-300  bg-white p-2 rounded-full shadow-md"
      >
        <img src={LeftArrow} className=" w-4 " alt="Next" />
      </button>

      <div
        ref={sliderRef}
        className="overflow-x-hidden whitespace-nowrap scrollbar-hide pb-4 overflow-hidden px-10"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="inline-block px-2 w-full sm:w-1/2 lg:w-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute items-center justify-center flex  w-12 h-12  right-0 top-1/3  z-10 bg-white p-2  border-gray-900  hover:bg-gray-300 rounded-full shadow-md"
      >
        <img src={LeftArrow} className="w-4 rotate-180" alt="Next" />
      </button>
    </div>
  );
};
