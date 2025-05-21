import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('/api/skills')
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="row">
        {skills.map(skill => (
          <div key={skill.id} className="col-md-3 mb-3">
            <div className="card p-3">
              <strong>{skill.name}</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                  {skill.level}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;