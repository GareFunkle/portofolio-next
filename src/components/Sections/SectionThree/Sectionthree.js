import React from "react";
import Grid from "@/components/ui/grid/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faReact,
  faReddit,
  faShopify,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Sectionthree = () => {
  return (
    <section id='competences' className=' mt-16 h-auto w-full p-24'>
      <h1 className='text-h1 mb-8 font-bold text-white'>Compétences</h1>
      <h2 className='text-h2 font-bold text-white'>Frontend</h2>
      <Grid>
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#e34c26] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faHtml5}
        />
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#264de4] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faCss3Alt}
        />
        <FontAwesomeIcon
          className='h-auto  w-24  rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#61dbfb] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faReact}
        />
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#41B883] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faVuejs}
        />
      </Grid>
      <h2 className='text-h2 font-bold text-white'>CMS</h2>
      <Grid>
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#00749C] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faWordpress}
        />
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#96bf48] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faShopify}
        />
      </Grid>
      <h2 className='text-h2 font-bold text-white'>Backend</h2>
      <Grid>
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md bg-opacity-20 p-4 text-white  transition-all  duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#0070f3] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faDatabase}
        />
      </Grid>

      <h2 className='text-h2 font-bold text-white'>Other</h2>
      <Grid>
        <FontAwesomeIcon
          className='h-auto w-24 rounded-md p-4 text-white transition-all  duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#171515] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faGithub}
        />

        <FontAwesomeIcon
          className='h-auto w-24 rounded-md p-4 text-white transition-all  duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#FF5700] hover:backdrop-blur-sm hover:backdrop-filter'
          icon={faReddit}
        />
      </Grid>
    </section>
  );
};

export default Sectionthree;
