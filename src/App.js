import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(id.slice(1));
  };

  useEffect(() => {
    // Reset scroll to top on refresh
    window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ["home", "portfolio", "about", "pricing", "contact"];
      let foundSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            foundSection = section;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "#home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={(e) => handleScroll(e, "#portfolio")}
                className={activeSection === "portfolio" ? "active" : ""}
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "#pricing")}
                className={activeSection === "pricing" ? "active" : ""}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Portfolio />
        <AboutUs />
        <Pricing />
        <ContactUs />
      </main>
      <footer>

      <div className="map-section">

        <iframe

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508828!2d-122.419415684681!3d37.77492977975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d0c45db4f%3A0x1dabc0bc6a243491!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1600053424996!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          title="Store Location">

          </iframe>
         </div>

         <div className="footer">
          Heloo Mediquince
         </div>
         
      </footer>
    </div>
  );
};

export default App;
