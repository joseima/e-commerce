import { useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/orderStore";
import { DEFAULT_USER_ID } from "../../utils/constants/ecommerce";

export const OrderConfirmation = () => {
  const { order } = useOrderStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!order.address.street) {
      navigate("/");
    } else {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [order, navigate]);

  return (
    <div className="container mt-10 mx-auto min-h-140 p-4 text-center">
      <h1 className="text-3xl fontsemi-bold mb-4">Order Confirmed!</h1>
      <p className="text-xl mb-4">
        Thank you for your purchase, {DEFAULT_USER_ID}!
      </p>
      <p className="text-lg mb-4">Your order will be shipped to:</p>
      <p className="text-lg mb-4">
        {order.address.street}, {order.address.number}, {order.address.city}
      </p>
      <p className="text-lg mb-4">Payment Method: {order.paymentMethod.card}</p>
      <p className="text-lg mb-4">
        Delivery Method: {order.deliveryMethod.premium}
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 py-2 px-4 bg-[var(--dark-gray-bg)] hover:bg-[var(--button-hover)] text-white rounded-full"
      >
        Back to Home
      </button>
    </div>
  );
};
