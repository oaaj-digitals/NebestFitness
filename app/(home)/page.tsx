import AboutSection from "../components/AboutSection/AboutSection";
import Contact from "../components/HomePage/Contact/Contact";
import Feeds from "../components/HomePage/Feeds/Feeds";
import Gallery from "../components/HomePage/Gallery/Gallery";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import MerchSection from "../components/HomePage/MerchSection/MerchSection";
import ServiceSection from "../components/HomePage/ServiceSection/ServiceSection";
import Testimonials from "../components/HomePage/Testimonials/Testimonials";
import MeetMe from "../components/MeetMe/MeetMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MeetMe btn />
      <ServiceSection />
      <MerchSection />
      <Gallery />
      <Feeds />
      <Testimonials />
      <Contact />
    </main>
  );
}
