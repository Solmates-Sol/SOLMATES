"use client";
import React from 'react'
import ServiceType from "@/utils/types"

function Mentors() {
    console.log(ServiceType)
  return (
    <div className='w-full mx-auto flex flex-col h-screen items-center bg-[#ebcb7c]'>
        <h1 className='text-3xl w-full text-center mt-10 font-bold'>Learn And Grow Together</h1>
        <p className='text-xl w-full my-7 mx-2 text-center'>Turn your passion and knowledge into a thriving business.
        Help your audience get ahead in life</p>
        <div className='w-full flex items-center justify-center gap-5 mt-7'>
            {
                ServiceType.map((type,i) => {
                    return (
                        <div key={i} className='flex flex-col items-center'>
                            <button className='text-xl btn-dark bg-[#fbf5e5] text-black hover:bg-black hover:text-white'>{type.name}</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Mentors
