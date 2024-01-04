import React from "react";
import Grid from "@/components/ui/grid/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import skills from "@/db/dbSkills";

const boxVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

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
