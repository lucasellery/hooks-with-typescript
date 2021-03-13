import { createContext } from 'react';

interface Products {
  id: number;
  name: string;
  prica: number;
}

interface Cart {
  products?: Products[];
  shipping_value?: number;
}

const CartContext = createContext<Cart>({
  products: [],
});

export default CartContext;
