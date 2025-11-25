import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add new item
  cart.push(product);

  // Save new cart
  localStorage.setItem("cart", JSON.stringify(cart));
};


  useEffect(() => {
    const stored = localStorage.getItem("selectedProduct");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.id.toString() === id) setProduct(parsed);
      else navigate("/"); // if product not found, go home
    } else {
      navigate("/");
    }
  }, [id, navigate]);

   const grandTotal = product ? product.quantity * product.price + (product.deliveryfee || 0): 0;


  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className=" md:px-24   ">
      <button
        onClick={() => navigate(-1)}
        className="m-7 text-green-700 font-semibold hover:underline"
      >
        ← Back to Shop
      </button>

      <div className="flex flex-col gap-10 items-center justify-center text-center px-24 py-10 md:border border-green-700">
       <h1 className="text-lime-600 md:text-4xl font-semibold">Your Order Has Been Confirmed</h1>
            <div className="md:w-1/2 text-start md:px-16">
                <p>Thank you for shopping with Agromate!. 
                    Here is a copy of you billing receipt
                     kindly go through and modify Delivery address
                </p>
                <div className="flex justify-between mt-5">
                    <h3 className="font-semibold ">Items in cart </h3>
                    <span className="text-gray-500">{product.quantity}</span>
                </div>
                <hr class="border-t-3 border-dotted border-gray-800 mt-5" />
                
                <div className="rounded-md bg-lime-200 text-lime-700 font-semibold p-3 text-center mt-5 border space-y-5">
                  <h2>Delivery Location</h2>
                   <p className="font-semibold w-full bg-lime-400 text-white  p-2 rounded-md text-lg">{product.deliveryAddress || "Not Provided!"} <span className="text-sm">change loaction</span></p>
                </div>

                <hr className="my-5"/>
                <table class="w-full ">
                <tbody>
                    <tr className="">
                    <td className="px-4 py-2 font-semibold">Total</td>
                    <td className="px-4 py-2">{product.total}</td>
                    </tr>
                    <tr className="">
                    <td className="px-4 py-2 font-semibold">Delivery Fee</td>
                    <td className="px-4 py-2">{product.deliveryfee}</td>
                    </tr>
                    <tr className="">
                    <td className="px-4 py-2 font-semibold">Discount</td>
                    <td className="px-4 py-2">None</td>
                    </tr>
                    <tr className=" mt-5">
                    <td className="px-4 py-2 font-bold text-lg">Grand Total</td>
                    <td className="px-4 py-2 font-bold text-lg">{grandTotal}</td>
                    </tr>
                </tbody>
                </table>

                <button 
                onClick={() => {
                   addToCart(product);
                   alert("Payment processed! Your product was added to your cart.");
                }}
                className="w-full bg-lime-700 hover:bg-lime-800 text-white text-sm font-semibold py-3 mt-10 rounded-md">
                    Make Payment
                </button>

            </div>
      </div>
    </div>
  );
};

export default ProductDetails;
