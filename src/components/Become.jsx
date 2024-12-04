import React from 'react'
import becomeimg from '../assets/images/webp/become-image.webp'

const Become = () => {
  return (
      <div>
          <div className='container'>
              <div className='flex items-center justify-between max-lg:flex-col max-lg:flex py-[47px]'>
                  <div className='flex flex-col '>
                      <h2 className='font-abril font-semibold text-custom-lg leading-custom-lg text-charcoal max-w-[401px]'>Become an 8 figure seller with AI funding</h2>
                      <div>
                          <button className='py-[10px] px-[44px] font-poppins font-medium text-base rounded-[24px] bg-violet-blue text-white mt-[20px] '>Apply now</button>
                      </div>                  </div>
                  <div>
                      <img src={becomeimg} alt="" className='w-full md:max-w-[440px] max-lg:mt-[30px] h-full md:min-h-[293px]' />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Become