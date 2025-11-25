import React from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
      <div
  style={{
    backgroundImage: `url(${images.bg1})`,
  }}
  className="relative h-screen md:flex-row flex flex-col md:w-full md:bg-no-repeat md:bg-cover bg-none items-center justify-center"
>
  {/* Vector */}
  <img
    src={images.Vector}
    alt=""
    className="absolute bottom-0 left-0 h-[500px] w-full object-cover z-0 hidden md:flex"
  />
  {/* mobile vector */}
      <img
      src={images.Vector1}
      alt=""
      className="absolute bottom-0 left-0 h-[780px] w-full object-cover z-5 flex md:hidden"
    />

  {/* Login Container */}
  <div className="login-container relative shadow-2xl  flex md:flex-row flex-col md:bg-white bg-none">
    <div className="image-section">
      <img src={images.A1} alt="" className="h-full" />
    </div>

    <div className="form py-8 text-center md:w-3/6 w-full md:px-5 px-1 z-10">
      <h2 className="text-[#387718] font-semibold pb-10 px-2">
        Welcome, choose your account type
      </h2>
     <div className='flex items-center gap-3 pb-5 justify-center '>
        <Link to="/dashboard">
        <div className="border hover:border-green-400 hover:shadow-green-400 hover:shadow-sm rounded-md w-28 p-1">
            <img src={images.farmer} alt="" className='w-24'/>
            <span className='text-[#387718] text-xs font-semibold'>Farmer</span>
        </div>
        </Link>
        <Link to="/">
                <div className="border hover:border-green-400 hover:shadow-green-400 hover:shadow-sm rounded-md w-28 p-1 py-2  ">
                    <img src={images.Customer} alt=""  className='w-24' />
                    <span className='text-[#387718] text-xs font-semibold'>Customer</span>
                </div>
        </Link>
        <Link to="/deliveyDashboard">
                <div className="border hover:border-green-400 hover:shadow-green-400 hover:shadow-sm rounded-md px-6 py-5 flex flex-col gap-2">
                    <img src={images.Delivery} alt='' className='w-16 h-20' />
                    <span className='text-[#387718] text-xs font-semibold '>Delivery</span>
                </div>
        </Link>
     </div>
      <form action="submit" className="gap-3 flex flex-col px-8">
        <div>
          <img src={images.email} alt="" className='absolute py-3 px-2 w-9'/>
                  <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-600 py-3 pl-10 rounded-md w-full text-xs text-gray-500 bg-white"
                />
        </div>
        <div>
                <img src={images.password} alt="" className='absolute py-3 px-2 w-8'/>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-600 py-3 pl-10 rounded-md w-full text-xs text-gray-500 bg-white"
                />
        </div>
        <h3 className="text-sm text-[#387718] text-end pb-5 cursor-pointer">
          Forgot Password?
        </h3>
            <Link to="/">
            <button
              type="submit"
              className="bg-[#387718] hover:bg-green-600 w-full text-white px-3 py-2 rounded-md"
            >
              Sign up
            </button></Link>
      </form>

      <div className="pt-4">
        <span className="text-xs"> Already have an Account?, <Link to="/login" className="text-[#387718] cursor-pointer">Log In</Link>
        </span>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Signin