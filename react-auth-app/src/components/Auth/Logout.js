// src/components/Auth/Logout.js
import React from 'react';

function Logout() {
  const handleLogout = () => {
    console.log('Logout button clicked');
    // You can add logout logic here
  };

  return (
    <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
  );
};
const styles= {
    logoutButton: {
    backgroundColor: '#007bff', // Blue background for the signup button
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
}
};
export default Logout;
