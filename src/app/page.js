import Header from "@/components/Header/Header";
import SectionFive from "@/components/Sections/SectionFive/SectionFive";
import SectionFour from "@/components/Sections/SectionFour/SectionFour";
import SectionOne from "@/components/Sections/SectionOne/SectionOne";
import Sectionthree from "@/components/Sections/SectionThree/Sectionthree";
import SectionTwo from "@/components/Sections/SectionTwo/SectionTwo";

const Home = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <Sectionthree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
