// Updated About.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [about, setAbout] = useState('');

  useEffect(() => {
    axios.get('/api/about')
      .then(res => setAbout(res.data.description))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p>{about}</p>
    </section>
  );
}
export default About;