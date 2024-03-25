import React from 'react';
import Link from "next/link";

function Footer() {
  return (
    <div className='w-screen bg-white h-[200px] py-auto flex justify-between items-center px-10 gap-10'>
       <div className='text-2xl font-bold lg:text-3xl md:text-2xl text-black flex items-center' >
            SOLMATES
       </div>
       <div className='flex gap-4 flex-row items-start text-xl text-black'>
            <Link href='/video' className='hover:border-b-2 border-black'>
                Chat
            </Link>
            <Link href='/signin' className='hover:border-b-2 border-black'>
                Connect
            </Link>
            <Link href='https://www.colosseum.org/renaissance/resources' className=' hover:border-b-2 border-black'>
                Resources
            </Link>
       </div>
    </div>
  )
}

export default Footer;
