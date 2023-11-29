import React from "react";
import ButtonLink from "@/components/ui/buttonLink/ButtonLink";

const ExperienceSiteContent = (props) => {
  return (
    <div className='mb-4  p-2'>
      <div className='flex items-center justify-center'>
        <h2 className='mb-8 rounded-lg bg-my-color p-2 text-center text-h2 font-bold text-white'>
          {props.selectedItem.name ? props.selectedItem.name : ""}
        </h2>
      </div>
      <h3 className='text-h3 text-white'>{props.selectedItem.project}</h3>
      <ul className='list-image-[url(/images/liste/list.png)] p-4 text-p text-white'>
        <li className='p-2'>
          <span className='font-bold text-white/40 '>Objectifs :</span>{" "}
          {props.selectedItem.goals ? props.selectedItem.goals : ""}
        </li>
        <li className='p-2'>
          <span className='font-bold text-white/40'>Developpement :</span>{" "}
          {props.selectedItem.dev ? props.selectedItem.dev : ""}
        </li>
        <li className='p-2'>
          <span className='font-bold text-white/40'>Personalisation : </span>
          {props.selectedItem.personalization
            ? props.selectedItem.personalization
            : ""}
        </li>
        <li className='p-2'>
          <span className='font-bold text-white/40'>Conclusion : </span>
          {props.selectedItem.conclusion ? props.selectedItem.conclusion : ""}
        </li>
      </ul>

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
