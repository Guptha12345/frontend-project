// src/components/Tutors.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Tutors.css';
import Dashboardbutton from '../components/Dashboardbutton';

const tutors = [
  {
    name: 'MR.Srinivas',
    subject: 'Python FullStack',
    experience: '13+ years',
    description: 'Expert in Python programming and machine learning.',
    extraDetails: 'Srinivas teaches Python basics, advanced concepts, and machine learning algorithms.',
    image: '',
  },
  {
    name: 'MR.Vishwanath',
    subject: 'Java FullStack',
    experience: '16+ years',
    description: 'Specialist in Java and Spring Framework.',
    extraDetails: 'Vishwanath covers Java fundamentals, OOP principles, and Spring Framework.',
    image: '',
  },
  {
    name: 'MR.MadukarReddy',
    subject: 'DevOps',
    experience: '10+ years',
    description: 'Focus on CI/CD, Docker, and Kubernetes.',
    extraDetails: 'Madhukar teaches CI/CD pipelines, Docker containerization, and Kubernetes orchestration.',
    image: '',
  },
  {
    name: 'MR.Manohar',
    subject: 'Testing',
    experience: '13+ years',
    description: 'Knowledgeable in automated testing and QA processes.',
    extraDetails: 'Manhor covers automated testing tools, QA methodologies, and best practices.',
    image: '',
  },
  {
    name: 'MR.Srinivas',
    subject: 'Web Development',
    experience: '13+ years',
    description: 'Specialist in front-end and back-end web development.',
    extraDetails: 'Srinivas teaches HTML, CSS, JavaScript, and back-end development with Node.js.',
    image: '',
  },
  {
    name: 'MR.Akhil',
    subject: 'Digital Marketing',
    experience: '10+ years',
    description: 'Expert in SEO, SEM, and social media marketing.',
    extraDetails: 'Akhil covers SEO strategies, SEM campaigns, and social media marketing techniques.',
    image: '',
  },
];

const Tutors = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleMouseEnter = (tutor) => {
    setSelectedTutor(tutor);
  };

  const handleMouseLeave = () => {
    setSelectedTutor(null);
  };

  return (
    <div className="tutors-container">
      <h1 className="tutors-title">Our Tutors</h1>
      <div className="tutors-list">
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="tutor-card"
            onMouseEnter={() => handleMouseEnter(tutor)}
            onMouseLeave={handleMouseLeave}
          >
            {tutor.image ? (
              <img src={tutor.image} alt={tutor.name} className="tutor-image" />
            ) : (
              <FontAwesomeIcon icon={faUserCircle} className="tutor-icon" />
            )}
            <h2 className="tutor-name">{tutor.name}</h2>
            <p className="tutor-subject">{tutor.subject}</p>
            <p className="tutor-experience">{tutor.experience}</p>
            <p className="tutor-description">{tutor.description}</p>
            {selectedTutor === tutor && (
              <div className="tutor-popup">
                <p>{tutor.extraDetails}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <Dashboardbutton to="/" label="Back to Dashboard" />
      </div>
    </div>
  );
};

export default Tutors;
