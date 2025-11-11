import React from "react";
import "./Certificates.css";

// --- IMPORTANT ---
// 1. Add your certificate images (e.g., 'cert1.jpg', 'cert2.png')
//    to your 'src/assets/images' folder.
// 2. Import them here.
import cert1 from "../assets/image1.png";
import cert2 from "../assets/image2.png";
import cert3 from "../assets/image3.jpg";
import cert4 from "../assets/image4.jpg";

const certificateImages = [
  { img: cert1, title: "Pro MUA Certification" },
  { img: cert2, title: "National Bridal Awards" },
  { img: cert3, title: "Luxe Academy Diploma" },
  { img: cert4, title: "Vogue Feature" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates fade-in">
      <div className="container">
        <h3 className="section-subtitle">Our Credentials</h3>
        <h2 className="section-title">Certificates & Awards</h2>

        <div className="certificates-scroller">
          {certificateImages.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img
                src={cert.img}
                alt={cert.title}
                className="certificate-image"
              />
              {/* <p className="certificate-title">{cert.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
