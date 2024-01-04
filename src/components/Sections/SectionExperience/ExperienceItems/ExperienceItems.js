"use client";

import Image from "next/image";
import React, { useState } from "react";
import ExprerienceSite from "../ExperienceSite/ExperienceSite";
import AnimateBox from "@/components/ui/animateBox/AnimateBox";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const wrapperVariants = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const Box = motion(AnimateBox);

const ExperienceItems = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };
  let filteredImages =
    props.selectedCategory === "Tous les projets"
      ? [...props.items]
      : props.items.filter((img) =>
          img.categories.includes(props.selectedCategory)
        );

  if (props.selectedCategory === "Tous les projets") {
    const order = [
      "Wordpress",
      "Shopify",
      "Vue.js",
      "React/Next",
      "Python/Pygames",
    ];
    const orderedImages = [];
    let i = 0;
    while (filteredImages.length > 0) {
      const category = order[i % order.length];
      const index = filteredImages.findIndex((img) =>
        img.categories.includes(category)
      );
      if (index !== -1) {
        orderedImages.push(filteredImages[index]);
        filteredImages.splice(index, 1);
      }
      i++;
    }
    filteredImages = orderedImages;
  }
  return (
    <motion.div
      key={filteredImages.length}
      variants={wrapperVariants}
      initial={"hidden"}
      animate={"visible"}
      className=' grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 '
    >
      {filteredImages.map((item) => (
        <Box key={item.src} variants={boxVariants}>
          <Image
            width={1920}
            height={1080}
            className='h-11/12 w-full cursor-pointer rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  active:scale-95 '
            src={item.src}
            alt=''
            onClick={() => handleClick(item)}
          />

          <h2 className='mt-4 text-p font-semibold  text-white'>{item.name}</h2>
          <p className='mt-2 text-lg font-bold uppercase tracking-wider text-white '>
            {item.categories} <FontAwesomeIcon icon={item.iconCategory} />
          </p>
        </Box>
      ))}
      <AnimatePresence>
        {selectedItem && (
          <ExprerienceSite
            handleClose={handleClose}
            handleClick={handleClick}
            selectedItem={selectedItem}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceItems;
