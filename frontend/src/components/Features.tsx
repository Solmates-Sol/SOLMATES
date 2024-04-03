"use client";
import Image from 'next/image';
import React from 'react'

function Features() {
  return (
    <div className='w-full h-full'>
      <h1 className='bg-[#f2f2f2] text-center text-3xl font-bold py-10'>Creators earn more on <span className='bg-[#f7d3cf] py-2 text-4xl px-2 text-[#2a2e2a]'>SOLMATES</span></h1>
      <div className='flex gap-5 flex-col  md:items-center justify-center bg-[#f2f2f2] py-24 md:flex-col lg:flex lg:flex-row '>
        <div className='bg-[#f7d3cf] w-[250px] h-[250px]  flex justify-center flex-col gap-5 mx-10 rounded-3xl'>
        <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-offer-sale-discount-ribbon-coupon-12991.png"
            width={250}
            height={250}
            className='rounded-3xl w-24 h-24 mx-auto'
            alt=""
    />
           <h2 className='text-center text-3xl font-bold'>Offers</h2>
        </div>
        <div className='bg-[#dbd1fc] w-[401px] h-[250px] mx-10 rounded-3xl'>
           
        </div>
        <div className='bg-[#9bcf60] incline w-[401px] h-[450px] mx-10 rounded-3xl'>
           
        </div>
        </div>
    </div>
  )
}

export default Features
