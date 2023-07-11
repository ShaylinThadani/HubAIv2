import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event, faqId) => {
    if (event.key === 'Enter') {
      const checkbox = document.getElementById(faqId);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    }
  };

  return (
    <div id="contact-us" className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          aria-required="true"
          aria-label="Your Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          aria-required="true"
          aria-label="Your Email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
          aria-required="true"
          aria-label="Your Message"
        />

        <button type="submit">Submit</button>
      </form>

      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="accordion">
          <div className="accordion-item">
            <input
              type="checkbox"
              id="faq1"
              className="accordion-item-toggle"
              role="checkbox"
              aria-labelledby="faq1-label"
              aria-expanded="false"
            />
            <label
              htmlFor="faq1"
              className="accordion-item-title"
              tabIndex="0"
              onKeyPress={(event) => handleKeyPress(event, 'faq1')}
              id="faq1-label"
            >
              How can I provide feedback or report a bug in the AI tool?
            </label>
            <div className="accordion-item-content">
              We welcome your feedback and appreciate bug reports. To provide feedback or report a bug, please contact our support team using the form above. Include specific details about the issue, steps to reproduce it, and any relevant screenshots or error messages. Your feedback helps us improve the tool and deliver a better experience for all users.
            </div>
          </div>

          <div className="accordion-item">
            <input
              type="checkbox"
              id="faq2"
              className="accordion-item-toggle"
              role="checkbox"
              aria-labelledby="faq2-label"
              aria-expanded="false"
            />
            <label
              htmlFor="faq2"
              className="accordion-item-title"
              tabIndex="0"
              onKeyPress={(event) => handleKeyPress(event, 'faq2')}
              id="faq2-label"
            >
              How long does it typically take to receive a response from the support team?
            </label>
            <div className="accordion-item-content">
              We strive to provide timely support to our users. Our support team aims to respond to queries and support requests within 24-48 hours. However, please note that response times may vary based on the volume of inquiries received. Rest assured, we'll do our best to address your concerns as quickly as possible.
            </div>
          </div>

          <div className="accordion-item">
            <input
              type="checkbox"
              id="faq3"
              className="accordion-item-toggle"
              role="checkbox"
              aria-labelledby="faq3-label"
              aria-expanded="false"
            />
            <label
              htmlFor="faq3"
              className="accordion-item-title"
              tabIndex="0"
              onKeyPress={(event) => handleKeyPress(event, 'faq3')}
              id="faq3-label"
            >
              I'm experiencing technical difficulties with the AI tool. What should I do?
            </label>
            <div className="accordion-item-content">
              <ul>
                <li>Refresh the page: Sometimes, a simple refresh can resolve temporary glitches.</li>
                <li>Clear your browser cache: Clearing your cache can help eliminate any cached data that may be causing issues.</li>
                <li>Try a different browser: Switching to a different browser can help determine if the issue is browser-specific.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
