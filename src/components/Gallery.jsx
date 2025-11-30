import React, { useState, useRef } from "react";
import "./Gallery.css";

// Example URLs — replace with your own local images if needed
const img1 =
  "https://scontent.cdninstagram.com/v/t51.82787-15/563000731_17971322675952837_1554876450722571960_n.webp?_nc_cat=101&ig_cache_key=Mzc0MTg0MTQ3MDI5MTk1NjY0MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=kp7f75ArMewQ7kNvwHlO8yb&_nc_oc=AdmjXBKj8M20DL6TKgKFI0blAkCHgi4UeQJiBtUFZxPGtuTbXyEIESzAk8hEme_aLbbMl8rRJkk1kRt5aq9XR8Ak&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=nKlTmLN6msDZzzoy22pGjQ&oh=00_Afikxdv-TbNlP5rLMtxDyR9H8G2NdjMMuspPx32UGjHyrA&oe=69193F86";
const img2 =
  "https://scontent.cdninstagram.com/v/t51.75761-15/500250881_18506288110030234_220489849334561873_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=109&ig_cache_key=MzYzOTUyNjQ3OTkwMzM0MDA5NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyOTB4MTYxMi5zZHIuQzMifQ%3D%3D&_nc_ohc=7wcieU5qhwoQ7kNvwHTGovl&_nc_oc=AdnHGQAc1U5hP4tStaIAwbiqBnYN94pDHXdcrM9uFNLR2-oji8I_qD68hqumkmdN5WC4SRXubek_txJQMZtzaBfY&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=02lE-gHGC0khu6-bkPXnSw&oh=00_AfjDE8Xmgr5RVnS-UQMGJM0_ywpKn-96PKpKCR-yGsiZrQ&oe=69192DE8";
const img3 =
  "https://scontent.cdninstagram.com/v/t51.82787-15/554235284_17969707187952837_733287670523535895_n.webp?_nc_cat=110&ig_cache_key=MzczMDk3MzE2OTAyMjA3NjkwNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=OyGHUTn6IhcQ7kNvwECuHx8&_nc_oc=Adm7JY3VlNBf4iPKy4y94rUFPvbk8V6c6zt0o0C9y5Ce5QZB2QhOoJ8gFdfz2V0BUvZSsuMG9Vq4VgUzMKdO5DrV&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=u7Ahepb_negXQkBhJU9BUg&oh=00_AfiB_2ekjScgJAyevJkQ8cxYiFGKb8-redqqlF2iSd1HUg&oe=69191E8E";
const img4 =
  "https://scontent.cdninstagram.com/v/t51.82787-15/532381485_17964527909952837_3399723438191197610_n.webp?_nc_cat=108&ig_cache_key=MzY5OTcyOTU3NDAyNTc1NTgwOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=BJBbOPP114YQ7kNvwEjK_dw&_nc_oc=AdkxxEJCT5GdPmQ35cKEYwr0G8pr7tRUg4pJ7c-JS4vt3yPUahetOSFddkJuRME48fxpinnV2TL3rVXbpj8c1jkh&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zkR8wTDBrVS76D-XwXZTGA&oh=00_AfhqqyYFpegqKvL53r92pf4I5GFH9C0dflHEbk4FK1XVTg&oe=69193AD5";
const img5 =
  "https://scontent.cdninstagram.com/v/t51.75761-15/503969680_17849458611482026_780299532998914788_n.webp?_nc_cat=103&ig_cache_key=MzY1MjM1NDE5MTYzMjM0NTUwOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=G0cvKmk3hBkQ7kNvwHwrRgT&_nc_oc=AdmaQL3zUZOGVxBSRuy9Y6yV9M-PYTYQ0NpfK-ERAi5zhbKFbA21u-xCbxT65XXmoZMDMvf2KdPD8NWwcpTUq9CN&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=02lE-gHGC0khu6-bkPXnSw&oh=00_AfirqJzcyOfTBRiR6-Lwg0d4RK37X2WLahHPjjTm6lgalw&oe=69191943";
const img6 =
  "https://scontent.cdninstagram.com/v/t51.82787-15/532361594_17964443534952837_8744445225690541801_n.webp?_nc_cat=109&ig_cache_key=MzY5OTIxNzY5NjI3NDk3NjI1OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=NFv4kgwhaswQ7kNvwFaclq9&_nc_oc=Adn0otseO3bdna6Kk1CsbxMmGod2rfRkuX7rAFjbeWMg7jTCc0lfRhJxQyPlYB7_8WuoaMIcBAGeE4rZ6v23FAOI&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=NRu-VFexdXLtAV2jkO6Gug&oh=00_AfgfDFJDlTTEiNY_EOGdeqEtNFV0hmAmCuzsZd90qt8AYQ&oe=691A000F";

const gallerySections = [
  { id: 1, title: "Bridal & Wedding", images: [img1, img2, img3] },
  { id: 2, title: "Editorial & High Fashion", images: [img4, img5, img6] },
];

const ScrollingRow = ({ images, onImageClick }) => {
  const duplicated = [...images, ...images];
  return (
    <div className="scrolling-wrapper">
      <div className="scrolling-content">x`x`
        {duplicated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery item ${i}`}
            className="gallery-image"
            onClick={() => onImageClick(src, images)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const scrollRef = useRef(null);

  const openLightbox = (src, sectionImages) => {
    const index = sectionImages.indexOf(src);
    setLightboxImages(sectionImages);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setLightboxImages([]);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="gallery container fade-in">
      <h3 className="section-subtitle">Our Work</h3>
      <h2 className="section-title">Portfolio & Gallery</h2>

      <div className="gallery-sections-container">
        {gallerySections.map((section) => (
          <div className="gallery-section" key={section.id}>
            <ScrollingRow images={section.images} onImageClick={openLightbox} />
            <h3 className="section-text">{section.title}</h3>
          </div>
        ))}
      </div>

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
            {lightboxImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Full screen view ${i}`}
                className={`lightbox-image ${
                  i === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>

          {/* <button className="nav-button prev" onClick={showPrev}>
            &#10094;
          </button>
          <button className="nav-button next" onClick={showNext}>
            &#10095;
          </button> */}
        </div>
      )}
    </section>
  );
};

export default Gallery;
