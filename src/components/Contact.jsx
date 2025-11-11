import React from "react";
import "./Contact.css"; // We'll create this next

const Contact = () => {
  // A simple handler to prevent the page from reloading on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    // Here you would add code to send the form data to a backend
    // or an email service.
  };

  return (
    // We add an 'id' so the navbar link can jump here
    <section id="contact" className="contact container fade-in">
      <h3 className="section-subtitle">Get In Touch</h3>
      <h2 className="section-title">Book Your Appointment</h2>
      <p className="contact-description">
        Have questions or ready to book your session? Fill out the form below,
        and we'll get back to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <div className="form-group full-width">
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
