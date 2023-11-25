import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SectionContact = () => {
  return (
    <section id='contact' className='h-[90vh] w-full '>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <h2 className='mb-4 text-h1 font-bold text-white'>Contact</h2>
        <div className='mb-4 h-[1px] w-1/2 bg-gray-400'></div>
        <p className='mb-4 max-w-screen-sm text-center text-p  text-white'>
          Vous avez une question, une proposition, un projet u vous voulez
          travailler ensemble sur quelque chose ?
        </p>
        <Link
          href='mailto:vincent.durret@gmail.com?subject=Site Web '
          className='group relative mb-4 inline-block overflow-hidden rounded border border-white  px-12 py-3 text-p font-medium text-white hover:text-violet-600 focus:outline-none focus:ring active:bg-my-color active:text-white'
        >
          <span class='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-300 group-hover:w-full'></span>
          <span class='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-300 group-hover:h-full'></span>
          <span class='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-300 group-hover:w-full'></span>
          <span class='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-300 group-hover:h-full'></span>
          Dite moi bonjour 👋
        </Link>

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
              className=' w-12 text-white transition-all duration-300 hover:text-[#0e76a8]'
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
              className='w-12 text-white transition-all duration-300 hover:text-[#171515]'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
