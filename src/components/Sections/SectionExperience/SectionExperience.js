"use client";

import React, { useState } from "react";
import ExperienceLinks from "./ExperienceLinks/ExperienceLinks";
import ExperienceItems from "./ExperienceItems/ExperienceItems";
import items from "@/db/dbExperience";

const SectionExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");
  const [categories, setCategories] = useState([
    { name: "Tous les projets" },
    { name: "Wordpress" },
    { name: "Shopify" },
    { name: "Vue.js" },
    { name: "React/Next" },
    { name: "Python/Pygames" },
  ]);
  return (
    <section
      id='experiences'
      className='  h-full w-full md:h-full lg:h-[70vh] '
    >
      <div className='container  mx-auto p-4'>
        <h1 className='text-h1 font-semibold text-white'>Experiences</h1>
        <div className='mt-8  lg:flex xl:mt-16'>
          <ExperienceLinks
            category={categories}
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <div className='mx-2 mt-8 flex-1 lg:mx-8 lg:mt-0'>
            <ExperienceItems
              items={items}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
