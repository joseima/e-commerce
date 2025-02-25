import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../../assets/icons";
import logo from "../../assets/snkrs_logo.svg";
import arrow from "../../assets/arrow.svg";
import { NavBar } from "../navBar/NavBar";
import { CartSummary } from "../cartSummary/CartSummary";

export const Header = () => {
  const { cart } = useCartStore();
  const [showCartSummary, setShowCartSummary] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white">
      <div className="top-bar flex justify-between items-center px-8 py-2 text-sm font-light">
        <a
          href="#"
          className="text-gray-800 hover:underline gap-2  flex items-center"
        >
          <img src={arrow} alt="Logo" className="h-3" />
          Visit our site
        </a>
        <div className="links flex items-center gap-4">
          <span className="cursor-pointer hover:underline">Help</span>
          <span className="cursor-pointer hover:underline">Login</span>
          <div
            className="relative w-10 h-6 focus:outline-none hover:cursor-pointer flex gap-1 flex-row items-center justify-center group"
            onMouseEnter={() => setShowCartSummary(true)}
            onClick={() => navigate("/cart")}
            onMouseLeave={() => setShowCartSummary(false)}
          >
            <span
              className={`inline-flex font-semibold ${
                cart.length === 0 ? "bg-black" : "bg-red-500"
              } text-white rounded-full p-2 py-3 w-10 h-5  items-center justify-center`}
            >
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
            <span
              className={`${
                cart.length === 0 ? "opacity-80" : "opacity-100"
              }  h-12 flex  items-center justify-center`}
            >
              <CartIcon />
            </span>
            {showCartSummary && <CartSummary />}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-4 border-t border-b border-gray-300">
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <NavBar />
        <div className="w-10"></div>
      </div>
    </header>
  );
};
