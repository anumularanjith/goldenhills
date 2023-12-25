// src/components/Auth/Login.js
import React, { useState } from 'react';
import Signup from './Signup';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form>
        <div style={styles.formGroup}>
          <input type="text" id="username" name="username" placeholder="Username" />
        </div>

        <div style={styles.formGroup}>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>

        <div style={styles.forgotPassword}>
          <a href="#forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" style={styles.loginButton}>Login</button>
      </form>

      <div style={styles.createAccount}>
        <p>Don't have an account? <span onClick={toggleSignup}>Create Account</span></p>
        {showSignup && <Signup />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: '15px',
  },
  createAccount: {
    marginTop: '20px',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;
