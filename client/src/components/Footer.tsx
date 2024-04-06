import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ebcb7c] text-black">
      <div className='text-2xl font-bold lg:text-3xl md:text-2xl text-black flex items-center pl-8 pt-8'>
        SOLMATES
      </div>
      <div className="container mx-auto py-8">
        <div className='flex gap-4 flex-col items-end text-xl text-black pr-5'>
          <a href='/video' className='hover:border-b-2 border-black text-right'>
            Chat
          </a>
          <a href='/signin' className='hover:border-b-2 border-black'>
            Connect
          </a>
          {/* <a href='https://www.colosseum.org/renaissance/resources' className='hover:border-b-2 border-black'>
            Resources
          </a> */}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} SOLMATES </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



