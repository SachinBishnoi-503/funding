import React from 'react'
import arating from '../assets/images/svg/business.svg'
import greystar from '../assets/images/svg/greystar.svg'
const Rating = () => {
    return (
        <div className='bg-charcoal w-full min-h-[290px]'>
            <div className='container'>
                <div className='flex flex-row flex-wrap -mx-3 py-[87px] items-center'>
                    <div className='w-1/4 px-3'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={arating} alt="" />
                            <p className='font-semibold font-abril text-custom-xl leading-custom-xl mt-[10px] text-white'>‘A’ Rating </p>
                        </div>
                    </div>
                    <div className='w-1/4 px-3'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-poppins font-normal text-xl text-white'>Average store growth</p>
                            <p className='font-semibold font-abril text-custom-xl leading-custom-xl text-white mt-[10px]'>400% </p>
                       </div>
                    </div>
                    <div className='w-1/4 px-3'>
                        <div className='flex items-center '>
                            <img src={greystar} alt="" />
                            <p className='font-poppins font-normal text-xl text-white'>Trustpilot</p>
                        </div>
                        <p className='font-semibold font-abril text-custom-xl leading-custom-xl text-white mt-[10px]'>400% </p>
                    </div>
                    <div className='w-1/4 px-3'>
                        <p className='font-poppins font-normal text-xl text-white'>Funding given</p>
                        <p className='font-semibold font-abril text-custom-xl leading-custom-xl text-white mt-[10px]'>$450M+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rating