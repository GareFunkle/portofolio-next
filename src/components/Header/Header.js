import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const linksItems = [
  {
    item: "À propos",
    href: "#a-propos",
  },
  {
    item: "Compétences",
    href: "#competences",
  },
  {
    item: "Experiences",
    href: "#experiences",
  },
  {
    item: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <div>
      <div className='fixed bottom-0 left-0 z-40 h-48 w-full backdrop-blur  gradient-mask-t-0'></div>
      <div className='fixed bottom-8 left-1/2 z-50 h-16  w-full max-w-lg -translate-x-1/2 rounded-lg border border-gray-200 bg-[#151515] text-white '>
        <div className='relative top-1/2 flex -translate-y-1/2 items-center justify-between p-2 '>
          <Link
            href='#'
            className=' w-8 border border-transparent p-2 transition-all  duration-300 hover:rounded-lg hover:border hover:border-white'
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Link>
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
  );
};

export default Header;
