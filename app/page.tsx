"use client";
import { useCart } from "../context/CartContext";
import products from "../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import "react-toastify/dist/ReactToastify.css";
import { FaRupeeSign } from "react-icons/fa";

const Home = () => {
  const { addToCart } = useCart();
  const handleAddToCart = (product: any) => {
    addToCart(product);
    //product.added = true;
    toast.success("Added to cart successfully");
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-20 pt-7">
      {products.map((product) => (
        <div key={product.id} className="card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black ">{product.name}</h2>
            <p className="text-black">
              <FaRupeeSign className="inline" />
              {product.price.toFixed(2)}
            </p>
            <div className="card-actions justify-end">
              {/* <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary"
                disabled={product.added}
              >
                {product.added ? "Added" : "Add to Cart"}
              </button> */}
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-success text-white w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        position={isMobile ? "bottom-center" : "top-center"}
        autoClose={1000}
      />
    </div>
  );
};

export default Home;
