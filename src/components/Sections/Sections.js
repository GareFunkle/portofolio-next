import React from "react";
import Header from "../Header/Header";
import HeaderMobile from "../Header/HeaderMobile/HeaderMobile";
import SectionHome from "./SectionHome/SectionHome";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionSkills from "./SectionSkills/SectionSkills";
import SectionExperience from "./SectionExperience/SectionExperience";
import SectionContact from "./SectionContact/SectionContact";

const Sections = () => {
  return (
    <div>
      <Header />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience />
      <SectionContact />
    </div>
  );
};

export default Sections;
