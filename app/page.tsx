import AboutSection from "./components/HomePage/AboutSection/AboutSection";
import Contact from "./components/HomePage/Contact/Contact";
import Feeds from "./components/HomePage/Feeds/Feeds";
import Gallery from "./components/HomePage/Gallery/Gallery";
import HeroSection from "./components/HomePage/HeroSection/HeroSection";
import ServiceSection from "./components/HomePage/ServiceSection/ServiceSection";
import Testimonials from "./components/HomePage/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Gallery />
      <Feeds />
      <Testimonials />
      <Contact />
    </main>
  );
}
