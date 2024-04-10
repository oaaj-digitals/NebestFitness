import AboutSection from "./components/HomePage/AboutSection/AboutSection";
import Gallery from "./components/HomePage/Gallery/Gallery";
import HeroSection from "./components/HomePage/HeroSection/HeroSection";
import ServiceSection from "./components/HomePage/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Gallery />
    </main>
  );
}
