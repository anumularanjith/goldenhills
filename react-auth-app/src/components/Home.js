// src/components/Home.js
import React, { useState } from 'react';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

const Home = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleView = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <h2>Home - Page View</h2>
        <iframe
          title="TradingView Widget"
          src="https://community.dhan.co/uploads/default/original/2X/8/8f343b19e43ae2faaa10d98f2d29de20a371ba8a.gif"
          width="100%"
          height="600"
          frameBorder="0"
          style={styles.chart}
        ></iframe>
      </div>

      <div style={styles.column}>
        <div style={styles.authBox}>
          {showSignup ? (
            // Show Signup component
            <Signup />
          ) : (
            // Show Login component
            <Login />
          )}
          <button onClick={toggleView}>{showSignup ? 'Login' : 'Signup'}</button>
        </div>

       
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  column: {
    flex: '1',
    marginLeft: '20px',
  },
  chart: {
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  authBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Home;
