import React from 'react'
import { Link } from 'react-router-dom'

const MentorCard = () => {
  return (
    
    <div className='border-2 border-black flex flex-col gap-2 justify-center items-center'>
        <div>
           <img src="https://api.dicebear.com/8.x/micah/svg?seed=Nala" className='rounded-full w-[80%] h-[80%] mx-3 my-3' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold'> Mentor Name</h1>
            <div className='flex gap-5'>
              <span>Software Engineer</span>
              <span>Web3</span>
            </div>
        </div>
        <div className='flex gap-2 my-5 items-center'>
          <span className='bg-black text-white py-1 px-5 rounded-full hover:bg-transparent hover:text-black' >Web3</span>
          <span className='bg-black text-white py-1 px-5 rounded-full hover:bg-transparent hover:text-black' >Web3</span>
          <span className='border py-1 px-1 rounded-full' >+2 more</span>
        </div>
         <Link to="/">
              <button className='bg-black my-3 text-white py-2 px-5 rounded-full' >View More</button>
         </Link>
    </div>
  )
}

export default MentorCard