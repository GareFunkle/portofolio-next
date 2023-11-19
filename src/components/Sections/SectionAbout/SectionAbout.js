import Image from "next/image";
import React from "react";

const SectionAbout = () => {
  return (
    <section id='a-propos' className='h-screen max-w-full '>
      <div className='sm:w-2-3 relative left-1/2  top-1/2 box-border flex h-auto w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl  border border-white bg-card-gradient p-12 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:w-2/3 lg:w-2/3  '>
        <div className='p-4 text-white'>
          <h1 className='mb-4 text-h1 font-bold'>Faisons connaissance </h1>
          <Image
            src='/images/vincent-durret.jpg'
            width={1920}
            height={1080}
            className=' float-right h-auto w-1/2 rounded-3xl p-4'
            alt="Vincent Durret's image"
          />
          <p className='mb-4 text-p '>
            Ancien électricien animé par une passion indéniable pour la
            technologie, j'ai opéré un tournant décisif en me lançant dans le
            monde fascinant du développement web. Cette reconversion m'a
            rapidement ouvert les portes des aspects techniques et marketing de
            ce domaine, me permettant ainsi d'affûter mes compétences et de
            devenir un développeur polyvalent.
            <br />
            <br />
            Ma capacité d'adaptation me permet de naviguer aisément entre
            différentes missions : que ce soit en développant des projets avec
            Vue.Js ou en effectuant des intégrations web, je relève chaque défi
            avec une aisance naturelle. Mon esprit logique, ma passion pour les
            casse-têtes et le débogage de codes enrichissent mon approche du
            développement web, me permettant de trouver des solutions créatives
            et efficaces aux problèmes complexes.
          </p>
          <p className='text-p'>
            Mon but ? Poursuivre l'enrichissement de mon savoir-faire et
            embrasser constamment de nouvelles compétences. Déterminé et prêt à
            affronter de nouveaux challenges, je suis enthousiaste à l'idée
            d'apporter ma contribution à des projets innovants et de collaborer
            avec des équipes partageant mon engouement pour la technologie et le
            développement web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
