import React from 'react'
import { useState, useEffect } from 'react'
import images from '../../../constants/images'

const Dashboard = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);


  return (
    <>
     <div className='w-11/12 pl-40 h-screen font-sans'>
          
          <div className='flex items-center justify-center gap-8'>
            <div className='flex flex-col text-center shadow-sm px-12 rounded-sm py-8 space-y-4 w-6/11 bg-white'>
                 <p className='text-xs mt-4'>Good Job</p>
                 <span className='font-semibold text-6xl '>45</span>
                 <div className='flex justify-between gap-10'>
                   <button className='px-4 py-3 border rounded-sm '>Today</button>
                   <button className='px-4 py-3 border rounded-sm '>Week</button>
                   <button className='px-4 py-3 border rounded-sm '>Month</button>
                 </div>
            </div>
            <div className='flex flex-col gap-5 w-5/11'>
              <div className='flex gap-5 justify-between '>
                <span className='space-y-2 w-6/12'>
                 <div className='shadow-sm px-1 py-3 font-semibold text-lime-700 bg-green-100 rounded-md text-3xl text-end'>
                   Online
                 </div>
                  <p className='text-sm font-light pr-3'>Always make sure you are online here. it notifies the customers</p>
                </span>
                <span className='shadow-sm p-4 space-y-2 rounded-sm w-7/12 bg-white'>
                  <p className='text-sm text-lime-600'>Account Balance </p>
                  <span className='text-3xl font-bold'>0 000 000 </span>
                  <p className='text-end font-medium text-sm'>XAF</p>
                </span>
              </div>
              <button className='bg-linear-to-r   from-green-800  to-[#AD9E17]  text-white bg-white font-semibold text-3xl rounded-md p-1'>
                <span className='flex space-x-10 text-center items-center justify-center'>
                  <img src={images.add} alt="" className='' /> 
                  <h3>Add Product</h3>
                </span>
              </button>
            </div>
          </div>

          {/* table */}
          <div className='py-10'>
            <h3 className='text-gray-700 font-semibold'>ALL Products</h3>
               <table className="w-full">
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
    </>
  )
}

export default Dashboard