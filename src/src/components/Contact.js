import React, { useEffect, useState } from 'react';
import './Contact.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    contactNo: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/about')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { email, contactNo } = data[0];
          setContactInfo({ email, contactNo });
        }
      })
      .catch((error) => {
        console.error('Error fetching contact info:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Me</h1>

        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <span>{contactInfo.email || 'Loading email...'}</span>
        </div>

        <div className="contact-info">
          <FaPhoneAlt className="contact-icon" />
          <span>{contactInfo.contactNo || 'Loading phone...'}</span>
        </div>

        <div className="contact-socials">
          <FaFacebook className="social-icon" />
          <FaWhatsapp className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>

        <a href="/your-cv-file.pdf" download className="download-btn">
          DOWNLOAD CV
        </a>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
