import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import HeaderIcons from "./Header/HeaderIcons";

const linksItems = [
  {
    item: "Accueil",
    href: "#",
  },

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
      <HeaderIcons />
      <div className='fixed bottom-0 left-0 z-40  h-48 w-full backdrop-blur  gradient-mask-t-0'></div>
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

export default Header;
