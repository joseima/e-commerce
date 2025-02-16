import { create } from "zustand";
import { Product } from "../models/Product";
import { getItems } from "../utils/services/apiFakeStorage";

interface ProductState {
  products: Product[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    const products = await getItems();
    set({ products, loading: false });
  },
}));
