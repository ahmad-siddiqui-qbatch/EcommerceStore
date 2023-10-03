import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    onLogout();
    
    window.location.reload();
  };

  return (
    <Button className='logout-btn' onClick={handleLogout}>
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
    </Button>
  );
};

export default Logout;
