import React from "react";
import VDLogo from "../../../../public/images/logo/vd.svg";
import Video from "@/components/Sections/SectionOne/Video/Video";

const SectionOne = () => {
  return (
    <div id='#' className='h-auto w-full '>
      <Video />
      <div className='relative left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 '>
        <div className='flex items-center  justify-center'>
          <VDLogo
            width={500}
            height={500}
            className=' mb-8 h-52 w-52 rounded-full  bg-white bg-opacity-20 p-4 backdrop-blur-sm backdrop-filter'
            fill='#003549'
            stroke='#000'
          />
        </div>
        <div className='text-white'>
          <h1 className='text-h1 text-center font-bold  drop-shadow-[0_0_1px_black]'>
            Vincent Durret
          </h1>
          <h2 className='text-h2 text-center font-bold drop-shadow-[0_0_1px_black]'>
            Développeur Web
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
