import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images'

const Footer = () => {
  return (
    <>
    <div className='w-full md:px-24 text-center justify-center py-10 items-center text-sm bottom-0 mt-10 left-0'>
      <div className='flex md:flex-row flex-col justify-between items-center space-y-5'>
        <div className='py-10'>
            <img src={images.Agromate} alt="" className='md:w-36 w-28'/>
        </div>
        <div className='md:text-start '>
            <h2 className='font-bold text-green-800 text-sm md:text-base'>Product</h2>
            <ul className='text-lime-500 md:text-sm gap-10 py-1 text-xs space-y-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/signin">Become a Delivery Person</Link></li>
                <li><Link to="/login">Beccome a Seller</Link></li>
            </ul>
        </div>
        <div className='md:text-start'>
            <h2 className='font-bold text-green-800 md:py-1 text-sm md:text-base flex flex-col'>Explore</h2>
            <ul className='text-lime-500 md:text-sm text-xs gap-5 py-1'>
                <li>Resources</li>
                <li>Blog</li>
                <li>Documents</li>
            </ul>
        </div>
        <div className='md:text-start text-lime-600 gap-1 flex flex-col text-xs md:text-base'>
            <h3 className='pb-6'>Office Location </h3>

            <p>Bambili, Cameroon</p>

            <p className='pt-10'>@2023 ABC all rights reserved</p>
        </div>

    </div>
        <div className='flex flex-col md:flex-row md:px-44 text-xs md:text-sm px-10 gap-5 text-lime-600 pt-10  justify-between'>
         <div className='items-center justify-center flex flex-col'>
            <h2>contact@agromate.com</h2>
            <div className='bg-gray-400 h-0.5 w-24'></div>
         </div>
         <div className='items-center justify-center flex flex-col'>
            <h2>+237 653146158</h2>
            <div className='bg-gray-400 h-0.5 w-18'></div>
         </div>
        </div>

    </div>

    </>
  )
}

export default Footer