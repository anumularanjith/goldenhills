// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p>Achieve success in digital transformation through our proficiency in web development. Achieve digital transformation success with our website development expertise. Types: Basic, Advanced, Premium.
</p>
      <div style={styles.boxContainer}>
        <div style={styles.box}>
          <h3>Our Mission</h3>
          <p>
            At XYZ Company, our mission is to empower individuals and businesses through innovative technologies.
            We strive to create solutions that make a positive impact on people's lives by enhancing efficiency,
            fostering creativity, and promoting sustainable practices.
          </p>
        </div>
        <div style={styles.box}>
          <h3>Our Vision</h3>
          <p>
            Our vision is to be a global leader in providing cutting-edge solutions that transform industries.
            We envision a future where technology is seamlessly integrated into everyday life, making it simpler,
            smarter, and more connected. 
          </p>
        </div>
        <div style={styles.box}>
          <h3>Our Approach</h3>
          <p>
            At the core of our approach is a customer-centric philosophy. We believe in understanding the unique
            needs of our clients and tailoring solutions that exceed their expectations. Our approach is built on
            collaboration, transparency, and a relentless pursuit of quality. We embrace challenges as opportunities
            for growth and continuously strive to push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    marginTop: '50px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  box: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default AboutUs;
