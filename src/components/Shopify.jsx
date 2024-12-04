import React from 'react'
import amazon from '../assets/images/svg/amazon.svg'
import ebay from '../assets/images/svg/Ebay.svg'
import bigcommerce from '../assets/images/svg/bigcommerce.svg'
import shopify from '../assets/images/svg/shoify.svg'  

const Shopify = () => {
  return (
      <div className='bg-charcoal w-full min-h-[124px]'>
          <div className='container'>
              <div className='gap-[52px] max-sm:flex-col flex items-center justify-center mx-auto pt-[46px] pb-[54px]'>
                  <p className='font-poppins text-sm font-medium text-white'>MAIN SUPPORTED PLATFORMS</p>
                  <div className='flex justify-between gap-[40px]'>
                      <div className='flex gap-[52px] max-md:flex-col items-center'>
                          <img src={amazon} alt="" />
                          <img src={shopify} alt="" />

                      </div>
                      <div className='flex gap-[52px] max-md:flex-col items-center'>
                          <img src={bigcommerce} alt="" />
                          <img src={ebay} alt="" />

                      </div>
                 </div>
              </div>
              
          </div>
          
    </div>
  )
}

export default Shopify