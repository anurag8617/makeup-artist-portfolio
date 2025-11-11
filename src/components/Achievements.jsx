// import React, { useEffect, useRef } from "react";
// import "./Achievements.css";

// // Image imports
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";

// const Achievements = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
//   const scrollRef = useRef(null);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const scroll = () => {
//       if (!scrollContainer) return;
//       scrollContainer.scrollLeft += 1;
//       scrollAmount += 1;

//       // Reset scroll when reaching the end
//       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//         scrollAmount = 0;
//       }
//     };

//     const interval = setInterval(scroll, 20); // Speed (lower = faster)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="achievements" className="achievements container fade-in">
//       <h3 className="section-subtitle">Our Recognition</h3>
//       <h2 className="section-title">Awards & Achievements</h2>

//       {/* Auto-scrolling Image Slider */}
//       <div className="achievement-images" ref={scrollRef}>
//         {[...images, ...images].map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Achievement ${index + 1}`}
//             className="achievement-image"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;



import React, { useEffect, useRef, useState } from "react";
// // Image imports
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

// CSS for the component
// I've moved your CSS in here and removed the unused grid styles.
// I also added fallback colors in case the CSS variables aren't defined.
const achievementsCSS = `
.achievements {
  padding: 4rem 0;
  text-align: center;
  background-color: var(--color-bg, #0a0a14); /* Dark background fallback */
  overflow: hidden; /* Prevent horizontal overflow */
  width: 100%;
}

.section-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary, #e11d48);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-heading, #ffffff);
  margin-top: 0.5rem;
  margin-bottom: 3rem;
}

.achievement-images {
  display: flex;
  overflow-x: hidden; /* This is key - we control scroll with JS */
  white-space: nowrap;
  /* For pause-on-hover */
  cursor: grab;
}

.achievement-images:active {
  cursor: grabbing;
}

.achievement-image {
  flex: 0 0 auto;
  width: 220px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.achievement-image:hover {
  transform: scale(1.05);
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .achievements {
    padding: 3rem 0;
  }
  .section-title {
    font-size: 1.75rem;
  }
  .achievement-image {
    width: 160px; /* Smaller images on mobile */
    height: 220px; /* Different aspect ratio as in your CSS */
  }
}
`;

// Use placeholder images since local imports won't work here
const images = [img1, img2, img3, img4, img5, img6];

const Achievements = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let lastTime = performance.now();
    const scrollSpeed = 30; // pixels per second

    const scroll = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Only scroll if the user is not hovering over the carousel
      if (!isHovering) {
        // Calculate scroll amount based on time passed, not a fixed value
        const scrollAmount = (scrollSpeed / 1000) * deltaTime;
        scrollContainer.scrollLeft += scrollAmount;

        // Check for reset
        // We reset when scrollLeft passes the halfway point (the width of one set of images)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          // Instead of jumping to 0, we subtract the width of one set.
          // This handles any "overshoot" from a long frame and is smoother.
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }
      // Continue the loop
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(scroll);

    // Cleanup function: stop the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]); // Re-start the effect logic if 'isHovering' changes

  return (
    <>
      <style>{achievementsCSS}</style>
      <section id="achievements" className="achievements container">
        <h3 className="section-subtitle">Our Recognition</h3>
        <h2 className="section-title">Awards & Achievements</h2>

        <div
          className="achievement-images"
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* We duplicate the image array to create the seamless loop */}
          {[...images, ...images].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Achievement ${(index % images.length) + 1}`}
              className="achievement-image"
            />
          ))}
        </div>
      </section>
    </>
  );
};

// Main App component to render the Achievements section
export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "auto",
        backgroundColor: "#0a0a14",
      }}
    >
      <Achievements />
    </div>
  );
}