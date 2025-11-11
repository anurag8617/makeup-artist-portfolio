import React from "react";
import "./Services.css"; // We will create this next

// Data for the services. You can easily add or remove items here.
const servicesData = [
  {
    icon: "💍", // You can replace this with an icon from a library
    title: "Bridal Makeup",
    description:
      "Look flawless on your special day. Includes consultation, trial, and day-of application.",
  },
  {
    icon: "📸",
    title: "Editorial & Photo",
    description:
      "Creative and high-fashion looks for photoshoots, portfolios, and print.",
  },
  {
    icon: "🎉",
    title: "Special Occasion",
    description:
      "Perfect for proms, galas, parties, or any event where you want to shine.",
  },
];

// A small, reusable component for each card
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const Services = () => {
  return (
    // We add an 'id' so the navbar link can jump here
    <section id="services" className="services container fade-in">
      <h3 className="section-subtitle">What We Do</h3>
      <h2 className="section-title">Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
