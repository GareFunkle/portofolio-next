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
        <p className='mb-4 text-center text-p  text-white'>
          Vous avez une question, une proposition, un projet ou vous voulez
          travailler ensemble sur quelque chose ?
        </p>
        <Link
          href='mailto:vincent.durret@gmail.com?subject=Site Web '
          className='mb-4 border-b text-h3 text-white transition-all duration-300 hover:border-b-[#003549]'
        >
          Envoyer moi un email
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
