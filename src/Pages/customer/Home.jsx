import React from 'react'
import images from '../../../constants/images'
const Home = () => {
  return (
   <>
<div className='w-full'>
  {/* HOME SECTION */}
<div
  className="md:h-screen relative w-full md:bg-contain bg-center bg-cover md:bg-right bg-no-repeat"
  style={{
    backgroundImage: `
      linear-gradient(to right, #387718 35%, transparent 90%), 
      url(${images.Homebg})
    `,
  }}
>
  <div className="text-white md:px-32 px-8 text-start py-36">
    <h1 className="md:text-5xl text-3xl font-bold tracking-wide leading-normal">
      Your Agricultural products <br /> at your doorstep!
    </h1>
    <h2 className="py-6 text-gray-200">
      Signup today, place an order and receive the best of Bamenda’s land products
      <br /> in no time, no matter the price, no matter the cost.
    </h2>
    <button className="bg-[#B6CD27] p-2 rounded-sm text-[#387718]">
      Register Now
    </button>
  </div>
</div>

{/* Second SECTION */}
<div
  style={{
    backgroundImage: `url(${images.union})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="relative -mt-[99px] w-full md:bg-cover bg-contain  items-center justify-center text-center z-10 py-10"
>
<div className="flex md:flex-row flex-col py-12 items-center text-start md:px-36 px-3 md:gap-2 space-y-10">
    <img src={images.screen} alt="" className="md:w-[555px]  w-64 md:h-[382px]" />
  <h1 className="md:text-3xl md:max-w-xl text-white font-semibold">
    With our user friendly interface get your fresh products right at your doorstep
  </h1>
</div>
</div>

{/* Third Section */}
<div className='bg-[#387718] flex items-center md:gap-20 gap-5 justify-center py-20 md:px-32 px-10'>
<img src={images.deliver} alt="" className='md:w-44 w-24'/>
<h1 className='text-white md:text-2xl font-semibold'>Earn money as a delivery person or a seller. </h1>
<img src={images.sell} alt="" className='md:w-32 w-20'/>
</div>


</div>


   </>
  )
}

export default Home
