import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      duration: 0.9,
    },
  },
};

const HeaderIcons = () => {
  return (
    <motion.div
      variants={boxVariants}
      initial={"hidden"}
      animate={"visible"}
      className='fixed bottom-0 left-10 z-30 hidden md:block'
    >
      <div className='rounded-t-lg bg-white/20 backdrop-blur-lg '>
        <div className='flex flex-col items-center justify-center space-y-6  px-2 pt-2 '>
          <Link
            href='https://github.com/Vincent-Durret'
            target='_blank'
            rel='noreferrer'
            className='text-2xl text-white transition-all duration-300 hover:-translate-y-1'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='w-8  transition-all duration-300 hover:text-[#6e5494]'
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/vincent-durret-5682a1220/'
            target='_blank'
            rel='noreferrer'
            className='text-2xl text-white transition-all duration-300 hover:-translate-y-1'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='w-8 transition-all duration-300 hover:text-[#0e76a8]'
            />
          </Link>

          <div className='relative h-24 w-px bg-white'>
            <div className='absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-white'></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderIcons;
