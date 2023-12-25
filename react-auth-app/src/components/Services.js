// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      <div style={styles.serviceBox}>
        <h2>Stock Data & Graphs</h2>
        <p>Clickable links with random text.</p>
      </div>
      <div style={styles.serviceBox}>
        <h2>Table Views</h2>
        <p>Basic React table model with random data.</p>
      </div>
      <div style={styles.serviceBox}>
        <h2>Subscription</h2>
        <p>Please go below to subscribe.</p>
      </div>

      <div style={styles.subscriptionContainer}>
        <div style={styles.subscriptionBox}>
          <h3>Free</h3>
          <p>Everything you get with Free:</p>
          <ul>
            <li>✓ Screener</li>
            <li>✔ Market Monitor</li>
            <li>✔ Global Multi Asset Monitor</li>
            <li>✔ Insights</li>
            <li>✔ Index Constituents</li>
            <li>✔ Industry List</li>
          </ul>
          <button style={styles.button}>Get Started</button>
        </div>

        <div style={styles.subscriptionBox}>
          <h3>Standard</h3>
          <p>AI-ML based Market Signals & research for Actionable insights for investing in stocks</p>
          <ul>
            <li>$5/month</li>
            <li>✔ Sector Signals</li>
            <li>✔ Sector Performance</li>
            <li>✓ Stock Lists</li>
            <li>✔ Stock Info</li>
            <li>Market Updates, ETF Monitor, Advanced Stock Screener and Crypto Monitor</li>
          </ul>
          <button style={styles.button}>Pay Now</button>
        </div>

        <div style={styles.subscriptionBox}>
          <h3>Premium</h3>
          <p>$10/month</p>
          <p>Everything in Standard, plus:</p>
          <ul>
            <li>✔ Index Wizard</li>
            <li>✔ My Watchlist</li>
          </ul>
          <button style={styles.button}>Pay Now</button>
        </div>

        <div style={styles.subscriptionBox}>
          <h3>Business</h3>
          <p>Advanced Portfolio Analysis & Optimization tools for easy integration</p>
          <p>Everything in Premium, plus:</p>
          <ul>
            <li>✓ Efficient Frontier</li>
            <li>✔ Target Return Model</li>
            <li>Research Reports</li>
            <li>Portfolio X-Ray Analyzer to review & fine-tune portfolios based on market conditions</li>
          </ul>
          <button style={styles.button}>Contact us</button>
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
  serviceBox: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subscriptionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  subscriptionBox: {
    flex: 1,
    padding: '20px',
    border: '1px solid #007bff',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Services;
