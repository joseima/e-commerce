import { Link } from "react-router-dom";
import { Product } from "../../models/Product";
import { truncateText } from "../../utils/functions/truncateText";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link key={product.id} to={`/product/${product.id}`}>
      <div className=" bg-white flex-col  flex items-center justify-center overflow-hidden hover:scale-105">
        <div className="col-span-2 w-full h-90  p-16 relative section1  bg-[var(--gray-bg)] hover:bg-[var(--gray-bg2)] flex items-center justify-center  md:col-span-1">
          <img
            src={product.image}
            alt={product.title}
            className="inset-0 m-auto mix-blend-multiply w-full self-center h-full object-contain"
          />
        </div>
        <p className="text-sm  mt-1">{product.category}</p>
        <h2 className="text-lg/6 text-center font-semibold mt-1">
          {truncateText(product.title, 50)}
        </h2>
      </div>
    </Link>
  );
};
