"use client";

import Image from "next/image";
import React, { useState } from "react";
import ExprerienceSite from "../ExperienceSite/ExperienceSite";

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
    const order = ["Wordpress", "Shopify", "Vue.js", "React/Next"];
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
    <div className=' grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 '>
      {filteredImages.map((item) => (
        <div key={item.src}>
          <Image
            width={1920}
            height={1080}
            className='h-96 w-full cursor-pointer rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_#003549]  active:scale-95 '
            src={item.src}
            alt=''
            onClick={() => handleClick(item)}
          />

          <h2 className='mt-4 text-p font-semibold  text-white'>{item.name}</h2>
          <p className='mt-2 text-lg font-bold uppercase tracking-wider text-white '>
            {item.categories}
          </p>
        </div>
      ))}
      {selectedItem && (
        <ExprerienceSite
          handleClose={handleClose}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default ExperienceItems;
