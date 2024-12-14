import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(id.slice(1));
    setMenuOpen(false); // Close menu on section navigation
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
        <nav className="headerbar section">
          <img src="../logo.png" className="logo" alt="Logo" />
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
            <li>
              <button>BOOK NOW</button>
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
      <footer className="footer">
  <div className="footer-container">
    {/* Footer Navigation Links */}
    <div className="socialicons">
      <img src="../image/icons/facebook.svg" />
      <img src="../image/icons/instagram.svg" />
      <img src="../image/icons/youtube.svg" />
      <img src="../image/icons/twitter.svg" />
      <img src="../image/icons/linkdin.svg" />
    </div>
    <ul className="footer-nav">
      <li>
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a>
      </li>
      <li>
        <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>Portfolio</a>
      </li>
      <li>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About Us</a>
      </li>
      <li>
        <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")}>Pricing</a>
      </li>
      <li>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact Us</a>
      </li>
    </ul>

    {/* Copyright Section */}
    <div className="footer-copyright">
      &copy; {new Date().getFullYear()} Mediquince. All Rights Reserved.
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
