import React from 'react'

function Header() {
  return (
    <div className='w-screen h-16 bg-white py-5 px-5 flex items-center justify-between'>
       <div>
       <h1 className='text-xl font-bold text-purple-500'>SOLMATES</h1>
       <div className='flex flex-row gap-5 ml-10'>
          <div className='flex items-center justify-center ml-5 py-2'>
             <span className='text-black mx-2'>For Creators</span>
             <svg stroke="black" style={{color:"black"}} fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
          </div>
          <div className='flex items-center justify-center py-2'>
             <span className='text-black mx-2'>For Creators</span>
             <svg stroke="black" style={{color:"black"}} fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
          </div>
       </div>
       <div>
          <button className='bg-purple-500'>Connect Wallet</button>
       </div>
       </div>
    </div>
  )
}

export default Header
