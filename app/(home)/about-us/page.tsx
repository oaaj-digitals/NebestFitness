import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import MeetMe from '../../components/MeetMe/MeetMe';
import AboutGallery from '../../components/AboutGallery/AboutGallery';
import AboutAdditionals from '../../components/AboutAdditionals/AboutAdditionals';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nebestfitness.com'),
  title: "About Us"
};

const AboutPage = () => {
  return (
    <main>
      <AboutSection />
      <MeetMe />
      <AboutGallery />
      <AboutAdditionals />
    </main>
  );
};

export default AboutPage;