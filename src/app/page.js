import AboutMe from "./components/aboutMe/page";
import Experience from "./components/experience/page";
import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import HireMe from "./components/hireMe/page";
import Navbar from "./components/navbar/page";
import WhatIDo from "./components/whatIdo/page";

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatIDo />
      <Experience />
      <HireMe />
      <Footer />
    </main>
  );
}
