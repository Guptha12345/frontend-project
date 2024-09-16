import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgetpasswordstu.css';  // Make sure this CSS file reflects the new style
import forgpassImage from '../assets/forgetpassstu2.webp';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8000/staffportal/verify-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setStep(2);
      } else {
        setError(data.error || 'An error occurred while sending the OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8000/staffportal/verify-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        setStep(3);
      } else {
        setError(data.error || 'An error occurred while verifying the OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8000/staffportal/change-password/${email}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset successful.');
        navigate('/login');
      } else {
        setError(data.error || 'An error occurred while resetting the password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="image-side">
        <img src={forgpassImage} alt="Forgot Password" />
      </div>
      <div className="form-side">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        {error && <div className="error-message">{error}</div>}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="form-confusing">
            <h2>Enter Your Email</h2>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Send OTP</button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="form-confusing">
            <h2>Enter OTP</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Verify OTP</button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="form-confusing">
            <h2>Reset Your Password</h2>
            <div className="input-group">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
