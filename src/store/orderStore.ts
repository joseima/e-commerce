import { create } from "zustand";
import { Order } from "../models/Order";
import { saveToStorage, getFromStorage } from "../utils/storage/handleStorage";

interface OrderState {
  order: Order;
  setOrder: (order: Order) => void;
}

const initialOrder: Order = getFromStorage<Order>("order") || {
  cart: [],
  address: {
    street: "",
    number: "",
    city: "",
  },
  paymentMethod: {
    card: "",
    bank: "",
    paypal: "",
  },
  deliveryMethod: {
    premium: "",
    common: "",
    pickUp: "",
  },
};

export const useOrderStore = create<OrderState>((set) => ({
  order: initialOrder,
  setOrder: (order) => {
    saveToStorage("order", order);
    set({ order });
  },
}));
