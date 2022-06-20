import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Components
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Overview from '../components/Overview/Overview';
import HeroSection from '../components/HeroSection/HeroSection';
import Trailer from '../components/Trailer/Trailer';
import Investors from '../components/Investors/Investors';
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="main">
      <Hero />
      <Header />
      <div className="innerContainer">
        <HeroSection />
        <Overview />
        <Trailer />
        <Roadmap />
        <Team />
        <Investors />
      </div>
    </div>
  );
};

export default LandingPage;
