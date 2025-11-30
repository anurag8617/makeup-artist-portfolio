import React, { useState } from "react";
import "./FloatingButtons.css";
// Import the icons we need
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md"; // Import the Done icon

// --- IMPORTANT ---
// Replace this with your 10-digit phone number (including country code, no '+')
// const YOUR_PHONE_NUMBER = "918076826728";
// const YOUR_PHONE_NUMBER = "917810968779";
const YOUR_PHONE_NUMBER = "918617653035";
// -----------------

// QuickEnquiryModal component (NO CHANGES HERE)
const QuickEnquiryModal = ({ isOpen, onClose, phoneNumber }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hi, I have a quick enquiry!\n\nName: ${name}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <IoClose />
        </button>
        <h3>Quick Enquiry</h3>
        <p>Fill out the form, and we'll chat on WhatsApp.</p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-name">Name</label>
            <input
              type="text"
              id="modal-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-message">Your Enquiry</label>
            <textarea
              id="modal-message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn modal-submit">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

// FloatingButtons component (MAJOR CHANGES HERE)
const FloatingButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whatsappDone, setWhatsappDone] = useState(false);
  const [callDone, setCallDone] = useState(false);

  // Handler for WhatsApp click
  const handleWhatsappClick = (e) => {
    setWhatsappDone(true); // Trigger animation
    setTimeout(() => setWhatsappDone(false), 2000); // Reset after 2 seconds
    // Proceed with default link behavior (opening WhatsApp)
    // The browser handles window.open on <a> tags naturally, no need for e.preventDefault()
  };

  // Handler for Call click
  const handleCallClick = (e) => {
    setCallDone(true); // Trigger animation
    setTimeout(() => setCallDone(false), 2000); // Reset after 2 seconds
    // Proceed with default link behavior (opening phone dialer)
  };

  return (
    <>
      <div className="floating-buttons-container">
        {/* QUICK ENQUIRY BUTTON - Now at the top of the stack */}
        <button className="fab-text" onClick={() => setIsModalOpen(true)}>
          Quick Enquiry
        </button>

        <div className="fab-icon-wrapper">
          {/* WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodeURIComponent(
              "Hi! I saw your website and have a question."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`fab-icon whatsapp ${whatsappDone ? "done" : ""}`}
            onClick={handleWhatsappClick}
          >
            <span className="default-icon">
              <FaWhatsapp />
            </span>
            <span className="check-icon">
              <MdDone />
            </span>
          </a>

          {/* CALL BUTTON */}
          <a
            href={`tel:+${YOUR_PHONE_NUMBER}`}
            className={`fab-icon call ${callDone ? "done" : ""}`}
            onClick={handleCallClick}
          >
            <span className="default-icon">
              <FaPhoneAlt />
            </span>
            <span className="check-icon">
              <MdDone />
            </span>
          </a>
        </div>
      </div>

      {/* The Modal Component */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phoneNumber={YOUR_PHONE_NUMBER}
      />
    </>
  );
};

export default FloatingButtons;
