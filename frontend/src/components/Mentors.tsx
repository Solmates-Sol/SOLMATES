"use client";
import React from 'react'
import ServiceType from "@/utils/types"
import Card from './Card';

function Mentors() {
    console.log(ServiceType)
  return (
    <div className='w-full mx-auto py-2 flex flex-col h-screen items-center bg-[#ebcb7c]'>
        <h1 className='text-3xl w-full text-center mt-10 font-bold'>Learn And Grow Together</h1>
        <p className='text-xl w-full my-5 mx-2 text-center'>Turn your passion and knowledge into a thriving business.
        Help your audience get ahead in life</p>
        <div className='w-full flex items-center justify-center gap-2 mt-4'>
            {
                ServiceType.map((type,i) => {
                    return (
                        <div key={i} className='flex flex-col items-center'>
                            <button className='text-xl btn-dark bg-[#fbf5e5] text-black hover:bg-black hover:text-white w-32'>{type.name}</button>
                        </div>
                    )
                })
            }
        </div>
        <div className='grid grid-cols-1 gap-5 mt-5 mx-5 lg:grid-cols-3 md:grid-cols-2'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Mentors
