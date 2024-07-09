"use client";

import React, { useEffect, useState } from "react";
import Checkout from "@/components/Checkout/Checkout";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  image: string;
}

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const savedCart = getCartItem();
    setCartItems(savedCart);
    
    // Calculate total
    const newTotal = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, []);

  return <Checkout cartItems={cartItems} total={total} />;
};

export default CheckoutPage;

const getCartItem = (): CartItem[] => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error('Error reading from localStorage', e);
    return [];
  }
};
