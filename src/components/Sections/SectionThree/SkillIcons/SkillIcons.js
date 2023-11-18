import React from "react";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faCss3Alt,
  faGithub,
  faHtml5,
  faReact,
  faShopify,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const SkillIcons = () => {
  return (
    <div className='grid w-1/3 grid-cols-4 gap-2  '>
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faReact}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faVuejs}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faWordpress}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faDatabase}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faHtml5}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faCss3Alt}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faShopify}
      />
      <FontAwesomeIcon
        className='w-12 text-white transition-all duration-300 hover:text-green-400'
        icon={faGithub}
      />
    </div>
  );
};

export default SkillIcons;
