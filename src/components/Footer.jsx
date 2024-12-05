import React from 'react'
import logo from '../assets/images/svg/footer-logo.svg'
import year from '../assets/images/svg/birthofyear.svg'
import facebook from '../assets/images/svg/facebook.svg'
import instgram from '../assets/images/svg/instgram.svg'
import linkdin from '../assets/images/svg/linkden.svg'
import twitter from '../assets/images/svg/twitter.svg'

const Footer = () => {
    return (
        <div className='min-h-[161px] w-full bg-charcoal'>
            <div className='px-[52px] py-[57px] flex items-center justify-between'>
                <div className='flex items-center max-lg:gap-[14px] max-lg:items-start lg:gap-[77px] max-lg:flex-col max-lg:flex'>
                    <img src={logo} alt="" />
                    <p className='text-off-grey font-medium font-poppins text-sm max-w-[163px]'>8fig, 1717 W 6th St, Austin, Texas</p>
                </div>
                <div className='flex items-center max-lg:hidden'>
                    <img src={year} alt="" />
                    <p className='font-poppins font-medium text-sm text-off-grey'>2024 8fig - All Rights Reserved</p>
                </div>
                <div className='flex items-center max-lg:gap-[24px] lg:gap-[40px] lg:pt-[1px] max-lg:mb-[68px]'>
                    <a href="https://www.facebook.com/" target='_blank'><img src={facebook} alt="" /> </a>
                    <a href="https://www.instagram.com/instagram/?hl=en" target='_blank'><img src={instgram} alt="" /> </a>
                    <a href="https://in.linkedin.com/" target='_blank'><img src={linkdin} alt="" /> </a>
                    <a href="https://x.com/?lang=en&mx=2" target='_blank'><img src={twitter} alt="" /> </a>
                </div>
            </div>
            <div className='mx-auto text-center pb-[28px] lg:hidden'>
                <p className='font-poppins font-medium text-sm text-off-grey'>2024 8fig - All Rights Reserved</p>

            </div>
        </div>
    )
}

export default Footer