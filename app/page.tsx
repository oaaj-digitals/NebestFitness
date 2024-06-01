import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/HomePage/Contact/Contact";
import Feeds from "./components/HomePage/Feeds/newFeeds";
import Gallery from "./components/HomePage/Gallery/Gallery";
import HeroSection from "./components/HomePage/HeroSection/HeroSection";
import ServiceSection from "./components/HomePage/ServiceSection/ServiceSection";
import Testimonials from "./components/HomePage/Testimonials/Testimonials";
import MeetMe from "./components/MeetMe/MeetMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MeetMe btn />
      <ServiceSection />
      <Gallery />
      <Feeds />
      <Testimonials />
      <Contact />
    </main>
  );
}
