// src/components/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Auth/Logout';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Show basic details of the user here.</p>
      <Logout />
    </div>
  );
}

export default Profile;
