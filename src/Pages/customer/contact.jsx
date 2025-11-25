import React from 'react'
import images from '../../../constants/images'

const contact = () => {
  return (
    <>
    <div
    style={
      {
            backgroundImage: `
              linear-gradient(to top, #387718 5%, transparent 100%), 
              url(${images.noJoy})
            ` ,
    
  }}
  
    className=" md:h-screen w-full md:bg-top bg-no-repeat bg-cover bg-left flex flex-col items-center text-center  py-16"
    >
  <h1 className='text-white text-4xl font-bold'>Contact Us</h1>
  <p className='text-white text-sm py-4'>Any questions or remarks? Just write us a message</p>
  <div className='w-3/4 bg-white flex md:flex-row flex-col  p-1 gap-10 text-start'>
    <div className='md:w-1/2 text-white flex flex-col text-start bg-[#387718] py-10 pl-5 space-y-2'>
     <h1 className='text-lg font-semibold'>Contact Information </h1>
     <p className='text-sm font-light'>Say something to start a live chat!</p>

     <div className='flex gap-3 py-4 px-3'>
        <img src={images.phone} alt="" className='w-4 h-4 mt-1'/>
        <h3>+237 87697698</h3>
     </div>
     <div className='flex gap-3 py-4 px-3'>
        <img src={images.email} alt="" className='w-4 h-4 mt-1'/>
        <h3>slaes@gmail.online</h3>
     </div>
     <div className='flex gap-3 py-4 px-3'>
        <img src={images.location} alt="" className='w-4 h-4 mt-1'/>
        <h3>Bambili, Bamenda, Cameroon</h3>
     </div>

    </div>

    <div className='md:w-1/2 py-10 px-3 text-end '>
     <div>
        <form action="submit">
            <div className='text-start'>
                <label htmlFor="name" className='text-sm text-gray-500'>First Name</label><br />
                <input type="text" className='w-full border-b text-xs text-gray-500 py-2' />
            </div>

            <div className='flex gap-5 my-5 text-start'>
                <div>
                   <label htmlFor="email" className='text-sm text-gray-500'>Email</label>
                   <input type="text" className='w-full border-b text-xs text-gray-500 py-2' />

                </div>

                <div >
                  <label htmlFor="phone number" className='text-sm text-gray-500'>Phone Number</label>
                  <input type="number" className='w-full border-b text-xs text-gray-500 py-2' />
                </div>
            </div>

            <div className='text-start'>
                <label htmlFor="Messaeg" className='text-sm text-gray-500'>Message</label>
                <input type="text" className='w-full border-b text-xs text-gray-500 py-2' placeholder='Write your message...' />
            </div>
        <button className='bg-green-700 text-white p-2 mt-10 right-10'>
            Send Message
        </button>
        </form>
     </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default contact