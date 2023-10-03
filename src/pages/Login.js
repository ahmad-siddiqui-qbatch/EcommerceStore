import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      onLogin();
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Email or password is incorrect');
    }
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <div className='login-wrapper'>
        <Row className='w-100'>
          <Col lg={6} className='d-flex align-items-center'>
            <div className='w-100'>
              <h2 className='golden-heading text-h1'>Login</h2>
              <form>
                <div>
                  <input
                    placeholder='Enter Email'
                    type="email"
                    className='golden-input mb-2 w-100'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    placeholder='Enter Password'
                    className='golden-input mb-2 w-100'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>

                {error && <p className="error-message">{error}</p>}
                <button className='btn btn-primary w-100' type="button" onClick={handleLogin}>
                  Login
                </button>
              </form>
            </div>
          </Col>
          <Col lg={6} className='d-lg-block d-none'>
            <div className='login-image'>
              <img src='https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1829&q=80' alt="Login" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
