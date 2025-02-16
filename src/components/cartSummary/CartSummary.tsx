import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import { truncateText } from "../../utils/functions/truncateText";

export const CartSummary = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="absolute top-2 right-0 mt-2 w-96 bg-white shadow-lg rounded p-4 z-50 transition-opacity duration-300 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

      {cart.length === 0 ? (
        <h3 className=" mb-10">Your cart is empty</h3>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{truncateText(item.title, 40)}</span>
                <span>{item.quantity}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/cart")}
            className="mt-4 py-2 font-semibold mx-auto px-4 bg-[var(--dark-gray-bg)] hover:bg-[var(--button-hover)] text-white rounded-full"
          >
            Process Cart
          </button>
        </>
      )}
    </div>
  );
};
