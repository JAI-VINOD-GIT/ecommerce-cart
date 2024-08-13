"use client";
import { useCart } from "../../context/CartContext";
import CartSummary from "../../components/CartSummary";
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
  const { cart, updateCart } = useCart();

  const handleQuantityChange = (productId: number, amount: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
        : item
    );
    updateCart(updatedCart);
  };

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-20 pt-7">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="border-b py-4">
            <div className="flex items-center justify-between">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h2>{item.name}</h2>
                <p>
                  <FaRupeeSign className="inline" />
                  {item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="btn btn-sm btn-secondary"
                >
                  -
                </button>

                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="btn btn-sm btn-secondary"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="btn btn-sm btn-error"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <CartSummary />
    </div>
  );
};

export default Cart;
