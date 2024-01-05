import React from "react";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LinkButton from "@/components/ui/buttonLink/ButtonLink";

const SectionContact = () => {
  return (
    <section id='contact' className='relative h-[70vh]  w-full md:h-screen  '>
      <div className='flex h-full w-full flex-col items-center justify-center '>
        <h2 className='mb-4 text-h1 font-bold text-white'>Contact</h2>
        <div className='mb-4 h-[1px] w-1/2 bg-gray-400'></div>
        <p className='mb-4 w-full max-w-md text-center text-p  text-white'>
          Vous avez une question, une proposition, un projet ou vous voulez
          travailler ensemble sur quelque chose ?
        </p>
        <LinkButton
          href='mailto:vincent.durret@gmail.com?subject=Site Web '
          className='group relative mb-4 inline-block overflow-hidden rounded border border-white/40  px-12 py-3 text-p font-medium text-white hover:text-white/40 focus:outline-none focus:ring active:bg-my-color active:text-white'
        >
          Dites-moi bonjour 👋
        </LinkButton>
        <p className='mb-4 text-p text-white'>vincent.durret@gmail.com</p>

        <div className='mb-4 h-[1px] w-1/2 bg-gray-400'></div>
        <div className='flex flex-row items-center justify-center'>
          <Link
            href='https://www.linkedin.com/in/vincent-durret-5682a1220/'
            target='_blank'
            rel='noreferrer'
            className='p-4'
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className=' w-12 text-4xl text-white transition-all duration-300 hover:text-[#0e76a8]'
            />
          </Link>
          <Link
            href='https://github.com/Vincent-Durret'
            target='_blank'
            rel='noreferrer'
            className='p-4'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='w-12 text-4xl text-white transition-all duration-300 hover:text-[#6e5494]'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
