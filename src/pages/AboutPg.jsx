// AboutPg.jsx
import React from "react";
import "./aboutpg.css";
import Aboutme from "../img/aboutme.png";

const AboutPg = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="about-left">
          <img src={Aboutme} alt="About Me" className="about-img" />
        </div>
        <div className="about-right">
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">Passionate Software Developer | React Ninja | Vegan Foodie</p>
          </div>
          <div className="about-content">
            <p className="about-desc">
              Hi there! I'm a passionate software developer, specializing in React development and UI/UX design. Based in Raleigh, NC, I love exploring new technologies and building innovative solutions that make a difference.
            </p>
            <p className="about-desc">
              With a strong background in front-end development and graphic design, I excel at creating visually appealing and user-friendly interfaces. My technical expertise includes HTML/CSS, JavaScript, React, Node.js, and MySQL, allowing me to tackle diverse challenges across the full stack.
            </p>
            <p className="about-desc">
              Outside of coding, I'm an avid vegan foodie and enjoy experimenting with plant-based recipes. I also love hiking, photography, and exploring new places in my free time.
            </p>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h2 className="about-skills-title">Skills</h2>
        <div className="about-skills-list">
          <span className="about-skills-item">HTML/CSS</span>
          <span className="about-skills-item">JavaScript</span>
          <span className="about-skills-item">React</span>
          <span className="about-skills-item">Node.js</span>
          <span className="about-skills-item">MySQL</span>
          <span className="about-skills-item">UI/UX Design</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPg;
