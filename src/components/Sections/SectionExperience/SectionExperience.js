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
    { name: "React/Next" },
  ]);
  const items = [
    {
      categories: ["Wordpress"],
      src: "/images/portofolio/agence-communication-conception-site-internet-Biot-Cannes-Nice-excellium nutrition.jpg",
      name: "Excellium Nutrition",
      project: "Site E-commerce sur WordPress avec WooCommerce",
      goals:
        "Lancement d'un site e-commerce spécialisé dans les compléments alimentaires pour les sportifs.",
      dev: "J'ai choisi WordPress et WooCommerce pour leur flexibilité et leur facilité d'utilisation. J'ai personnellement conçu le site pour qu'il soit non seulement esthétique mais aussi fonctionnel, avec une navigation intuitive et une expérience utilisateur optimale. J'ai intégré des fonctionnalités avancées telles que des filtres de recherche personnalisés, des descriptions détaillées des produits, et un processus de paiement simplifié.",
      personalization:
        "Le branding d'Excellium Nutrition a été une priorité, avec un design qui reflète l'énergie et la vitalité du monde sportif. J'ai également mis en place un blog intégré pour partager des conseils en nutrition sportive et des actualités liées au fitness, renforçant ainsi l'engagement de la communauté.",
      conclusion:
        "Ce projet a été une opportunité formidable pour allier mes compétences en développement web avec ma passion pour le sport et la nutrition. Excellium Nutrition n'est pas seulement un site e-commerce, c'est une plateforme qui soutient la performance et le bien-être des sportifs.",
      imgSite: "/images/portofolio/website/2.png",
      website: "https://www.excellium-nutrition.com/",
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
    <section id='experiences' className='  h-auto w-full md:h-screen '>
      <div className='container  mx-auto p-4'>
        <h1 className='text-h1 font-semibold text-white'>Experiences </h1>

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
