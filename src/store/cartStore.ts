import { create } from "zustand";
import { Product } from "../models/Product";
import { CartItem } from "../models/Cart";
import { saveToStorage, getFromStorage } from "../utils/storage/handleStorage";

const initialCart = getFromStorage<CartItem[]>("cart") || [];

interface LocalCartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<LocalCartState>((set) => ({
  cart: initialCart,

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...product, quantity: 1 }];
      saveToStorage("cart", updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveToStorage("cart", updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveToStorage("cart", []);
    return { cart: [] };
  },

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      saveToStorage("cart", updatedCart);
      return { cart: updatedCart };
    }),
}));
