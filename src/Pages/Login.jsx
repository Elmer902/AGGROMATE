import React from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
const Login = () => {
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
    className="absolute bottom-0 left-0 h-[770px] w-full object-cover z-5 flex md:hidden"
  />

  {/* Login Container */}
  <div 
  className="login-container relative shadow-2xl flex md:flex-row flex-col  md:bg-white ">
    <div className="image-section">
      <img src={images.A1} alt="" className="h-full z-0" />
    </div>

    <div className="form py-20 text-center md:w-1/2 w-full z-10">
      <h2 className="text-[#387718] font-semibold pb-10 px-2 ">
        Welcome, choose your account type
      </h2>

      <form action="submit" className="gap-5 flex flex-col px-8">
        <div>
          <img src={images.email} alt="" className='absolute py-3 px-2 w-9'/>
                  <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-600 py-3 pl-10 rounded-md w-full text-xs text-gray-500  bg-white"
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
          className="bg-[#387718] hover:bg-green-600 w-full text-white px-5 py-2 rounded-md"
        >
          Login
        </button></Link>
      </form>

      <div className="pt-8">
        <span className="text-xs">
          No Account?, <Link to="/Signin" className="text-[#387718] cursor-pointer">Sign Up</Link>
        </span>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Login