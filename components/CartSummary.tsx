"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

const CartSummary = () => {
  const { cart } = useCart();
  const [enteredCoupon, setEnteredCoupon] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState<{
    name: string;
    discount: number;
  } | null>(null);
  const handleCouponSelect = (coupon: any) => {
    setSelectedCoupon(coupon);
  };
  const handleCouponValidation = () => {
    const matchedCoupon = coupons.find(
      (coupon) => coupon.name === enteredCoupon
    );
    if (matchedCoupon) {
      handleCouponSelect(matchedCoupon);
    } else {
      alert("Invalid Coupon");
    }
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
      <div className="w-3/5 flex float-right justify-end mt-7 ">
        <table className="w-full py-10  p-4 ">
          <tbody>
            <tr className="border-b-2 border-white mb-5">
              <td className="float-right mr-7 ">Subtotal :</td>
              <td>
                <FaRupeeSign className="inline" />
                {subtotal.toFixed(2)}
              </td>
            </tr>

            <tr className="border-b-2 border-white">
              <td className="float-right mr-2 ">
                <label className="input text-black input-bordered flex items-center gap-1 m-6">
                  <input
                    type="text"
                    className="grow join-vertical "
                    placeholder="Enter your COUPON"
                    //onBlur={handleCouponValidation}
                    onChange={(e) => setEnteredCoupon(e.target.value)}
                  />
                  <span className="badge badge-info bg-primary">Optional</span>
                </label>{" "}
              </td>

              <td>
                <FaRupeeSign className="inline" />
                {discount.toFixed(2)}
              </td>
            </tr>

            <tr>
              <td className="float-right mr-7 font-bold">Total :</td>
              <td className="font-bold">
                <FaRupeeSign className="inline" />
                {total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href="/info" className="relative">
        {" "}
        <button className="btn btn-primary text-white w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
