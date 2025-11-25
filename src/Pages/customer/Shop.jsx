import React, { useState } from "react";
import { products }  from "../../Data/Product.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const navigate = useNavigate();
 

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const newItem = { ...product, quantity, total: product.price * quantity };

    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, total: item.price * (item.quantity + quantity) }
            : item
        );
      }
      return [...prev, newItem];
    });

       // Save current item to localStorage so details page can use it
    localStorage.setItem("selectedProduct", JSON.stringify(newItem));

    // Navigate to details page
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const categories = ["vegetables", "grains", "fruits"];

  return (
    <>
    <div className="p-8">
      {/* --- Featured / Top Section --- */}
      <section className="mb-12  md:px-24">
  {(() => {

    return (
      <div key={selectedProduct.id} className="text-center flex md:flex-row flex-col gap-10 p-4 w-full">

        {/* product image */}

        <div className="flex justify-center items-center  mb-4 bg-gray-300 px-8 py-3">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="h-72 w-68 object-cover " />
        </div>

         {/* product Data */}

        <div className="md:text-start space-y-7 py-10 w-full text-center">
          <h2 className="text-3xl font-semibold text-gray-800 uppercase">{selectedProduct.name}</h2>
          <div className="flex justify-between items-center md:w-48">
            <h3 className=" text-gray-900">{selectedProduct.seller}</h3>
            <p  
             className={`p-1 border  -xl text-white font-light px-3 py-1 ${selectedProduct.state === "online" ? "bg-green-400 rounded-full border border-green-800" : "border border-red-800 bg-red-300 rounded-full"}`}
             >{selectedProduct.state}</p>
          </div>
            <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < selectedProduct.rating ? "text-green-600" : "text-gray-500"}>
            ★
            </span>
            ))}
            </div>
          <div className="flex gap-4 items-center w-full text-center px-16 md:px-1">
           <p className="text-green-700 text-2xl font-medium">XAF {selectedProduct.price}</p>
           <p className="text-gray-400 text-lg line-through">XAF{selectedProduct.oldPrice}</p>
          </div>

        <div className=" justify-center items-center my-3 w-full text-center flex flex-col space-y-3 md:flex-row sm:flex-col">
          {/* main div */}

                <div className="flex  text-center items-center justify-center md:text-start md:items-start">
                <button
                className="p-4 border border-gray-500 text-2xl font-semibold "
                onClick={() => handleDecrease(selectedProduct.id)}
                >
                -
                </button>
                <span className="border py-4  px-7 border-gray-400 text-2xl font-semibold">{quantities[selectedProduct.id] || 1}</span>
                <button
                className="p-4 border text-2xl border-gray-500  font-semibold"
                onClick={() => handleIncrease(selectedProduct.id)}
                >
                +
                </button>
                </div>
         
         {/* price div */}
          <div className="flex md:flex-row flex-col sm:flex-col md:gap-10 gap-5 px-6 text-center justify-center">   
        <h3 className="text-green-800 font-bold md:mt-5">
          Total: XAF {(quantities[selectedProduct.id] || 1) * selectedProduct.price}
        </h3>

        <button
          onClick={() => { handleAddToCart(selectedProduct) }}
          className="border border-green-600 hover:bg-green-700 font-semibold hover:text-white px-3 py-3"
        >
          Add to Cart
      </button>
          </div>

        </div>

        </div>
      </div>
    );
  })()}
</section>

{/* --- Product Categories --- */}
{categories.map((cat) => (
  <div key={cat} className="mb-10 md:px-24 px-4">
    <h2 className="text-2xl font-bold capitalize mb-4">{cat}</h2>

    {/* Product list: scrolls on mobile, grid on desktop */}
    <div
      className="flex overflow-x-auto md:grid md:grid-cols-5 gap-4 snap-x snap-mandatory scroll-smooth 
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      {products
        .filter((p) => p.category === cat)
        .map((product) => (
          <div
            key={product.id}
            className="min-w-[70%] sm:min-w-[45%] md:min-w-0 shrink-0 md:shrink text-center bg-green-50 rounded-md shadow hover:shadow-lg transition-shadow duration-300 snap-start"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover mb-4 rounded-t-md"
            />
            <div className="px-2 pb-4">
              <h2 className="text-base md:text-lg font-semibold">{product.name}</h2>
              <p className="text-green-700 font-bold">XAF{product.price}</p>
              <button
                onClick={() => (setSelectedProduct(product))}
                className="bg-[#387718] hover:bg-green-700 text-white px-4 py-2 mt-2 rounded-md w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
))}
    </div>

    </>
  );
};

export default ShopPage;
