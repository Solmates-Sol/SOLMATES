// components/Home.js
import React from 'react';

const HomeComponent = () => {
    return (
        <div className='w-screen py-44 mx-auto flex flex-col justify-center items-center bg-[#fbf5e5]'>
            <h1 className=' my-10 text-center text-black text-4xl font-bold'>Start your
side hustle
today</h1>
            <p className='w-1/2 text-center'>Turn your passion and knowledge into a thriving business.
Help your audience get ahead in life.</p>
            <div className='flex gap-3'>
                <button className='btn-dark my-10'>Get Started</button>
                <button className='btn-light my-10 border-2'>Learn More</button>
            </div>
        </div>
    );
};

export default HomeComponent;
