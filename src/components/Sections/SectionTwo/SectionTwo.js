import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div id='a-propos' className='relative h-screen w-full '>
      <div className='relative left-[50%] top-[50%]  box-border flex h-auto w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white bg-card-gradient p-12  '>
        <div className='flex w-96 flex-1 flex-col p-4 text-white'>
          <h1 className='mb-4 text-h1 font-bold'>Faisons connaissance </h1>
          <p className='mb-4 text-p'>
            Ancien électricien avec une passion profonde pour la technologie,
            j'ai choisi de me reconvertir dans le développement web. Très
            rapidement, j'ai été captivé par les aspects techniques et
            marketing, développant ainsi mes compétences. Je me considère comme
            un professionnel polyvalent, capable de m'adapter à diverses
            missions. Je peux, par exemple, travailler sur un projet en
            utilisant Vue.Js, puis réaliser une intégration web, sans aucune
            difficulté. Mon objectif est de continuer à enrichir mon expertise
            et d'acquérir de nouvelles compétences dans ce domaine.
          </p>
          <p className='text-p'>
            Déterminé et prêt à affronter de nouveaux challenges, je suis
            enthousiaste à l'idée d'apporter ma contribution à des projets
            innovants et de collaborer avec des équipes partageant mon
            engouement pour la technologie et le développement web.
          </p>
        </div>
        <div className='w-48 flex-1'>
          <Image
            src='/images/vincent-durret.jpg'
            width={1920}
            height={1280}
            className=' h-auto w-full rounded-xl grayscale'
            alt="Vincent Durret's image"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
