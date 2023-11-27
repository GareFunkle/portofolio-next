import React from "react";
import Grid from "@/components/ui/grid/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faReact,
  faReddit,
  faShopify,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "Frontend",
    icons: faHtml5,
    title: "html-5",
    hoverColor: "#e34c26",
  },
  {
    category: "Frontend",
    icons: faCss3Alt,
    title: "CSS-3",
    hoverColor: "#264de4",
  },
  {
    category: "Frontend",
    icons: faReact,
    title: "React",
    hoverColor: "#61dbfb",
  },
  {
    category: "Frontend",
    icons: faVuejs,
    title: "Vue",
    hoverColor: "#41B883",
  },
  {
    category: "CMS",
    icons: faWordpress,
    title: "Wordpress",
    hoverColor: "#00749C",
  },
  {
    category: "CMS",
    icons: faShopify,
    title: "Shopify",
    hoverColor: "#96bf48",
  },
  {
    category: "Backend",
    icons: faDatabase,
    title: "Database",
    hoverColor: "#0070f3",
  },
  {
    category: "Other",
    icons: faGithub,
    title: "Github",
    hoverColor: "#171515",
  },
  {
    category: "Other",
    icons: faReddit,
    title: "Reddit",
    hoverColor: "#FF5700",
  },
];

const SectionSkills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id='competences' className=' mb-16 h-auto w-full'>
      <div className='container mx-auto p-4'>
        <h1 className='mb-8 text-h1 font-bold text-white'>Compétences </h1>
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className='text-h2 font-bold text-white'>{category}</h2>
            <div className='grid w-full grid-cols-4 gap-8 sm:grid-cols-4 sm:gap-12 md:grid-cols-6 md:gap-10 lg:grid-cols-8 lg:gap-12'>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className={`h-auto w-16 cursor-pointer rounded-md bg-opacity-20 p-4 text-white transition-all duration-300 hover:scale-105 hover:bg-white  hover:bg-opacity-10  hover:backdrop-blur-sm  hover:backdrop-filter active:scale-95 sm:w-16 md:w-24 lg:w-20 hover-text-${skill.title.toLowerCase()}`}
                    icon={skill.icons}
                    title={skill.title}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
