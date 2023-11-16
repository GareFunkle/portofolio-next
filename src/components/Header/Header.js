import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className='fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-lg border border-gray-200 bg-[#003549] text-white '>
      <div className='mx-auto grid h-full max-w-lg grid-cols-5 p-2'>
        <Link
          className='group mx-2 inline-flex flex-col items-center  justify-center px-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white '
          href='#section-one'
        >
          One
        </Link>
        <Link
          className='group mx-2 inline-flex flex-col items-center justify-center px-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white '
          href='#section-two'
        >
          Two
        </Link>

        <Link
          className='group mx-2 inline-flex flex-col items-center justify-center px-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white '
          href='#section-three'
        >
          Three
        </Link>

        <Link
          className='group mx-2 inline-flex flex-col items-center justify-center px-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white '
          href='#section-four'
        >
          Four
        </Link>
        <Link
          className='group mx-2 inline-flex flex-col items-center  justify-center px-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white'
          href='#section-five'
        >
          Five
        </Link>
      </div>
    </div>
  );
};

export default Header;
