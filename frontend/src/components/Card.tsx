"use client"
import React from 'react'

function Card() {
  return (
    <div className='w-[250px] h-80 mb-2 bg-white flex flex-col text-center gap-3'>
        <img src='https://api.dicebear.com/8.x/micah/svg?seed=aneka' alt='mentor' className='w-full h-40 object-cover object-fill' />
        <h1> Mentor Name</h1>
        <p>Software Engineer</p>
    </div>
  )
}

export default Card
