import React, { useState, useEffect } from "react";
import "../stylesheet/Home.css";
import CardData from "../CardData.json";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % CardData.length);
    }, 10000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle manual card selection
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-banner" id="home">
      <div className="background-video">
        <video
          src={CardData[activeIndex].video}
          autoPlay
          muted
          loop
          className="background-video-player"
        />
        <div className="content">
          <h1>{CardData[activeIndex].heading}</h1>
          <p>{CardData[activeIndex].text}</p>
          <button>{CardData[activeIndex].button}</button>
        </div>
      </div>
      <div className="cards-container">
        {CardData.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {`Card ${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
