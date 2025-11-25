import React, { useState, useEffect } from "react";
import images from "../../../constants/images";

const Dashboard = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <>
      <div className="w-full md:pl-40 min-h-screen font-sans px-4 py-6">

        {/* TOP CARDS SECTION */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">

          {/* Card 1 */}
          <div className="flex flex-col text-center shadow-sm px-6 md:px-12 rounded-sm py-6 space-y-4 w-full lg:w-1/2 bg-white">
            <p className="text-xs mt-2">Good Job</p>
            <span className="font-semibold text-5xl md:text-6xl">45</span>

            <div className="flex justify-between gap-4 md:gap-10">
              <button className="px-4 py-2 border rounded-sm text-sm">Today</button>
              <button className="px-4 py-2 border rounded-sm text-sm">Week</button>
              <button className="px-4 py-2 border rounded-sm text-sm">Month</button>
            </div>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">

            {/* Online Card */}
            <div className="flex gap-5 justify-between">
              <span className="space-y-2 w-1/2">
                <div className="shadow-sm px-1 py-3 font-semibold text-lime-700 bg-green-100 rounded-md text-xl md:text-3xl text-end">
                  Online
                </div>
                <p className="text-xs md:text-sm font-light pr-3">
                  Always make sure you are online here. It notifies the customers.
                </p>
              </span>

              {/* Balance Card */}
              <span className="shadow-sm p-4 space-y-2 rounded-sm w-1/2 bg-white">
                <p className="text-sm text-lime-600">Account Balance</p>
                <span className="text-2xl md:text-3xl font-bold">0 000 000</span>
                <p className="text-end font-medium text-sm">XAF</p>
              </span>
            </div>

            {/* Add Product Button */}
            <button className="bg-gradient-to-r from-green-800 to-[#AD9E17] text-white font-semibold text-xl md:text-3xl rounded-md py-3 px-4">
              <span className="flex space-x-4 items-center justify-center">
                <img src={images.add} alt="add" className="w-6 md:w-8" />
                <h3>Add Product</h3>
              </span>
            </button>

          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="py-10 w-full">
          <h3 className="text-gray-700 font-semibold text-lg md:text-xl">ALL Products</h3>

          <div className="overflow-x-auto mt-4">
            <table className="w-full min-w-[400px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Price</th>
                </tr>
              </thead>

              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td className="p-4 text-gray-500">No items added yet</td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.total} FCFA</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
