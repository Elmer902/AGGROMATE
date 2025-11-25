import React from 'react'

const Dashboard = () => {
  return (
    <>
         <div className='w-full md:p-12 h-screen '>
          
          <div className='flex items-center justify-center gap-5'>
            <div className='flex flex-col text-center shadow-sm px-7 rounded-sm py-5 space-y-5'>
                 <p className='text-xs mt-4'>Good Job</p>
                 <span className='font-semibold text-5xl '>45</span>
                 <div className='flex justify-between gap-10'>
                   <button className='p-2 border rounded-sm '>Today</button>
                   <button className='p-2 border rounded-sm '>Week</button>
                   <button className='p-2 border rounded-sm '>Month</button>
                 </div>
            </div>
            <div className='flex flex-col '>
              <div className='flex'>
                <span className='space-y-2'>
                 <div className='shadow-sm p-2 text-lime-500 text-xl'>
                   Online
                 </div>
                  <p className='text-xs font-thin pr-2'>Always make sure you are online here. it notifies the customers</p>
                </span>
                <span>
                  <p>Account Balance </p>
                  <span>0 000 000 </span>
                  <p>XAF</p>
                </span>
              </div>
              <button><span>+</span>Add Product</button>
            </div>
          </div>

          {/* table */}
          <table></table>
     </div>
    </>
  )
}

export default Dashboard