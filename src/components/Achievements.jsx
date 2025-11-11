import React, { useEffect, useRef } from "react";
import "./Achievements.css";

// Image imports
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Achievements = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 1;
      scrollAmount += 1;

      // Reset scroll when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20); // Speed (lower = faster)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievements" className="achievements container fade-in">
      <h3 className="section-subtitle">Our Recognition</h3>
      <h2 className="section-title">Awards & Achievements</h2>

      {/* Auto-scrolling Image Slider */}
      <div className="achievement-images" ref={scrollRef}>
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Achievement ${index + 1}`}
            className="achievement-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
