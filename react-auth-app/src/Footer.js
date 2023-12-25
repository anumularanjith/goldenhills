// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>Services</h3>
          <ul>
            <li>Software Development</li>
            <li>Quality Engineering</li>
            <li>BPO/KPO</li>
            <li>CRM/ERP</li>
            <li>Digitization/Cloud Services</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3>Industries</h3>
          <ul>
            <li>Banking, Financial Services, and Insurance</li>
            <li>Health Care</li>
            <li>Retail</li>
            <li>Education</li>
            <li>Hospitality</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    marginTop: '50px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: 'auto',
  },
  section: {
    flex: 1,
    padding: '0 20px',
  },
  h3: {
    color: '#333',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    margin: '5px 0',
  },
};

export default Footer;
