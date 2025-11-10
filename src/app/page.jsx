import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import WorkSection from "./components/WorkSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkSection />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}