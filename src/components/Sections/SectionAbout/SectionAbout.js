import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AnimateBox from "@/components/ui/animateBox/AnimateBox";
import { wrap } from "gsap";

const boxVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const wrapperVariants = {
  hidden: { opacity: 0, y: 100, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const Box = motion(AnimateBox);

const SectionAbout = () => {
  return (
    <section
      id='a-propos'
      className='  flex h-full max-w-full items-center justify-center px-4 py-24 '
    >
      <motion.div
        variants={wrapperVariants}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className='  container mx-auto box-border  h-auto max-w-full rounded-xl border border-white bg-card-gradient p-4  backdrop-blur-xl sm:w-full md:w-full md:p-12 lg:w-9/12 '
      >
        <Box variants={boxVariants} className='p-4 text-white'>
          <h1 className='mb-4 text-h1 font-bold text-white'>
            Faisons connaissance
          </h1>
          <Box variants={boxVariants}>
            <Image
              src='/images/vincent-durret.webp'
              width={1920}
              height={1080}
              className=' float-right mb-6 h-full w-full rounded-3xl p-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]  sm:w-2/3 md:w-1/2  lg:w-1/2'
              alt="Vincent Durret's image"
            />
          </Box>
          <Box variants={boxVariants}>
            <p className='mb-4 text-p text-white '>
              Ma passion pour l&apos;apprentissage et l&apos;innovation me guide
              aujourd&apos;hui vers une nouvelle aventure passionnante : le
              développement web. Cette aspiration reflète mon désir de
              m&apos;engager dans un domaine à la fois créatif et technologique,
              où je peux constamment évoluer et relever de nouveaux défis.
              <br />
              <br />
              Bien que mon parcours professionnel ait débuté dans des domaines
              variés, c&apos;est la technologie et le potentiel infini du web
              qui captivent désormais toute mon attention. Ma capacité à
              apprendre rapidement, ma créativité et mon esprit d&apos;analyse
              sont des atouts que je suis impatient de mettre en œuvre dans le
              développement web.
            </p>
            <Box variants={boxVariants}>
              <p className='text-p text-white'>
                Je suis enthousiaste à l&apos;idée de fusionner mes compétences
                acquises avec les connaissances spécifiques au développement
                web, me permettant d&apos;apporter une perspective unique et
                innovante à ce secteur. Mon objectif est de devenir un
                développeur web polyvalent, capable de s&apos;adapter aux
                évolutions rapides de cette industrie et de contribuer
                activement à la création de solutions digitales pertinentes.
              </p>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </section>
  );
};

export default SectionAbout;
