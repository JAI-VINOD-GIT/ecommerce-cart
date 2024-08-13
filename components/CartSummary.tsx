"use client";
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = 10;
  const total = subtotal - discount;

  return (
    <div className="mt-4">
      <p>Subtotal: Rs.{subtotal.toFixed(2)}</p>
      <p>Discount: Rs.{discount.toFixed(2)}</p>
      <p>Total: Rs.{total.toFixed(2)}</p>
      <button className="btn btn-primary mt-2 text-white">Checkout</button>
    </div>
  );
};

export default CartSummary;
