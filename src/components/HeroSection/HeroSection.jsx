import React from 'react';
import { Link } from 'react-scroll';
import './HeroSection.scss';

// Components
import HeroBg from './HeroBg/HeroBg';

const HeroSection = () => {
  return (
    <>
      <section className="heroSection" id="herosection">
        <HeroBg />
        <div className="innerHeroContainer">
          <div className="scrollDown">
            <div className="textContainer">
              <h1>Explore</h1>
            </div>
            <Link
              to="overview"
              smooth={true}
              duration={1500}
              className="arrorwDn"
            >
              <div className="arrow"></div>
            </Link>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
