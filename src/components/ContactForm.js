import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/contacts', formData)
      .then(() => alert('Message sent!'))
      .catch(err => console.error(err));
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <input name="name" onChange={handleChange} className="form-control" placeholder="Name" required />
        </div>
        <div className="col-md-4">
          <input name="email" onChange={handleChange} className="form-control" placeholder="Email" required />
        </div>
        <div className="col-md-4">
          <textarea name="message" onChange={handleChange} className="form-control" placeholder="Message" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-2">Send</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;