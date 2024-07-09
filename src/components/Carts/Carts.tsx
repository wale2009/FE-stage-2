"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  image: string;
}

interface CartProps {
  items: CartItem[];
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, updateQuantity, removeItem }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [items]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:grid-col justify-between items-start mb-12">
        <div className="mb-4 sm:mb-10">
          <Link href="/" className="flex text-black items-center">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="text-base font-bold">Go Back</span>
          </Link>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mt-15">My Cart ({items?.length || 0})</h1>
        </div>
      </div>
      {!items || items.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/" className="text-blue-500">
            Continue shopping
          </Link>
        </p>
      ) : (
        <div>
          <div className="hidden sm:grid grid-cols-5 gap-4 font-bold mb-4 text-sm">
            <div>Product Details</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Price</div>
            <div className="text-center">Size</div>
            <div className="text-center">Total</div>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-row sm:grid sm:grid-cols-5 gap-4 items-center mb-4 border-b pb-3 container bg-product rounded-lg text-xs sm:text-sm overflow-x-auto sm:overflow-x-visible"
            >
              <div className="flex items-center mr-2 sm:mr-0 min-w-[120px] sm:min-w-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="truncate">{item.name}</span>
              </div>
              <div className="flex items-center justify-center mr-2 sm:mr-0 min-w-[80px] sm:min-w-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-1 py-1 bg-gray-200 rounded"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="mx-1">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-1 py-1 bg-gray-200 rounded"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="mr-2 sm:mr-0 min-w-[80px] sm:min-w-0 sm:text-center">
                ₦{item.price.toLocaleString()}
              </div>
              <div className="mr-2 sm:mr-0 min-w-[40px] sm:min-w-0 sm:text-center">
                {item.size}
              </div>
              <div className="flex items-center justify-between min-w-[100px] sm:min-w-0">
                <span className="sm:mr-2">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2"
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-8">
            {/* <div className="flex justify-center items-center">
              <Link
                href="/checkout"
                className="bg-secondary text-white px-4 py-2 rounded items-center w-full sm:w-1/4 text-center"
              >
                Proceed
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
