import React from "react";
import ButtonLink from "@/components/ui/buttonLink/ButtonLink";

const ExperienceSiteContent = (props) => {
  return (
    <div className='mb-4  p-2'>
      <h2 className='mb-4 text-center text-h2 font-bold text-white underline underline-offset-8'>
        {props.selectedItem.name ? props.selectedItem.name : ""}
      </h2>
      <h3 className='text-h3 text-white'>{props.selectedItem.project}</h3>
      <p className='py-2 text-p text-white'>
        <span className='font-bold text-white/40 '>Objectifs :</span>{" "}
        {props.selectedItem.goals ? props.selectedItem.goals : ""}
      </p>
      <p className='py-2 text-p text-white'>
        <span className='font-bold text-white/40'>Developpement :</span>{" "}
        {props.selectedItem.dev ? props.selectedItem.dev : ""}
      </p>
      <p className='py-2 text-p text-white'>
        {props.selectedItem.personalization
          ? props.selectedItem.personalization
          : ""}
      </p>
      <p className='py-2 text-p text-white'>
        {props.selectedItem.conclusion ? props.selectedItem.conclusion : ""}
      </p>
      <ButtonLink
        href={props.selectedItem.website ? props.selectedItem.website : "#"}
        target='_blank'
        rel='noreferrer'
        className='group relative mb-4 inline-block overflow-hidden rounded border border-white/40  px-12 py-3 text-p font-medium text-white hover:text-white/40 focus:outline-none focus:ring active:bg-my-color active:text-white'
      >
        <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-300 group-hover:w-full'></span>
        <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-300 group-hover:h-full'></span>
        <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full'></span>
        <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-300 group-hover:h-full'></span>
        Voir le site
      </ButtonLink>
    </div>
  );
};

export default ExperienceSiteContent;
