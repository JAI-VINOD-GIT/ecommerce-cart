"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Brand Logo
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-primary" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* <Link href="/profile">
            <FaUser className="text-2xl text-primary" />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
