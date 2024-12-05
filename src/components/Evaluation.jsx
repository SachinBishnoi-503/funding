import React from 'react'
import evaluation from '../assets/images/webp/evaluation-image.webp'
import evaluationcart from '../assets/images/webp/evaluation-cart.webp'


const Evaluation = () => {
  return (
    <div className='bg-eggshell w-full min-h-[560px] relative overflow-hidden'>
      <div className='container'>
        <img src={evaluationcart} alt="" className='absolute max-md:top-[13px] max-md:left-[3px] max-2xl:top-[131px] 2xl:top-[181px] max-2xl:left-[58px] 2xl:left-[269px] max-md:max-w-[175px] max-md:min-h-[139px] md:max-w-[218px] md:min-h-[171px] ' />
        <div className='flex items-center justify-between max-xl:flex-col max-xl:flex max-xl:py-[60px] xl:py-[120px] '>
                  <img src={evaluation} alt="" className='max-md:max-w-[387px] max-md:min-h-[258px] md:max-w-[480px] md:min-h-[320px]' />
                  <div className='flex-col max-xl:mt-[30px] '> 
                      <h2 className='rounded-full bg-rich-black text-white min-h-[36px] max-w-[36px] flex items-center justify-center text-3xl font-abril font-semibold'>1</h2>
                      <h2 className='text-rich-black max-w-[364px] max-md:text-custom-xlg md:text-custom-lg leading-custom-lg font-semibold font-abril mt-[14px]'>Get an AI evaluation of your supply chain needs</h2>
                      <p className='text-rich-black mt-1 max-md:text-lg md:text-2xl max-w-[366px] font-poppins font-medium'>By analyzing your sales velocity and growth potential.</p>
                      <button className='text-sm text-whtie mt-5 font-medium font-poppins py-[6px] px-[20px] bg-violet-blue rounded-[24px] text-white border border-violet-blue'>Apply now</button>
                  </div>
             </div>
              
          </div>
    </div>
  )
}

export default Evaluation