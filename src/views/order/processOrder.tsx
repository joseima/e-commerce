import { useState, useEffect } from "react";
import { useOrderStore } from "../../store/orderStore";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import { DEFAULT_USER_ID } from "../../utils/constants/ecommerce";
import { truncateText } from "../../utils/functions/truncateText";

export const ProcessOrder = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!DEFAULT_USER_ID) {
      navigate("/");
    }
  }, [navigate]);
  const { order, setOrder } = useOrderStore();
  const { cart } = useCartStore();

  const [address, setAddress] = useState({ street: "", number: "", city: "" });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete = Boolean(
      address.street &&
        address.number &&
        address.city &&
        paymentMethod &&
        deliveryMethod
    );
    setIsFormComplete(isComplete);
  }, [address, paymentMethod, deliveryMethod]);

  const handlePlaceOrder = () => {
    if (isFormComplete) {
      const newOrder = {
        ...order,
        address,
        paymentMethod: { card: paymentMethod, bank: "", paypal: "" },
        deliveryMethod: { premium: deliveryMethod, common: "", pickUp: "" },
      };
      setOrder(newOrder);
      navigate("/order-confirmation");
    }
  };

  return (
    <div className="container mx-auto my-10 gap-8 flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 p-10 bg-gray-300 text-gray-800">
        <h1 className="text-2xl font-semibold mb-2 text-center">
          Process Order
        </h1>
        <p className="mb-4 text-center">
          We're almost there {DEFAULT_USER_ID}, fill all the information
          required and place your order.
        </p>
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <div className="mb-4">
          <label className="block mb-2">Street</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full p-2 bg-white text-black"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 w-full md:w-1/2 md:mr-3">
            <label className="block mb-2">Number</label>
            <input
              type="text"
              value={address.number}
              onChange={(e) =>
                setAddress({ ...address, number: e.target.value })
              }
              className="w-full p-2 bg-white text-black"
            />
          </div>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block mb-2">City</label>
            <input
              type="text"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="w-full p-2 bg-white text-black"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <div className="mb-4">
          <label className="block mb-2">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 bg-white text-black"
          >
            <option value="">Select one</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
        <h2 className="text-xl font-semibold mb-2">Delivery Method</h2>
        <div className="mb-4">
          <label className="block mb-2">Select Delivery Method</label>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="w-full p-2 bg-white text-black"
          >
            <option value="">Select one</option>
            <option value="Premium">Premium</option>
            <option value="Common">Common</option>
            <option value="Pick up at store">Pick up at store</option>
          </select>
        </div>
      </div>
      <div className="w-full md:w-2/5 p-10  bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{truncateText(item.title, 40)}</span>
              <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-3 mb-1">Shipping Address</h2>
        <p>
          {address.street} {address.number} {address.city}
        </p>
        <h2 className="text-xl font-semibold mt-3 mb-1">Payment Method</h2>
        <p>{paymentMethod}</p>
        <h2 className="text-xl font-semibold mt-3 mb-1">Delivery Method</h2>
        <p>{deliveryMethod}</p>
        <button
          onClick={handlePlaceOrder}
          disabled={!isFormComplete}
          className="mt-4 py-4 px-8 bg-[var(--dark-gray-bg)] hover:bg-[var(--button-hover)] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
