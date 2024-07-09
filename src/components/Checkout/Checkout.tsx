import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBookmarkMinus } from "react-icons/ci";

interface CheckoutProps {
  cartItems: any[]; // Replace 'any' with your actual CartItem type
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, total }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Implement payment logic here
    setPaymentSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:grid-col justify-between items-start mb-12">
        <div className="mb-4 sm:mb-10">
          <Link href="/carts" className="flex items-center text-black">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="text-lg font-bold">Go Back</span>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 mt-10">Summary Order</h1>
      <p>Check your items and submit for better experience</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="order-1 md:order-1">
          <div className="border rounded-lg p-4">
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
                  <p className="text-sm container bg-primary w-[80px]">In-stock</p>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[red] mr-2"></div>
                    <span>|</span>
                    <p className="ml-2">{40}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="text-ash flex">
                      <span><RiDeleteBin6Line /></span> Remove
                    </button>
                    <button className="text-ash flex "> <CiBookmarkMinus /> Save for later</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-4 order-2 md:order-3">
            <h2 className="text-xl font-bold mb-4 font-inter">
              Delivery Options
            </h2>
            <div className="mb-4">
              <label className="flex items-center justify-between mt-5 mb-4">
                <span>1. Deliver to me</span>
                <input
                  type="checkbox"
                  name="delivery"
                  value="deliver"
                  defaultChecked
                  className="hidden peer"
                />
                <span className="ml-2 flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-700 rounded-sm peer-checked:bg-gray-700 peer-checked:content-[''] peer-checked:inline-block peer-checked:w-2 peer-checked:h-2 " />
                </span>
              </label>
              <button className="mt-2 bg-green-100 px-4 py-2 rounded">
                Add delivery address
              </button>
            </div>
            <div>
              <label className="flex items-center justify-between mt-5 mb-4">
                <span>2. Pick up from store </span>
                <input
                  type="checkbox"
                  name="delivery"
                  value="deliver"
                  defaultChecked
                  className="hidden peer"
                />
                <span className="ml-2 flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-700 rounded-sm peer-checked:bg-gray-700 peer-checked:content-[''] peer-checked:inline-block peer-checked:w-2 peer-checked:h-2 " />
                </span>
              </label>
              <button className="mt-2 bg-gray-200 px-4 py-2 rounded">
                Select pickup location
              </button>
            </div>
          </div>
        </div>

        <div className="order-3 md:order-2">
          <h2 className="text-xl font-bold mt-8 md:mt-0 mb-4">
            Payment Details
          </h2>
          <p>Complete your purchase by providing your card details</p>

          <h3 className="font-bold mt-4 mb-2">Choose card type</h3>
          <div className="flex space-x-4 mb-4">
            <button className="border p-2 rounded">Mastercard</button>
            <button className="border p-2 rounded">PayPal</button>
            <button className="border p-2 rounded">Apple Pay</button>
          </div>

          <form>
            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Name on card"
              className="w-full mb-2 p-2 border rounded"
            />
            <div className="flex mb-2">
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
            <label className="flex items-center mb-4">
              <input type="checkbox" />
              <span className="ml-2">Save card for future use</span>
            </label>
            <input
              type="text"
              placeholder="Billing address"
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₦3,000</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₦{(total + 3000).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-secondary text-white py-2 rounded"
            >
              Pay ₦{(total + 3000).toLocaleString()}
            </button>
          </form>
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
