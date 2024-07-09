import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBookmarkMinus } from "react-icons/ci";

interface CheckoutProps {
  cartItems: any[];
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, total }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-12">
        <div className="mb-4 sm:mb-0">
          <Link href="/carts" className="flex items-center text-black">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="text-lg font-bold">Go Back</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">Summary Order</h1>
          <p>Check your items and submit for better experience</p>
          <div className="border rounded-lg p-4 mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex mb-4">
                <div className="w-1/4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-3/4 pl-4">
                  <div className="flex justify-between">
                    <h3>{item.name}</h3>
                    <p>₦{item.price.toLocaleString()}</p>
                  </div>
                  <p className="text-sm container bg-primary w-[80px]">
                    In-stock
                  </p>
                  <div className="flex items-center">
                    <p className="ml-2">{40}</p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <button className="text-ash flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Remove
                    </button>
                    <button className="text-ash flex items-center">
                      <CiBookmarkMinus className="mr-1" />
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 font-inter">
              Delivery Options
            </h2>
            <div className="mb-4">
              <label className="flex items-center justify-between mb-4 w-full">
                <span>1. Deliver to me</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-700 rounded ml-4"
                />
              </label>
              <button className="mt-2 bg-green-100 px-4 py-2 rounded">
                Add delivery address
              </button>
            </div>
            <div>
              <label className="flex items-center justify-between mb-4 w-full">
                <span>2. Pick from the store </span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-700 rounded ml-4"
                />
              </label>
              <button className="mt-2 bg-gray-200 px-4 py-2 rounded">
                Select pickup location
              </button>
            </div>
          </div>
        </div>

        <div className="lg:py-8">
          <div className="sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <p className="mb-6">
              Complete your purchase by providing your card details
            </p>

            <h3 className="font-bold mt-6 mb-4">Choose card type</h3>
            <div className="flex space-x-4 mb-6">
              <div className="flex gap-4">
                <button className="border border-gray-300 p-2 rounded-lg overflow-hidden">
                  <img
                    src="MC.png"
                    alt="Mastercard"
                    className="w-16 h-10 object-contain"
                  />
                </button>
                <button className="border border-gray-300 p-2 rounded-lg overflow-hidden">
                  <img
                    src="PP.png"
                    alt="PayPal"
                    className="w-16 h-10 object-contain"
                  />
                </button>
                <button className="border border-gray-300 p-2 rounded-lg overflow-hidden">
                  <img
                    src="AP.png"
                    alt="Apple Pay"
                    className="w-16 h-10 object-contain"
                  />
                </button>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Name on card"
                className="w-full p-2 border rounded"
              />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-2/3 p-2 border rounded-l"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/6 p-2 border-t border-b"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/6 p-2 border rounded-r"
                />
              </div>
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Save card for future use</span>
              </label>
              <input
                type="text"
                placeholder="Billing address"
                className="w-full p-2 border rounded"
              />

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between mb-6">
                  <span>Subtotal</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span>Shipping</span>
                  <span>₦3,000</span>
                </div>
                <div className="flex justify-between font-bold mb-6">
                  <span>Total</span>
                  <span>₦{(total + 3000).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-secondary text-white py-3 rounded mt-6"
              >
                Pay ₦{(total + 3000).toLocaleString()}
              </button>
            </form>
          </div>
        </div>
      </div>

      {paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
              Return Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
