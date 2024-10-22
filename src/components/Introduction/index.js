import React from 'react';
import './Introduction.css';
import profileImage from '../../assets/images/user.jpg'; // Add your profile image

const Introduction = () => {
    return (
        <section className="introduction">
            <div className="profile">
                <img src={profileImage} alt="Developer" className="profile-img" />
                <h2>Software Developer</h2>
                <p>Years of experience in full-stack development, specialized in modern technologies like React, Redux, JavaScript.</p>
            </div>
        </section>
    );
};

export default Introduction;
