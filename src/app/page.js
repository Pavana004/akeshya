import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import HomeSection from "./components/HomeSection";
import OurCoreProcess from "./components/OurCoreProcess";
import OurProcess from "./components/OurProcess";
import Service from "./components/Service";
import TopArrow from "./components/TopArrow";

export default function Home() {
  return (
    <>
      <HomeSection />
      <Client />
      <TopArrow />
      <About />
      <Service />
      <OurProcess />
      <OurCoreProcess />
      <Contact />
    </>
  );
}
