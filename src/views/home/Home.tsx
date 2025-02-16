import { useProducts } from "../../hooks/useProducts";
import { PromoBanner } from "../../components/promoBanner/PromoBanner";
import { ProductsSlider } from "../../components/productsSlider/ProductsSlider";
import { ProductsGrid } from "../../components/productsGrid/ProductsGrid";

export const Home = () => {
  const { promoProducts, sliderProducts, loading } = useProducts();
  if (loading || promoProducts.length === 0 || sliderProducts.length === 0) {
    return <div>Loading products...</div>;
  }
  return (
    <section className="container mx-auto">
      <div className="home">
        <PromoBanner products={promoProducts} />
        <ProductsSlider products={sliderProducts} />
        <ProductsGrid products={sliderProducts} />
      </div>
    </section>
  );
};
