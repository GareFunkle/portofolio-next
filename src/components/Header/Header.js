import Link from "next/link";
import React from "react";

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
    <div className=' fixed bottom-0 left-0 z-40 h-28 w-full  bg-transparent  backdrop-blur-sm'>
      <div className='fixed bottom-8 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-lg border border-gray-200 bg-card-gradient text-white '>
        <div className=' mx-auto grid h-full max-w-lg grid-cols-5  '>
          {linksItems.map((link) => (
            <Link
              href={link.href}
              key={link.item}
              className='inline-flex items-center justify-center transition-all duration-300 hover:rounded-lg hover:border hover:border-white'
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
