import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

export const useProducts = () => {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);
  const promoProducts = products.slice(0, 5);
  const sliderProducts = products.slice(5);
  return { promoProducts, sliderProducts, products, loading };
};
