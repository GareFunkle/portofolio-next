"use client";

import React, { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ExperienceSite = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className='animate-fadeInUp fixed left-1/2 top-1/2 z-50 h-screen w-full -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300'>
      <div className='h-full w-full overflow-scroll rounded-lg border border-white bg-black p-4'>
        <div className='absolute right-12 '>
          <FontAwesomeIcon
            className='cursor-pointer rounded-md border border-white bg-black p-2 text-2xl text-red-700 transition-all duration-300 hover:scale-105 active:scale-95'
            onClick={props.handleClose}
            icon={faXmark}
          />
        </div>
        <div className='mt-12 p-8'>
          <div className='mb-4'>
            <h2 className='text-center text-h2 text-white'>
              {props.selectedItem.name}
            </h2>
            <p className='text-white'>{props.selectedItem.categories}</p>
          </div>
          <div className=''>
            <Image
              width={1920}
              height={1080}
              src={props.selectedItem.imgSite}
              alt=''
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSite;
