import AboutSectionOne from "@/Components/About/AboutSectionOne";
import AboutSectionTwo from "@/Components/About/AboutSectionTwo";
import Contact from "@/Components/Contact";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <>
     <Hero />
     <Features />
     <AboutSectionOne />
     <AboutSectionTwo />
     <Testimonials />
     <Contact />
    </>
  );
}
