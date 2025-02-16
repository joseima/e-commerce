import { Product } from "../../models/Product";

import { truncateText } from "../../utils/functions/truncateText";
import { Link } from "react-router-dom";
interface PromoBannerProps {
  products: Product[];
}

export const PromoBanner = ({ products }: PromoBannerProps) => {
  return (
    <div className="grid pt-4 pb-4 mb-10 grid-cols-2 gap-4">
      <div className="col-span-2 mt- relative section1 h-full bg-[var(--gray-bg2)] min-h-90  md:col-span-1">
        <img
          src={products[0].image}
          alt={products[0].title}
          className="absolute inset-0 m-auto h-full mix-blend-multiply opacity-40 object-cover"
        />
        <div className="relative z-10 p-10">
          <h2 className="text-2xl mb-4 font-semibold">{products[0].title}</h2>
          <Link to={`/product/${products[0].id}`}>
            <button className="mt-3 py-2 px-4   rounded-full text-white">
              Learn more
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 col-span-2 md:col-span-1">
        {products.slice(1).map((product, index) => (
          <div
            key={product.id}
            className={`p-8 relative ${index === 1 || index === 2 ? "bg-[var(--gray-bg3)]" : "bg-[var(--gray-bg)]"}`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 m-auto h-full mix-blend-multiply opacity-40 object-cover"
            />
            <h2 className="text-lg  font-semibold mb-2">
              {truncateText(product.title, 50)}
            </h2>
            <Link to={`/product/${product.id}`}>
              <button className="mt-2 py-2 px-4  rounded-full text-white">
                Learn more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
