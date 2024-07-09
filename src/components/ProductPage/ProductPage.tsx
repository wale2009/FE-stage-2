"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaPlus, FaHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";

const ProductListing: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState(new Set<number>());
  const [cart, setCart] = useState<any[]>([]);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  useEffect(() => {
    const savedCart = getCartItem();
    setCart(savedCart);
  }, []);

  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  const products = [
    {
      id: 1,
      name: "Custom Yellow Crocs",
      rating: 4.9,
      price: 30000,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Pink Summer Crocs",
      rating: 4.7,
      price: 26000,
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Classic Clog",
      rating: 4.8,
      price: 20000,
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Crocs rubber Clogs",
      rating: 4.1,
      price: 18000,
      image: "/images/product4.jpg",
    },
    {
      id: 5,
      name: "Barbie Custom Crocs ",
      rating: 4.9,
      price: 40000,
      image: "/images/product5.jpg",
    },
    {
      id: 6,
      name: "Custom Green Crocs",
      rating: 4.9,
      price: 17000,
      image: "/images/product6.jpg",
    },
    {
      id: 7,
      name: "Pink Camouflage Crocs",
      rating: 4.1,
      price: 12000,
      image: "/images/product7.jpg",
    },
    {
      id: 8,
      name: "White Customs Crocs",
      rating: 4.9,
      price: 29000,
      image: "/images/product8.jpg",
    },
    {
      id: 9,
      name: "Crocs Bayaband Clogs",
      rating: 4.9,
      price: 24000,
      image: "/images/product9.jpg",
    },
  ];

  const kidsProducts = [
    {
      id: 10,
      name: "Pink Glittery Crocs",
      rating: 4.1,
      price: 12000,
      image: "/images/kid1.png",
    },
    {
      id: 11,
      name: "White custom crocs",
      rating: 4.9,
      price: 9000,
      image: "/images/kid2.png",
    },
    {
      id: 12,
      name: "Pink Kids Custom Crocs",
      rating: 4.9,
      price: 9000,
      image: "/images/kid3.png",
    },
    {
      id: 13,
      name: "Blue Unicorn Crocs",
      rating: 4.9,
      price: 9000,
      image: "/images/kid4.png",
    },
  ];

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, size: 41 }];
      }
    });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const ProductCard: React.FC<{ product: any }> = ({ product }) => (
    <div className="relative bg-product rounded-lg shadow-md overflow-hidden">
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={() => toggleLike(product.id)}
          className={`p-1 rounded-full ${
            likedProducts.has(product.id) ? " text-secondary" : "text-gray-400"
          }`}
        >
          <FaHeart />
        </button>
      </div>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="w-full h-48 object-cover font-semibold  "
      />
      <div className="p-4">
        <h3 className="font-inter text-sm font-medium mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <p className="font-inter text-lg font-bold">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-tl-lg"
      >
        <FaPlus />
      </button>
      {addedToCart === product.id && (
        <div className="absolute top-0 left-0 right-0 bg-secondary text-white text-center py-1">
          Added to cart!
        </div>
      )}
    </div>
  );

  return (
    <div className="container   font-inter">
      {/* <div className="flex justify-end mb-4">
        <Link href="/cart" className="text-2xl">
          <FaShoppingCart />
          <span className="ml-2">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </Link>
      </div> */}
      <div className="flex flex-col md:flex-row mb-16">
        <div className="hidden lg:block md:hidden md:w-1/4">
          <div className="sticky top-0 ">
            <Sidebar />
          </div>
        </div>
        <div className="flex-1 md:ml-12 mx-auto">
          <h2 className="text-2xl font-bold mb-8 mt-8">
            Products List ({products.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className="w-1/4 bg-secondary text-white py-3 rounded-lg text-lg font-semibold">
              See More
            </button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex justify-center items-center bg-primary w-full mb-4">
          <h2 className="text-2xl font-bold py-4 ">Kids Summer Collection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-3 mt-3">
          {kidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="w-1/4 bg-secondary text-white py-3 rounded-lg text-lg font-semibold">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

const setCartItem = (cart: any[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
};

const getCartItem = (): any[] => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error("Error reading from localStorage", e);
    return [];
  }
};
