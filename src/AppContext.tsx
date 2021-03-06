import React, { useContext, useReducer } from 'react';
import CartContext from './CartContext';

interface Products {
  id: number;
  name: string;
  prica: number;
}

interface Cart {
  products: string[];
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
}


const AppContext: React.FC = () => {
  // const { products } = useContext(CartContext);
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          }
        default:
          return state;
      }
    },
    {
      products: [],
      shipping_value: 0,
    },
  );

  return (
    <div>
      {/* {products?.map(product => product.name)} */}
    </div>
  );
}

export default AppContext;
