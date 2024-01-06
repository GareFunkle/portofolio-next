import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import HeaderBlur from "../HeaderBlur/HeaderBlur";
import linksItems from "@/db/LinksItems";

const HeaderDesktop = () => {
  return (
    <div>
      <HeaderBlur />
      <div className='fixed bottom-8 left-1/2 z-50 hidden h-16 w-full max-w-xl -translate-x-1/2 rounded-lg border border-gray-200 bg-[#151515] text-white md:z-50 md:block '>
        <div className='relative top-1/2  -translate-y-1/2 p-2  '>
          <div className=' flex items-center justify-between  '>
            {linksItems.map((link) => (
              <Link
                href={link.href}
                key={link.item}
                className=' border border-transparent p-2 transition-all  duration-300 hover:rounded-lg hover:border hover:border-white'
              >
                {link.item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
