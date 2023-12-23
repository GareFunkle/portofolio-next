import React from "react";
import ButtonLink from "@/components/ui/buttonLink/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ExperienceSiteContent = (props) => {
  return (
    <div className='mb-4  p-2'>
      <div className='flex flex-row items-center justify-center'>
        <h2 className='px-4  text-h2 font-bold text-white'>
          {props.selectedItem.name ? props.selectedItem.name : ""}
        </h2>
        {props.selectedItem.website ? (
          <Link
            href={props.selectedItem.website}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className='px-4 text-base text-white transition-all duration-300 hover:text-white/40 md:text-2xl'
            />
          </Link>
        ) : (
          ""
        )}
        {props.selectedItem.git ? (
          <Link href={props.selectedItem.git} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              className='px-4 text-base text-white transition-all duration-300 hover:text-[#6e5494] md:text-2xl'
              icon={faGithub}
            />
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className='mb-8 flex items-center justify-center'></div>
      <h3 className='text-h3 text-white'>{props.selectedItem.project}</h3>
      <ul className='list-image-[url(/images/liste/list.png)] p-4 text-p text-white'>
        <li className='p-2'>
          <span className='font-bold text-white/40 '>Objectifs :</span>{" "}
          {props.selectedItem.goals ? props.selectedItem.goals : ""}
        </li>

        <li className='p-2'>
          <span className='font-bold text-white/40'>Developpement : </span>
          {props.selectedItem.dev ? props.selectedItem.dev : ""}
        </li>
        <li className='p-2'>
          <span className='font-bold text-white/40'>Conclusion : </span>
          {props.selectedItem.conclusion ? props.selectedItem.conclusion : ""}
        </li>
      </ul>
    </div>
  );
};

export default ExperienceSiteContent;
