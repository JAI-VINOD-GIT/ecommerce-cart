"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateCart: (updatedCart: Product[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateCart = (updatedCart: Product[]) => {
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
