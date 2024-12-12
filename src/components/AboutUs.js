import React from "react";
import "../stylesheet/About.css"
const AboutUs = () => {
  return (
    <section id="about" className="section container">
      <div className="abtimg">
        <img src="./image/about_img.jpg" />
        </div>
      <div className="abtcontent">
        <h2>AIIMTECH TECHNOLOGY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
          </p>
          <img src="./image/fivestar.jpg" />
          <h3>The Best Solution</h3>
          <h4>Develop All Your Business</h4>
      </div>
    </section>
  );
};

export default AboutUs;
