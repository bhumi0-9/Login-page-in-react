import React, { useState } from 'react';
import './Login.css';

const Login = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    alert(`Login attempted for: ${formData.email}`);
    // Add your login logic here
  };

  return (
    <div className="b1">
      <div className="F1">
        <h2>Sign In</h2>
        <p>Welcome back! Please sign in to your account.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="F2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="F2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="F3">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="btn">Sign In</button>
        </form>

        <div className="switch">
          <p>Don't have an account? <span onClick={switchToSignUp}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;