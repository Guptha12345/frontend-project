import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Dashboardbutton from '../components/Dashboardbutton';
import './Staff.css';  // Ensure you create this file for custom styles
import sideImage from '../assets/staff.jpeg'; // Replace with the actual path to your image

function StaffLogin() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/staffportal/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to login');
      }

      const data = await response.json();
      // Save the token to local storage
      localStorage.setItem('authToken', data.token);

      // Navigate to the staff dashboard or desired route
      navigate('/staff-dashboard');

    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="container1">
        <div>
          <div className="left-side1">
            <img src={sideImage} alt="Illustration" className="side-image1" />
          </div>
        </div>
        <div className="right-side1">
          <form className="sign-in-form1" onSubmit={handleSubmit}>
            <h2 className='h2'>Staff Sign In</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group1">
              <button type="submit" className="sign-in-button1">Sign In</button>
            </div>
            <div className='forgot_password1'>
              <Link to="/forgot-password" className="forgot_password1">Forgot Password?</Link>
              <Link to="/staffsignup" className="signup-button">Staff Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <div className='dash'>
        <Dashboardbutton to="/" label="Back to Dashboard" />
      </div>
    </div>
  );
}

export default StaffLogin;
