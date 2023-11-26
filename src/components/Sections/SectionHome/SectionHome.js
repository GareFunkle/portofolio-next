"use client";

import React from "react";
import VDLogo from "../../../../public/images/logo/vd.svg";
import HomeVideo from "@/components/Sections/SectionHome/HomeVideo/HomeVideo";
import { motion } from "framer-motion";

const boxVariants = {
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 2, opacity: 0 },
};

const boxFadeInUp = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const SectionHome = () => {
  return (
    <div id='#' className=' h-screen w-full  '>
      <HomeVideo />
      <div className='z-2 relative left-1/2  top-1/2  -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.3 }}
          className='flex  items-center justify-center '
        >
          <VDLogo
            width={500}
            height={500}
            className=' mb-8 h-52 w-52 rounded-full  bg-white bg-opacity-20 p-4 backdrop-blur-sm backdrop-filter'
            fill='#003549'
            stroke='#000'
          />
        </motion.div>
        <motion.div
          variants={boxFadeInUp}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.5, duration: 0.3 }}
          className='text-white'
        >
          <h1 className='text-center text-h1 font-bold  drop-shadow-[0_0_1px_#003549]'>
            Vincent Durret
          </h1>
          <h2 className='text-center text-h2 font-bold drop-shadow-[0_0_1px_#003549]'>
            Développeur Web
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHome;
