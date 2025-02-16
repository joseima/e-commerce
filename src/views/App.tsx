//import { CartProvider, CartContext } from './context/cart'
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { Header } from "../components/header/Header";
import { Layout } from "./global_layout";
import { ProductView } from "./product/ProductView";
import { CategoryView } from "./category/CategoryView";
import { Footer } from "../components/footer/Footer";
import { Cart } from "./cart/Cart";
import { NotFound } from "./NotFound";
import { ProcessOrder } from "./order/processOrder";
import { OrderConfirmation } from "./order/orderConfirmation";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/product/:id", element: <ProductView /> },
    { path: "/category/:category", element: <CategoryView /> },
    { path: "/cart", element: <Cart /> },
    { path: "/process-order", element: <ProcessOrder /> },
    { path: "/order-confirmation", element: <OrderConfirmation /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <AppRouter />
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
