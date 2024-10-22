import React from 'react';
import './Experience.css';

const Experience = () => {
    const projects = [
        { name: 'Project A', level: 90 },
        { name: 'Project B', level: 75 },
        { name: 'Project C', level: 60 },
        { name: 'Project D', level: 50 },
    ];

    return (
        <section className="experience">
            <h2>Project Experience</h2>
            <div className="experience-list">
                {projects.map((project) => (
                    <div className="project" key={project.name}>
                        <h3>{project.name}</h3>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${project.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
