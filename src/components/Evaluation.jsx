import React from 'react'
import evaluation from '../assets/images/webp/evaluation-image.webp'

const Evaluation = () => {
  return (
      <div className='bg-eggshell w-full min-h-[560px]'>
          <div className='container'>
              <div className='flex items-center justify-between py-[120px] '>
                  <img src={evaluation} alt="" />
                  <div className='flex-col '> 
                      <h2 className='rounded-full bg-rich-black text-white min-h-[36px] max-w-[36px] flex items-center justify-center text-3xl font-abril font-semibold'>1</h2>
                      <h2 className='text-rich-black max-w-[364px] text-custom-lg leading-custom-lg font-semibold font-abril mt-[14px]'>Get an AI evaluation of your supply chain needs</h2>
                      <p className='text-rich-black mt-1 text-2xl max-w-[366px] font-poppins font-medium'>By analyzing your sales velocity and growth potential.</p>
                      <button className='text-sm text-whtie mt-5 font-medium font-poppins py-[6px] px-[20px] bg-violet-blue rounded-[24px] text-white border border-violet-blue'>Apply now</button>
                  </div>
             </div>
              
          </div>
    </div>
  )
}

export default Evaluation