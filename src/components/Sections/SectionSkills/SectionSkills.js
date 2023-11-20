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

const SectionSkills = () => {
  return (
    <section id='competences' className=' mb-16 h-auto w-full'>
      <div className='container mx-auto p-4'>
        <h1 className='mb-8 text-h1 font-bold text-white'>Compétences</h1>
        <h2 className='text-h2 font-bold text-white'>Frontend</h2>
        <Grid>
          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#e34c26] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faHtml5}
            title='HTML 5'
          />

          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all duration-300  hover:scale-105  hover:bg-white  hover:bg-opacity-10 hover:text-[#264de4] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faCss3Alt}
            title='CSS 3'
          />
          <FontAwesomeIcon
            className='h-auto  w-24  cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#61dbfb] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faReact}
            title='React.js'
          />
          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#41B883] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faVuejs}
            title='Vue.js'
          />
        </Grid>
        <h2 className='text-h2 font-bold text-white'>CMS</h2>
        <Grid>
          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#00749C] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faWordpress}
            title='Wordpress'
          />
          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#96bf48] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faShopify}
            title='Shopify'
          />
        </Grid>
        <h2 className='text-h2 font-bold text-white'>Backend</h2>
        <Grid>
          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  bg-opacity-20 p-4 text-white transition-all  duration-300  hover:scale-105  hover:bg-white hover:bg-opacity-10 hover:text-[#0070f3] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faDatabase}
            title='Database'
          />
        </Grid>

        <h2 className='text-h2 font-bold text-white'>Other</h2>
        <Grid>
          <FontAwesomeIcon
            className='h-auto w-24  cursor-pointer rounded-md p-4 text-white transition-all duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#171515] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faGithub}
            title='Github'
          />

          <FontAwesomeIcon
            className='h-auto w-24 cursor-pointer rounded-md  p-4 text-white transition-all duration-300  hover:scale-105 hover:bg-white hover:bg-opacity-10 hover:text-[#FF5700] hover:backdrop-blur-sm hover:backdrop-filter active:scale-95'
            icon={faReddit}
            title='Reddit'
          />
        </Grid>
      </div>
    </section>
  );
};

export default SectionSkills;
