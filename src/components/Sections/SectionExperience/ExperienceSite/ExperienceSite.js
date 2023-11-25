"use client";

import React, { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const ExperienceSite = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className='fixed left-1/2 top-1/2 z-50 h-screen w-full -translate-x-1/2 -translate-y-1/2 transform animate-fadeInUp transition-all duration-300'>
      <div className='h-full w-full overflow-scroll  rounded-lg border border-white bg-white bg-opacity-20 p-4 backdrop-blur-xl'>
        <div className='absolute right-12 top-16 '>
          <p
            onClick={props.handleClose}
            className='cursor-pointer rounded-lg bg-my-color p-2 text-p text-white '
          >
            Fermer
          </p>
        </div>
        <div className='mt-24  p-2 md:p-8'>
          <div className='bg-gradient-gotham mb-4 rounded-lg border border-white p-2 '>
            <h2 className='text-center text-h2 text-white'>
              {props.selectedItem.name ? props.selectedItem.name : ""}
            </h2>
            <h3 className='text-h3 text-white'>{props.selectedItem.project}</h3>
            <p className='py-2 text-p text-white'>
              Objectifs :{" "}
              {props.selectedItem.goals ? props.selectedItem.goals : ""}
            </p>
            <p className='py-2 text-p text-white'>
              Developpement :{" "}
              {props.selectedItem.dev ? props.selectedItem.dev : ""}
            </p>
            <p className='py-2 text-p text-white'>
              {props.selectedItem.personalization
                ? props.selectedItem.personalization
                : ""}
            </p>
            <p className='py-2 text-p text-white'>
              {props.selectedItem.conclusion
                ? props.selectedItem.conclusion
                : ""}
            </p>
            <Link
              href={
                props.selectedItem.website ? props.selectedItem.website : "#"
              }
              target='_blank'
              rel='noreferrer'
            >
              Voir le site
            </Link>
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
