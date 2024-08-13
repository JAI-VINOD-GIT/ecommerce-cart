"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

const CartSummary = () => {
  const { cart } = useCart();

  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const total = subtotal - discount;
  return (
    <div className="mt-4 text-right bottom-0 left-0 w-full">
      <p>
        Subtotal:
        <FaRupeeSign className="inline" />
        {subtotal.toFixed(2)}
      </p>
      <p>
        Discount: <FaRupeeSign className="inline" />
        {discount.toFixed(2)}
      </p>
      <p className="font-extrabold">
        Total: <FaRupeeSign className="inline" />
        {total.toFixed(2)}
      </p>
      <Link href="/Checkout" className="relative">
        {" "}
        <button className="btn btn-primary w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
