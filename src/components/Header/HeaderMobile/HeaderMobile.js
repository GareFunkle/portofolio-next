import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const linksItems = [
  { name: "Accueil", icon: faHome, link: "/", aria: "Accueil" },
  { name: "À propos", icon: faUser, link: "#a-propos", aria: "À propos" },
  {
    name: "Compétences",
    icon: faDumbbell,
    link: "#competences",
    aria: "Compétences",
  },
  {
    name: "Experiences",
    icon: faBriefcase,
    link: "#experiences",
    aria: "Experiences",
  },
  { name: "Contact", icon: faEnvelope, link: "#contact", aria: "Contact" },
];

const HeaderMobile = () => {
  return (
    <div>
      <div className='fixed left-1/2 top-8 z-50 h-16 w-11/12 max-w-lg -translate-x-1/2 rounded-lg border border-gray-200 bg-[#151515] text-white md:z-40 md:hidden '>
        <div className='relative top-1/2 block  -translate-y-1/2  md:hidden '>
          <div className='flex items-center justify-between p-4 '>
            {linksItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                aria-label={item.aria}
                className='border border-transparent p-2 transition-all duration-300 hover:rounded-lg hover:border hover:border-white'
              >
                <FontAwesomeIcon icon={item.icon} className='block w-8' />{" "}
                <span className='hidden'>{item.name}</span>{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
