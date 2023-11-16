import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div id='section-one' className='h-[100vh] w-full bg-red-100 '>
      <div className='relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='flex items-center justify-center'>
          <Image
            width={500}
            height={500}
            className='w-52'
            src='./images/logo/vd.svg'
          />
        </div>
        <div>
          <h1 className='text-center text-6xl font-bold'>Vincent Durret</h1>
          <h2 className='text-center text-4xl font-bold'>Web Devellopeur</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
