"use client";

import React, { useState } from "react";
import ExperienceLinks from "./ExperienceLinks/ExperienceLinks";
import ExperienceItems from "./ExperienceItems/ExperienceItems";

const SectionExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");
  const [categories, setCategories] = useState([
    { name: "Tous les projets" },
    { name: "Wordpress" },
    { name: "Shopify" },
    { name: "Vue.js" },
    { name: "React" },
    { name: "Next" },
  ]);
  const items = [
    {
      categories: ["Wordpress"],
      src: "/images/portofolio/agence-communication-conception-site-internet-Biot-Cannes-Nice-excellium nutrition.jpg",
      name: "Excellium Nutrition",
      imgSite: "/images/portofolio/website/2.png",
    },
    {
      categories: ["Wordpress"],
      src: "/images/portofolio/agence-communication-conception-site-web-shooting-photo-nice-cannes-city-weed-cbd.jpg",
      name: "City Weed",
      imgSite: "/images/portofolio/website/1.png",
    },
    {
      categories: ["Wordpress"],
      src: "/images/portofolio/agence-digitale-community-management-Nice-antibes-cannes-univers-terrasses-bois.jpg",
      name: "Univers Terrasses Bois",
      imgSite: "/images/portofolio/website/1.png",
    },
    {
      categories: ["Shopify"],
      src: "/images/portofolio/agence-digitale-conception-site-e-commerce--mougin-impact-cbd-shop.jpg",
      name: "Impact CBD Shop",
      imgSite: "/images/portofolio/website/1.png",
    },
  ];
  return (
    <section id='experiences' className=' w-full '>
      <div className='container mx-auto p-4'>
        <h1 className='text-h1 font-semibold text-white'>Experiences</h1>

        <div className='mt-8 lg:-mx-12 lg:flex xl:mt-16'>
          <ExperienceLinks
            category={categories}
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          <div className='mt-8 flex-1 lg:mx-12 lg:mt-0'>
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
