import "./about.css";
// import Award from "../../img/award.png";
import Aboutme from "../../img/aboutme.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Aboutme}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a software developer, react ninja, and vegan foodie based in Raleigh, NC.
        </p>
        <p className="a-desc">
          Proficient in front-end design, back-end architecture, and graphic design, 
          I integrate user-centric designs with advanced functionalities. 
          I'm dedicated to transforming complex requirements into innovative digital solutions, 
          employing a mix of technical prowess and creative intuition to ensure project success. 
          My tech stack includes: html/css, javascript, python, react, node.js, mysql.
          
          
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
