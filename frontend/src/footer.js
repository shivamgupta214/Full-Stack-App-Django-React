import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        {/* Left Side: Contact Info */}
        <div className="footer-left">
          <h3>Contact Me</h3>
          <p>📍 Location: Chicago, Illinois 60616</p>
          <p>📞 Phone: +1 (872) 258-5071</p>
          <p>✉️ Email: shivam@techjobmails.com</p>
        </div>

        {/* Right Side: Calendly Button */}
        <div className="footer-right">
          <button onClick={() => setIsOpen(true)} className="footer-button">
            Schedule a Meeting
          </button>
        </div>
      </footer>

      {/* Calendly Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()} // Prevent click propagation
            >
              <button onClick={() => setIsOpen(false)} className="close-button">
                ✖
              </button>
              <h3 className="modal-title">Schedule a Meeting</h3>
              <iframe
                src="https://calendly.com/your-username/30min"
                className="calendly-iframe"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
