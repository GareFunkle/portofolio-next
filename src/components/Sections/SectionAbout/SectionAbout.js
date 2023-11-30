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
              src='/images/vincent-durret.jpg'
              width={1920}
              height={1080}
              className=' float-right h-full  w-full rounded-3xl p-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]  sm:w-2/3 md:w-1/2  lg:w-1/2'
              alt="Vincent Durret's image"
            />
          </Box>
          <Box variants={boxVariants}>
            <p className='mb-4 text-p text-white '>
              Ancien électricien animé par une passion indéniable pour la
              technologie, j'ai opéré un tournant décisif en me lançant dans le
              monde fascinant du développement web. Cette reconversion m'a
              rapidement ouvert les portes des aspects techniques et marketing
              de ce domaine, me permettant ainsi d'affûter mes compétences et de
              devenir un développeur polyvalent.
              <br />
              <br />
              Ma capacité d'adaptation me permet de naviguer aisément entre
              différentes missions : que ce soit en développant des projets avec
              Vue.Js ou en effectuant des intégrations web, je relève chaque
              défi avec une aisance naturelle. Mon esprit logique, ma passion
              pour les casse-têtes et le débogage de codes enrichissent mon
              approche du développement web, me permettant de trouver des
              solutions créatives et efficaces aux problèmes complexes.
            </p>
            <Box variants={boxVariants}>
              <p className='text-p text-white'>
                Mon but ? Poursuivre l'enrichissement de mon savoir-faire et
                embrasser constamment de nouvelles compétences. Déterminé et
                prêt à affronter de nouveaux challenges, je suis enthousiaste à
                l'idée d'apporter ma contribution à des projets innovants et de
                collaborer avec des équipes partageant mon engouement pour la
                technologie et le développement web.
              </p>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </section>
  );
};

export default SectionAbout;
