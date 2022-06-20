import React from 'react';
import './Team.scss';

// images
import Akash from '../../assets/images/Akash.png';
import Arjun from '../../assets/images/arjun.png';
import Dhruv from '../../assets/images/Dhruv.png';
import Maddy from '../../assets/images/Maddy.png';
import Neil from '../../assets/images/Neil.png';
import Rohit from '../../assets/images/Rohit.png';

// Components
import Card from './Card';

const Team = () => {
  return (
    <>
      <section className="teamSection" id="team">
        <div className="teamContainer">
          <div className="teamTitle" data-aos="fade-up">
            <h1>Our Team</h1>
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-3  outerCardContainer">
            <Card img={Neil} name="Neil" role="CEO" />
            <Card img={Arjun} name="Arjun" role="COO" />
            <Card img={Dhruv} name="Dhruv" role="Lead Artist" />
            <Card img={Akash} name="Akash" role="Lead Web Developer" />
            <Card img={Maddy} name="Maddy" role="Lead Game Developer" />
            <Card img={Rohit} name="Rohit" role="Lead Blockchain Developer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
