import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ExperienceSite = (props) => {
  return (
    <div className='animate-fadeIn fixed left-1/2 top-1/2 h-screen w-full -translate-x-1/2 -translate-y-1/2 transform'>
      <div className='h-full w-full overflow-scroll rounded-lg border border-white bg-black p-4'>
        <div className='absolute right-12 '>
          <FontAwesomeIcon
            className='cursor-pointer rounded-md border border-white bg-black p-2  text-2xl text-red-700'
            onClick={props.handleClose}
            icon={faXmark}
          />
        </div>
        <div className='mt-12'>
          <Image
            width={1920}
            height={1080}
            src={props.selectedItem.imgSite}
            alt=''
          />
          <h2>{props.selectedItem.name}</h2>
          <p>{props.selectedItem.categories}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSite;
