import React, { useState } from "react"; // 1. Import useState
import "./Contact.css";

const Contact = () => {
  // 2. Set up state to store the form inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // 3. Update the handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    // !! IMPORTANT !!
    // Replace this with your full WhatsApp number, including the country code,
    // but with NO '+' or '00' at the beginning.
    // Example for an Indian number: 911234567890
    // Example for a US number: 14155552671
    const yourWhatsAppNumber = "918076826728"; // <-- PUT YOUR NUMBER HERE

    // This is the message that will be pre-filled in the user's WhatsApp
    const message = `Hi! My name is ${name} (Phone: ${phone}) and I'd like to book an appointment.`;

    // We need to encode the message to make it safe for a URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp "click-to-chat" link
    const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

    // Open the URL in a new browser tab
    window.open(whatsappURL, "_blank");

    // You can also clear the form if you like
    setName("");
    setPhone("");
  };

  return (
    <section id="contact" className="contact container fade-in">
      <h3 className="section-subtitle">Get In Touch</h3>
      <h2 className="section-title">Book Your Appointment</h2>
      <p className="contact-description">
        Ready to book? Fill out your name and WhatsApp number, and we'll chat
        directly!
      </p>

      {/* 4. Make sure the form calls our new handleSubmit */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name} // Set value from state
            onChange={(e) => setName(e.target.value)} // Update state on change
            required
          />
        </div>

        {/* 5. Replaced Email with WhatsApp Number */}
        <div className="form-group">
          <label htmlFor="phone">WhatsApp Number</label>
          <input
            type="tel" // 'tel' is a good type for phone numbers
            id="phone"
            name="phone"
            value={phone} // Set value from state
            onChange={(e) => setPhone(e.target.value)} // Update state on change
            placeholder="e.g., 9123456789"
            required
          />
        </div>

        {/* 6. Removed the full-width Message textarea */}

        <div className="form-group full-width">
          {/* 7. Updated button text */}
          <button type="submit" className="submit-btn">
            Send via WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
