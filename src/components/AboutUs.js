import React from "react";
import "../stylesheet/About.css"
const AboutUs = () => {
  return (
    <section id="about" className="section container">
      <div className="abtimg">
        <img src="./image/about_img.jpg" />
        </div>
      <div className="abtcontent heading">
        <h1>AIIMTECH TECHNOLOGY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <img src="./image/fivestar.jpg" />
          <h3>The Best Solution</h3>
          <h3>Develop All Your Business</h3>
      </div>
    </section>
  );
};

export default AboutUs;
