import Header from "@/components/Header/Header";
import SectionContact from "@/components/Sections/SectionContact/SectionContact";
import SectionExperience from "@/components/Sections/SectionExperience/SectionExperience";
import SectionHome from "@/components/Sections/SectionHome/SectionHome";
import SectionSkills from "@/components/Sections/SectionSkills/SectionSkills";
import SectionAbout from "@/components/Sections/SectionAbout/SectionAbout";
import HeaderMobile from "@/components/Header/HeaderMobile/HeaderMobile";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience />
      <SectionContact />
    </div>
  );
};

export default Home;
