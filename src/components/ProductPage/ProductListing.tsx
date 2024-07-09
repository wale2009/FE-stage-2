import React, { useState } from "react";
import { FaStar, FaPlus, FaHeart } from "react-icons/fa";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductListing: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
    </div>
  );

  
  const products: Product[] = [
  ];

  return (
    <div className="container mx-auto px-8 font-inter">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
