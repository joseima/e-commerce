import { CartState } from "./Cart";

export interface Order {
  cart: CartState;
  address: {
    street: string;
    number: string;
    city: string;
  };
  paymentMethod: {
    card: string;
    bank: string;
    paypal: string;
  };
  deliveryMethod: {
    premium: string;
    common: string;
    pickUp: string;
  };
}
