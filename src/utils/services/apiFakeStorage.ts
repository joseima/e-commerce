import { API_URL } from "../constants/ecommerce";
import { Product } from "../../models/Product";

export const getItems = async (): Promise<Product[]> => {
  try {
    const resp = await fetch(API_URL);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const json: Product[] = await resp.json();

    return json.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category,
      image: item.image,
      rating: item.rating,
      price: item.price,
    }));
  } catch (error: unknown) {
    console.error("Error fetching items: ", error);
    return [];
  }
};
