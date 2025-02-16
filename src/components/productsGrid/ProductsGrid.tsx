import { Product } from "../../models/Product";
import { ProductCard } from "../productCard/ProductCard";

interface ProductsSliderProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsSliderProps) => {
  return (
    <div className="overflow-hidden  mb-20 whitespace-nowrap">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.slice(0, 12).map((product) => (
          <div key={product.id} className="mb-10">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
