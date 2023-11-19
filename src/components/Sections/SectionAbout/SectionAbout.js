import Image from "next/image";
import React from "react";

const SectionAbout = () => {
  return (
    <section
      id='a-propos'
      className=' flex max-w-full items-center justify-center p-4 '
    >
      <div className='  box-border  h-auto w-2/3 rounded-xl    border border-white  bg-card-gradient p-12 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:w-5/6 '>
        <div className='p-4 text-white'>
          <h1 className='mb-4 text-h1 font-bold'>Faisons connaissance </h1>
          <Image
            src='/images/vincent-durret.jpg'
            width={1920}
            height={1080}
            className=' float-right  h-auto w-1/2  rounded-3xl p-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'
            alt="Vincent Durret's image"
          />
          <p className='mb-4 text-xl '>
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
          <p className='text-xl'>
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
