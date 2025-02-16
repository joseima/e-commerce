import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useProductStore } from "../../store/productStore";
import { useEffect } from "react";

export const CategoryView = () => {
  const { category } = useParams<{ category: string }>();
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="mb-10">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
