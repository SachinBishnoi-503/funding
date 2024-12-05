import React from 'react'
import logo from '../assets/images/webp/hero-logo.webp'

const Hero = () => {
    return (
        <div className='bg-hero relative w-full max-lg:min-h-[594px] lg:min-h-[851px] h-[100vh] mx-auto pointer-events-none bg-cover bg-center bg-no-repeat '>
            <img src={logo} alt="" className='absolute top-[24px] left-[24px]' />
            <div className='container max-lg:pt-[221px] lg:pt-[421px]'>
                <div className=''>
                    <h2 className='font-abril max-lg:text-custom-lg  lg:text-custom-xxl text-white max-lg:leading-custom-lg lg:leading-custom-xxl font-bold max-w-[478px]'>Get AI funding for your store</h2>
                    <p className='pt-[24px] max-md:text-lg md:text-2xl text-white leading-custom-lg font-poppins font-medium max-w-[478px]'>AI technology that predicts, plans, and protects your cash flow.</p>
                    <button className='py-[10px] px-[44px] rounded-[24px] border bg-violet-blue border-violet-blue text-white mt-[24px] font-poppins text-base font-medium hover:bg-white hover:text-violet-blue duration-300 ease-linear'>Get funded</button>
                </div>
            </div>
        </div>
    )
}

export default Hero