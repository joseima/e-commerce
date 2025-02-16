import { useEffect } from "react";
import { DEFAULT_USER_ID } from "../../utils/constants/ecommerce";
import { useCartStore } from "../../store/cartStore";
import { RemoveFromCartIcon } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!DEFAULT_USER_ID) {
      navigate("/");
    }
  }, [navigate]);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 mb-20 text-center">
        <h1 className="text-2xl font-semibold mt-10 mb-2">
          Welcome {DEFAULT_USER_ID}
        </h1>
        <h3 className="text-xl mb-10">Your cart is empty</h3>
        <Link
          to="/"
          className="py-2 px-4 bg-[var(--dark-gray-bg)] hover:bg-[var(--button-hover)] text-white rounded-full"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-2xl font-semibold mt-10  mb-2 text-center">
        Welcome {DEFAULT_USER_ID}
      </h1>
      <h3 className="text-xl  mb-10 text-center">Here's your cart:</h3>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center mb-1 bg-gray-100 p-4 border-b border-white"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain  mix-blend-multiply"
              />
              <span className="whitespace-wrap overflow-hidden overflow-ellipsis">
                {item.title}
              </span>
            </div>
            <div className="flex items-center gap-2 space-x-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="w-16 p-2  rounded mr-2 bg-white"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 bg-[var(--gray-bg3)] hover:bg-[var(--button-hover)] text-white rounded-full"
              >
                <RemoveFromCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/process-order")}
          className="py-4 px-8 bg-[var(--dark-gray-bg)] hover:bg-[var(--button-hover)] text-white rounded-full"
        >
          Create your Order
        </button>
      </div>
    </div>
  );
};
