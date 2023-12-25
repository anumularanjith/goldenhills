// src/components/Signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field when it is being updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!isValidMobileNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can perform further actions like API calls or navigation
      console.log('Form submitted:', formData);
    } else {
      // Set the validation errors
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (mobileNumber) => {
    // Basic mobile number validation (for demonstration purposes)
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };

  return (
    <div style={styles.container}>
      <h2>Student Signup</h2>
      <p>Here enter your details to create your account</p>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="username"
            placeholder="Enter your Name"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your Phone"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
          {errors.mobileNumber && <span style={styles.error}>{errors.mobileNumber}</span>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>
        <button type="submit" style={styles.signupButton}>
          Sign up
        </button>
      </form>
      <p>Or Signup with</p>
      <div style={styles.socialButtons}>
        <button style={styles.googleButton}>G Google</button>
        <button style={styles.facebookButton}>+Facebook</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    marginTop: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  signupButton: {
    backgroundColor: '#007bff', // Blue background for the signup button
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  googleButton: {
    backgroundColor: '#fff', // White background for the Google button
    color: '#000',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  facebookButton: {
    backgroundColor: '#fff', // White background for the Facebook button
    color: '#000',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Signup;
