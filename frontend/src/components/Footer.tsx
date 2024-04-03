import React from 'react';
import Link from "next/link";

function Footer() {
  return (
    <div className='w-full bg-white h-[200px] py-auto flex justify-between items-center px-10'>
       <div className='text-3xl text-black flex items-center' >
            SOLMATES
       </div>
       <div className='flex gap-4 flex-row items-start'>
            <Link href='/video' className='text-2xl text-black'>
                Chat
            </Link>
            <Link href='/signin' className='text-2xl text-black'>
                Connect
            </Link>
            <Link href='https://www.colosseum.org/renaissance/resources' className='text-2xl text-black'>
                Resources
            </Link>
       </div>
    </div>
  )
}

export default Footer;
