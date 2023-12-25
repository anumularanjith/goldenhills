// src/components/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Validation logic here

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // You can add contact form submission logic here
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, agree: !formData.agree });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.firstName && <p style={styles.error}>{formErrors.firstName}</p>}
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.lastName && <p style={styles.error}>{formErrors.lastName}</p>}
        </div>

        <div style={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.email && <p style={styles.error}>{formErrors.email}</p>}
        </div>

        <div style={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {formErrors.message && <p style={styles.error}>{formErrors.message}</p>}
        </div>

        <div style={styles.formGroup}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree" style={styles.checkboxLabel}>I agree to the terms and conditions</label>
          {formErrors.agree && <p style={styles.error}>{formErrors.agree}</p>}
        </div>

        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
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
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  checkboxLabel: {
    marginLeft: '5px',
    color: '#555',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
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

export default ContactUs;
