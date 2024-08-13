"use client";
import { useCart } from "../../context/CartContext";
import CartSummary from "../../components/CartSummary";

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
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="border-b py-4">
            <div className="flex items-center justify-between">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h2>{item.name}</h2>
                <p>Rs.{item.price.toFixed(2)}</p>
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
