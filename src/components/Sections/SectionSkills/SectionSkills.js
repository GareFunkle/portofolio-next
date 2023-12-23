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
import { motion, AnimatePresence } from "framer-motion";

const boxVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const skills = [
  {
    category: "Frontend",
    icons: faHtml5,
    title: "html-5",
  },
  {
    category: "Frontend",
    icons: faCss3Alt,
    title: "CSS-3",
  },
  {
    category: "Frontend",
    icons: faReact,
    title: "React",
  },
  {
    category: "Frontend",
    icons: faVuejs,
    title: "Vue",
  },
  {
    category: "CMS",
    icons: faWordpress,
    title: "Wordpress",
  },
  {
    category: "CMS",
    icons: faShopify,
    title: "Shopify",
  },
  {
    category: "Backend",
    icons: faDatabase,
    title: "Database",
  },
  {
    category: "Other",
    icons: faGithub,
    title: "Github",
  },
];

const SectionSkills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id='competences' className=' mb-16 h-auto w-full'>
      <motion.div
        variant={boxVariants}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className='container mx-auto p-4'
      >
        <h1 className='mb-8 text-h1 font-bold text-white'>Compétences</h1>
        {categories.map((category, index) => (
          <div key={index} className='px-0 md:px-6 lg:px-12'>
            <h2 className='text-h2 font-bold text-white'>{category}</h2>

            <Grid>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className={` h-auto w-1/2  cursor-pointer rounded-md bg-opacity-20 p-4 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-10  hover:backdrop-blur-sm  hover:backdrop-filter  active:scale-95  hover-text-${skill.title.toLowerCase()}`}
                    icon={skill.icons}
                    title={skill.title}
                  />
                ))}
            </Grid>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionSkills;
