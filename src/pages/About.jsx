import React from 'react';
import aboutBg from '../assets/about-bg.png';
import logo from '../assets/blacklogo.png';
import poster from '../assets/posterimg.png';

const About = () => {
  return (
    <div className="about-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${aboutBg})` }}
      ></div>

      <div className="about-left">
        <img className="about-logo" src={logo} alt="Logo" />
        <p className="about-description">
          <strong>Spy × Family</strong> is a Japanese manga series written and illustrated by Tatsuya Endo. The story follows Loid Forger, an enigmatic spy who has to "build a family" to execute a mission, not realizing that his adopted daughter is a telepath, and the woman he agrees to marry is a skilled assassin.
        </p>
      </div>

      <div className="about-right">
        <img className="about-poster" src={poster} alt="Poster" />
      </div>
    </div>
  );
};

export default About;