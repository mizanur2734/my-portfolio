import React from "react";
import BannerSection from "../../components/BannerSection";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import ContactSection from "../../components/ContactSection";
import Projects from "../../components/Projects";



const Home = () => {
  return (
    <div className="bg-[#011627]">
      <div className="w-11/12 mx-auto md:px-2">
        <BannerSection/>
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
