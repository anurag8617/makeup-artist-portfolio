import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section id="location" className="location container fade-in">
      <div className="location-content">
        <h3 className="section-subtitle">Visit Us</h3>
        <h2 className="section-title">Our Studio Location</h2>
        <p className="location-text">
          Drop by for a consultation or your scheduled appointment. We are
          located in the heart of the city.
        </p>
      </div>

      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=Gali%20No.%2012%2C%20Garhi%20Chaukhandi%2C%20Sector%20121%2C%20Noida%2C%20Uttar%20Pradesh%20201316&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
