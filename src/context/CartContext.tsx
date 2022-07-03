import React, { useCallback, createContext, useContext, useMemo, useState } from 'react';
import Product from '../types/Product';

interface ProductInCart extends Product {
  quantity: number,
}

interface CartContext {
  items: ProductInCart[],
  addToCart: (newItem: Product, quantity: number) => void,
  removeFromCart: (id: number) => void,
  increaseItemQuantity: (id: number) => void,
  decreaseItemQuantity: (id: number) => void,
}

const initialContext: CartContext = {
  items: [],
  removeFromCart: () => {
    throw new Error('removeFromCart is not implemented')
  },
  increaseItemQuantity: () => {
    throw new Error('increaseItemQuantity is not implemented')
  },
  decreaseItemQuantity: () => {
    throw new Error('decreaseItemQuantity is not implemented')
  },
  addToCart: () => {
    throw new Error('addToCart is not implemented');
  },
};

const CartContext = createContext<CartContext>(initialContext);

export function CartProvider({ children }: React.PropsWithChildren) {
  const [cart, updateCart] = useState<CartContext>(initialContext);

  const findItemInCart = useCallback((id: number) => cart.items.find((item) => item.id === id)
  , [cart])

  const removeFromCart = useCallback((id: number) => {
      const item = findItemInCart(id);
      if (!item) return;

      const itemIndex = cart.items.indexOf(item);
      const newCartItems = cart.items.splice(itemIndex, 1);
    
      updateCart((prev) => ({
        ...prev,
        items: newCartItems
      }));
  }, [cart, findItemInCart]);

  const decreaseItemQuantity =  useCallback((id: number, amount: number = 1) => {
    const item = findItemInCart(id);
    if (!item) return;

    if (amount >= item.quantity) {
      removeFromCart(item.id)
      return;
    }
  
    const itemIndex = cart.items.indexOf(item);
    const newCartItems = [...cart.items];

    newCartItems[itemIndex].quantity -= amount;

    updateCart((prev) => ({
      ...prev,
      items: newCartItems
    }));
  }, [findItemInCart, removeFromCart, cart]);
  
  const increaseItemQuantity = useCallback((id: number, amount: number = 1) => {
    const item = findItemInCart(id);
    if (!item) return;

    const itemIndex = cart.items.indexOf(item);
    const newCartItems = [...cart.items];

    newCartItems[itemIndex].quantity += amount;

    updateCart((prev) => ({
      ...prev,
      items: newCartItems
    }));
  }, [cart, findItemInCart]);

  const addToCart = useCallback((newItem: Product, quantity: number = 1) => {
    const item = findItemInCart(newItem.id);
    if (item) {
      increaseItemQuantity(newItem.id, quantity);
      return;
    }
    const newCartItems = [
      ...cart.items,
      {
        ...newItem,
        quantity,
      }
    ];

    updateCart((prev) => ({
      ...prev,
      items: newCartItems
    }));
  }, [cart, findItemInCart, increaseItemQuantity])
  
  const providerValue = useMemo(() => ({
      ...cart,
      removeFromCart,
      increaseItemQuantity,
      addToCart,
      decreaseItemQuantity
    }),
    [cart, removeFromCart, increaseItemQuantity, addToCart, decreaseItemQuantity],
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
