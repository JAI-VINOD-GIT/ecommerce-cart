"use client";
import React from "react";
import { useCart } from "../../context/CartContext";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  //   const handlePayment = () => {
  //
  //     console.log("Payment processed successfully!");
  //   };

  return (
    <div className="p-4  text-center mt-20 pt-7 md:mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">User Details</h2>
      <form className="space-y-4">
        <label className="block" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="input text-black w-full md:w-96 lg:w-80"
        />

        <label className="block" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="input text-black  w-full md:w-96 lg:w-80"
        />

        <label className="block" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          required
          className="input text-black h-32 w-full md:w-96 lg:w-80"
        ></textarea>

        <p className="text-2xl font-bold">
          Total Amount: <FaRupeeSign className="inline" />
          {totalAmount}
        </p>
        <Link href="/checkout" className="relative">
          <button
            type="button"
            className="btn mt-5 btn-primary w-full md:w-auto text-white font-bold text-2xl"
          >
            Pay
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
