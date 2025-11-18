import React, { useState } from 'react';
import './Login.css';

const SignUp = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Signup data:', formData);
    alert(`Account created for: ${formData.name}`);
    // Add your signup logic here
  };

  return (
    <div className="b1">
      <div className="F1">
        <h2>Sign Up</h2>
        <p>Create your account to get started.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="F2">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <div className="F2">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="F3">
            <label>
              <input type="checkbox" required /> I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" className="btn">Create Account</button>
        </form>

        <div className="switch">
          <p>Already have an account? <span onClick={switchToLogin}>Sign In</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;