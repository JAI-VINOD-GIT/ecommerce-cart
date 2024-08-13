"use client";
import { useCart } from "../context/CartContext";
import products from "../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    //product.added = true;
    toast.success("Added to cart successfully");
  };
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black ">{product.name}</h2>
            <p className="text-black">Rs.{product.price.toFixed(2)}</p>
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
                className="btn btn-success text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default Home;
