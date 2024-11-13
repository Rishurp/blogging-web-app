// components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example POST request
      await axios.post('/api/login', formData);
      alert('Login successful!');
      // Redirect to dashboard or home page after login
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="p-4 shadow-lg rounded-lg mt-10 bg-white">
      <Typography variant="h4" className="mb-4 text-center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          variant="text"
          color="secondary"
          fullWidth
          className="mt-2"
        >
          Don’t have an account? Register
        </Button>
      </form>
    </Container>
  );
}

export default Login;
