import React from 'react';
import './Highlights.css';

const skills = [
    { name: 'React', icon: '🔵' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'Redux', icon: '🔁' },
    { name: 'Git', icon: '🔧' },
];

const Highlights = () => {
    return (
        <section className="highlights">
            <h2>Highlights</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <span className="skill-icon">{skill.icon}</span>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
