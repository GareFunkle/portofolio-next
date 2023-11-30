import React, { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/buttonLink/ButtonLink";
import { motion } from "framer-motion";
import ExperienceSiteContent from "./ExperienceSiteContent/ExperienceSiteContent";

const boxVariants = {
  hidden: {
    y: 100,
    transition: {
      duration: 1,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ExperienceSite = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div>
      <div
        onClick={props.handleClose}
        className='fixed left-0 top-0 z-40 h-full w-screen bg-transparent'
      ></div>
      <div className=' fixed left-1/2 top-[10%] z-50 h-full w-11/12 -translate-x-1/2 '>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
          className='h-full w-full overflow-scroll  rounded-t-lg border-x border-t border-my-color bg-black/30 bg-opacity-20 p-4 backdrop-blur-xl'
        >
          <div className='absolute right-12 top-16 '>
            <span
              onClick={props.handleClose}
              className='group relative mb-4 inline-block cursor-pointer overflow-hidden rounded border border-white/40 px-12  py-3 text-p font-medium text-white hover:text-white/40 focus:outline-none focus:ring active:bg-my-color active:text-white md:hidden'
            >
              <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-300 group-hover:w-full'></span>
              <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-300 group-hover:h-full'></span>
              <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full'></span>
              <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-300 group-hover:h-full'></span>
              Fermer
            </span>
          </div>
          <div className='mt-24 p-2 md:p-8'>
            <ExperienceSiteContent selectedItem={props.selectedItem} />
            <div className='py-8'>
              <Image
                width={1920}
                height={1080}
                src={props.selectedItem.imgSite}
                alt=''
                className='rounded-lg'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSite;
