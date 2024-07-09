"use client";

import React, { useState, useEffect } from "react";
import Cart from "@/components/Carts/Carts";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = getCartItem();
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      );
      setCartItem(updatedItems);
      return updatedItems;
    });
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      setCartItem(updatedItems);
      return updatedItems;
    });
  };

  const handleProceed = () => {
    // Save the current cart to localStorage before proceeding
    setCartItem(cartItems);
    router.push("/checkout");
  };

  const setCartItem = (cart: CartItem[]) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  };

  const getCartItem = (): CartItem[] => {
    try {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    } catch (e) {
      console.error("Error reading from localStorage", e);
      return [];
    }
  };

  return (
    <>
      <Cart
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handleProceed}
          className="bg-secondary text-white px-4 py-2 rounded items-center w-full sm:w-1/4 text-center mb-6"
        >
          Proceed
        </button>
      </div>
    </>
  );
};

export default CartPage;

// ... rest of your code (setCartItem and getCartItem functions) ...
