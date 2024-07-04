import React from 'react';
import '../css/AboutUs.css';
import aboutUsLoop from '../images/AboutUs-lp.png';
import UpcomingEvents from './UpcomingEvents';

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-images">
        <img src={aboutUsLoop} alt="Loop" className="about-us-loop" />
      </div>
      <div className="about-us-content">
        <h2 className="about-us-header">ABOUT US</h2>
        <p className="about-us-title">
          WE'RE CODERS, ENTHUSIASTS, GEEKS.<br />
          WE'RE <span className="msc-title">MSCIANS</span>
        </p>
        <p className="about-us-description">
          Lorem ipsum dolor sit amet consectetur. Mauris dictum maecenas integer orci volutpat. Morbi vitae convallis sit eget eu habitant. 
          Scelerisque aenean sapien in in. Enim egestas aenean tempus vulputate. Volutpatte mauris scelerisque massa tincidunt sit. Ipsum scelerisque 
          fames massa nunc velit in at ac viverra. Ipsum scelerisque fames massa nunc velit in at ac viverra.
        </p>
      </div>
      <div className="about-us-bg-container">
        <h1 className="about-us-bg-text">About US</h1>
      </div>
      <UpcomingEvents />
    </section>
  );
};

export default AboutUs;
