import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProductStore } from "../../store/productStore";
import { useCartStore } from "../../store/cartStore";
import { CartIcon } from "../../assets/icons";

export const ProductView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, fetchProducts } = useProductStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="container mt-10 mb-20 mx-auto">
      <div className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-2/5 p-10 h-full">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full  self-center h-90 object-contain"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              {product.rating.rate}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-10 bg-gray-100">
          <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
          <p className="text-sm  mb-4  text-gray-600 font-semibold">
            {product.category}
          </p>
          <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-lg">Available: {product.rating.count}</p>
          <p className="mt-4 text-2xl font-bold">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 p-4 bg-[var(--dark-gray-bg)]  hover:bg-[var(--button-hover)]  text-white rounded-full gap-2 flex items-center justify-center"
          >
            <CartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};
