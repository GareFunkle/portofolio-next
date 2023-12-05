"use client";

import React, { useState } from "react";
import ExperienceLinks from "./ExperienceLinks/ExperienceLinks";
import ExperienceItems from "./ExperienceItems/ExperienceItems";

const items = [
  {
    categories: ["Wordpress"],
    src: "/images/portofolio/agence-communication-conception-site-internet-Biot-Cannes-Nice-excellium nutrition.jpg",
    name: "Excellium Nutrition",
    project: "Site E-commerce sur WordPress avec WooCommerce",
    goals:
      "Lancement d'un site e-commerce spécialisé dans les compléments alimentaires pour les sportifs.",
    dev: "Le client a choisi WordPress et WooCommerce pour leur flexibilité et leur facilité d'utilisation. J'ai personnellement conçu le site pour qu'il soit non seulement esthétique mais aussi fonctionnel, avec une navigation intuitive et une expérience utilisateur optimale. J'ai intégré des fonctionnalités avancées telles que des filtres de recherche personnalisés, des descriptions détaillées des produits, et un processus de paiement simplifié.",

    conclusion:
      "Ce projet a été une opportunité formidable pour allier mes compétences en développement web.",
    imgSite: "/images/portofolio/website/excellium-nutrition.png",
    website: "https://www.excellium-nutrition.com/",
  },
  {
    categories: ["Wordpress"],
    src: "/images/portofolio/agence-communication-conception-site-web-shooting-photo-nice-cannes-city-weed-cbd.jpg",
    name: "City Weed",
    imgSite: "/images/portofolio/website/cityweed-cbd.png",
    website: "https://cityweed-cbd.com/",
  },
  {
    categories: ["Shopify"],
    src: "/images/portofolio/agence-digitale-conception-site-e-commerce--mougin-impact-cbd-shop.jpg",
    name: "Impact CBD Shop",
    goals:
      "Lancement d'un site e-commerce specialiser dans la vente de produits a base CBD ",
    dev: "Dans le cadre de ce projet, j'ai conseillé le client sur l'utilisation de Shopify, le CMS e-commerce leader sur le marché. Nous avons commencé avec un thème vierge, ce qui m'a permis de reconstruire entièrement le site selon les besoins spécifiques du client. J'ai personnalisé le site en créant divers plugins pour améliorer l'expérience utilisateur. Parmi ceux-ci, un carrousel dynamique pour présenter les produits de manière attrayante et une fonctionnalité de zoom inspirée d'Amazon pour les images des produits. Ce projet Shopify a été une excellente occasion de démontrer mes compétences en développement web, ma capacité à personnaliser des solutions e-commerce, et mon engagement à fournir une expérience utilisateur de haute qualité. La réussite de ce projet reflète mon expertise dans la création de sites e-commerce performants et conviviaux.",
    conclusion:
      "Ce projet sur Shopify a été une expérience enrichissante et un témoignage de ma capacité à guider les clients vers les meilleures solutions e-commerce. En partant d'un thème vierge, j'ai pu concevoir un site qui non seulement répond aux attentes spécifiques du client mais qui les dépasse, en intégrant des fonctionnalités innovantes et personnalisées. Chaque plugin développé, de la fonctionnalité de zoom sur les images des produits au carrousel interactif, a contribué à créer une interface utilisateur intuitive et une expérience d'achat attrayante. Ce succès souligne mon engagement envers l'excellence dans le développement web et ma passion pour la création de solutions e-commerce qui allient esthétique, fonctionnalité et performance. Ce projet est un exemple clé de mon expertise dans la conception de sites e-commerce qui non seulement attirent les clients, mais les fidélisent également.",

    imgSite: "/images/portofolio/website/impact-cbd-shop.png",
    website: "https://impact-cbd.fr/",
  },
  {
    categories: ["Vue.js"],
    src: "/images/portofolio/agence-digitale-community-management-Nice-antibes-cannes-univers-terrasses-bois.jpg",
    name: "Univers Terrasses Bois Stock",
    git: "https://github.com/Vincent-Durret/UTB-Stock.git",
    imgSite: "/images/portofolio/website/utb-stock.png",
  },
  {
    categories: ["React/Next"],
    src: "/images/portofolio/logo_big_givi.png",
    name: "GIVI Agence Digitale",
    git: "https://github.com/Vincent-Durret/givi-agence-digitale-next.git",
    imgSite: "/images/portofolio/website/givi-agence-digitale.png",
  },
  {
    categories: ["Python/Pygames"],
    src: "/images/portofolio/logo-traveler.png",
    name: "Traveler Game",
    git: "https://github.com/Vincent-Durret/work-traveler.git",
    imgSite: "/images/portofolio/website/traveler.png",
  },
];

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
      className='  h-full w-full md:h-full lg:h-screen '
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
