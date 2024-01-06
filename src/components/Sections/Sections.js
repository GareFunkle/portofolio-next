import React from "react";
import Header from "../Header/Header";
import HeaderMobile from "../Header/HeaderMobile/HeaderMobile";
import SectionBanner from "./SectionBanner/SectionBanner";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionSkills from "./SectionSkills/SectionSkills";
import SectionExperience from "./SectionExperience/SectionExperience";
import SectionContact from "./SectionContact/SectionContact";

const Sections = () => {
  return (
    <div>
      <Header />
      <SectionBanner />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience />
      <SectionContact />
    </div>
  );
};

export default Sections;
