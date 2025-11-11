import React, { useState, useEffect } from "react";
import "./Hero.css";
import artistImage from "../assets/logo.jpg"; // Ensure logo is loaded
// import artistImage from "../assets/images/artist-portrait.jpg"; // Import your artist image here

const dynamicTexts = [
  "Bridal Makeup Specialist",
  "High-Fashion Editorial Looks",
  "Flawless Event Transformations",
  "Enhancing Your Natural Beauty",
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <section className="hero container fade-in">
      <div className="hero-content">
        <h3 className="hero-subtitle">Elegance in Every Brushstroke</h3>

        {/* Dynamic text with animation */}
        <h1 className="hero-title">
          Timeless Beauty,
          <br />
          <span className="dynamic-text">{dynamicTexts[currentTextIndex]}</span>
        </h1>

        <p className="hero-text">
          Experience bespoke makeup artistry designed to bring out your unique
          glow for any occasion.
        </p>
        <a href="#contact" className="hero-cta">
          Book Appointment
        </a>
      </div>

      {/* Artist Image */}
      <div className="hero-image-wrapper">
        <img
          src={artistImage}
          // src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFja3VwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          alt="Makeup Artist"
          className="artist-portrait fade-in"
          style={{ animationDelay: "0.6s" }} // Stagger animation for image
        />
      </div>
    </section>
  );
};

export default Hero;
