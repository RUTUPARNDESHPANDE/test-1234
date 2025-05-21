import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('/api/education')
      .then(res => setEducation(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <ul className="list-group">
        {education.map(ed => (
          <li key={ed.id} className="list-group-item bg-dark text-white">
            <h5>{ed.degree}</h5>
            <p>{ed.institution}</p>
            <small>{ed.startYear} - {ed.endYear}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;