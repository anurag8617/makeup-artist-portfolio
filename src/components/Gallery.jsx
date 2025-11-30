import React, { useState, useRef } from "react";
import "./Gallery.css";
import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.webp";
import g6 from "../assets/g6.webp";
import v1 from "../assets/vdo1.mp4";
import v2 from "../assets/vdo2.mp4";
import v3 from "../assets/vdo3.mp4";

// --- IMAGES ---
const img1 = g3;
const img2 = g4;
const img3 = g5;
const img4 = g1;
const img5 = g2;
const img6 = g6;

// --- VIDEOS (Replace these with your local imports like 'import vid1 from ...') ---
const vid1 = v1;
const vid2 = v2;
const vid3 = v3;

const gallerySections = [
  // Added 'type' property to distinguish sections
  {
    id: 1,
    title: "Bridal & Wedding",
    images: [img1, img2, img3],
    type: "image",
  },
  {
    id: 2,
    title: "Editorial & High Fashion",
    images: [img4, img5, img6],
    type: "image",
  },
  // New Video Section
  {
    id: 3,
    title: "Behind the Scenes & Reels",
    images: [vid1, vid2, vid3],
    type: "video",
  },
];

// Helper to render media based on type
const MediaItem = ({ src, type, onClick, className }) => {
  if (type === "video") {
    return (
      <video
        src={src}
        className={className}
        onClick={onClick}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata" // Lazy loading for video
        style={{ objectFit: "cover" }} // Ensure it fills the box
      />
    );
  }
  return (
    <img
      src={src}
      alt="Gallery item"
      className={className}
      onClick={onClick}
      loading="lazy" // Lazy loading for images
    />
  );
};

const ScrollingRow = ({ images, type, onImageClick }) => {
  const duplicated = [...images, ...images];
  return (
    <div className="scrolling-wrapper">
      <div className="scrolling-content">
        {duplicated.map((src, i) => (
          <MediaItem
            key={i}
            src={src}
            type={type}
            className="gallery-image"
            onClick={() => onImageClick(src, images, type)}
          />
        ))}
      </div>
    </div>
  );
};

// Accept 'onSeeMore' prop
const Gallery = ({ onSeeMore }) => {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentSectionType, setCurrentSectionType] = useState("image"); // Track type for lightbox
  const [currentIndex, setCurrentIndex] = useState(null);
  const scrollRef = useRef(null);

  const openLightbox = (src, sectionImages, type) => {
    const index = sectionImages.indexOf(src);
    setLightboxImages(sectionImages);
    setCurrentSectionType(type); // Set the type so lightbox knows what to render
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setLightboxImages([]);
    setCurrentSectionType("image");
  };

  return (
    <section id="gallery" className="gallery container fade-in">
      <h3 className="section-subtitle">Our Work</h3>
      <h2 className="section-title">Portfolio & Gallery</h2>

      <div className="gallery-sections-container">
        {gallerySections.map((section) => (
          <div className="gallery-section" key={section.id}>
            <ScrollingRow
              images={section.images}
              type={section.type} // Pass the type (image or video)
              onImageClick={openLightbox}
            />
            <h3 className="section-text">{section.title}</h3>
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      {/* <div className="gallery-footer">
        <button onClick={onSeeMore} className="see-more-btn">
          See More
        </button>
      </div> */}

      {currentIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="close-button" onClick={closeLightbox}>
            &times;
          </span>

          <div
            className="lightbox-scroll-container"
            ref={scrollRef}
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxImages.map((src, i) => {
              const isActive = i === currentIndex;
              return (
                <div
                  key={i}
                  className={`lightbox-image-wrapper ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "100vw", // Ensure full width for scrolling
                    height: "100vh",
                  }}
                >
                  {currentSectionType === "video" ? (
                    <video
                      src={src}
                      className="lightbox-image"
                      controls // Show controls for lightbox view
                      autoPlay={isActive} // Only autoplay the active one
                      style={{ maxHeight: "90vh", maxWidth: "90vw" }}
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`Full screen view ${i}`}
                      className="lightbox-image"
                      style={{
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
