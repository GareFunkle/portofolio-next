import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VDLogo from "../../../public/images/logo/vd.svg";

const logoAnimation = {
  hidden: {
    opacity: 0,
    x: -1000,
    rotate: -360,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 360, // Faire tourner le logo de 360 degrés
    transition: {
      duration: 2,
      ease: "easeInOut", // Ajouter une fonction d'atténuation pour une transition plus douce
    },
  },
};

const firstTextAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const secondTextAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const pageAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      delay: 2, // Ajustez ce délai pour qu'il corresponde à la fin de l'animation du logo
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const LoadingAnimation = ({ onDone }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial={"hidden"}
      animate={"visible"}
      className='overflow-none '
    >
      <div className=' h-screen w-screen bg-black'>
        <div className='relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex flex-col items-center justify-center'>
            <motion.div
              style={{ transformOrigin: "50% 43%" }}
              variants={logoAnimation}
              onAnimationComplete={onDone}
              animate={"visible"}
              initial={"hidden"}
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
              variants={firstTextAnimation}
              initial={"hidden"}
              animate={"visible"}
            >
              <h1 className='text-center text-h1 font-bold text-white '>
                Vincent Durret
              </h1>
              <motion.div
                variants={secondTextAnimation}
                initial={"hidden"}
                animate={"visible"}
              >
                <h2 className='text-center text-h2 font-bold text-white'>
                  Développeur Web
                </h2>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
