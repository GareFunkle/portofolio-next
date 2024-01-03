import {
  faCss3Alt,
  faGithub,
  faPython,
  faHtml5,
  faReact,
  faReddit,
  faShopify,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "Frontend",
    icons: faHtml5,
    title: "html-5",
  },
  {
    category: "Frontend",
    icons: faCss3Alt,
    title: "CSS-3",
  },
  {
    category: "Frontend",
    icons: faReact,
    title: "React",
  },
  {
    category: "Frontend",
    icons: faVuejs,
    title: "Vue",
  },
  {
    category: "CMS",
    icons: faWordpress,
    title: "Wordpress",
  },
  {
    category: "CMS",
    icons: faShopify,
    title: "Shopify",
  },
  {
    category: "Backend",
    icons: faDatabase,
    title: "Database",
  },
  {
    category: "Backend",
    icons: faPython,
    title: "Python",
  },
  {
    category: "Other",
    icons: faGithub,
    title: "Github",
  },
];

export default skills;
