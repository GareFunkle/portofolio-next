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
          VOUS AVEZ UNE QUESTION, UNE PROPOSITION, UN PROJET OU VOUS VOULEZ
          TRAVAILLER ENSEMBLE SUR QUELQUE CHOSE ? ENVOIE-MOI UN EMAIL
        </p>
        <div className='mb-4 h-[1px] w-1/2 bg-gray-400'></div>
        <div className='flex flex-col items-center justify-center'>
          <Link
            href='https://www.linkedin.com/in/alexandre-roux-6b4b0b1b3/'
            target='_blank'
            rel='noreferrer'
            className=''
          >
            <FontAwesomeIcon icon={faLinkedinIn} className='w-12 text-white' />
          </Link>
          <Link href='#'>
            <FontAwesomeIcon icon={faGithub} className='w-12 text-white' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
