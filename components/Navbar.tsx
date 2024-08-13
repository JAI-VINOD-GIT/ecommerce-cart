"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <nav className="bg-base-100 shadow-xl shadow-black  top-0 left-0 right-0 z-10 fixed w-full  ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold  text-primary hover:text-black flex items-center"
        >
          <Image src="/images/logo.png" alt="Logo" width={75} height={100} />
          Beauty Care
        </Link>

        <div className="flex items-center space-x-4 ">
          <Link href="/cart" className="relative">
            <FaShoppingCart
              className={`text-2xl text-primary hover:text-black ${
                isMobile ? "text-3xl" : ""
              }`}
            />
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
