"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

const CartSummary = () => {
  const { cart } = useCart();
  const [selectedCoupon, setSelectedCoupon] = useState<{
    name: string;
    discount: number;
  } | null>(null);
  const handleCouponSelect = (coupon: any) => {
    setSelectedCoupon(coupon);
  };
  const coupons = [
    { name: "Coupon1", discount: 10 },
    { name: "Coupon2", discount: 50 },
    { name: "Coupon3", discount: 100 },
  ];
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = selectedCoupon ? selectedCoupon.discount : 0;
  const total = subtotal - discount;
  return (
    <div>
      <div className="mt-4 text-right bottom-0 left-0 w-full flex flex-row ">
        <div className="mt-4 text-left bottom-0 left-0 w-full sm:w-1/2 ">
          <select
            className="select select-accent w-100 max-w-xs text-black text-1xl "
            onChange={(e) => handleCouponSelect(JSON.parse(e.target.value))}
          >
            <option disabled selected value="">
              Select a Coupon
            </option>
            {coupons.map((coupon) => (
              <option key={coupon.name} value={JSON.stringify(coupon)}>
                {coupon.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 text-right bottom-0 left-0 w-full sm:w-1/2">
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
        </div>
      </div>
      <Link href="/info" className="relative">
        {" "}
        <button className="btn btn-primary w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
