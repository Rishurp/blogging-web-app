import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../App';

 const Register = () => {
  const [formData, setFormData] = useState({ name:'', email:'', password:'' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData)
      await axios.post(`${config.backendEndpoint}/auth/register`, formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="p-4 shadow-lg rounded-lg mt-10 bg-white">
      <Typography variant="h4" className="mb-4 text-center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
        />
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
          Register
        </Button>
        <Button
          onClick={() => navigate('/login')}
          variant="text"
          color="secondary"
          fullWidth
          className="mt-2"
        >
          Already have an account? Login
        </Button>
      </form>
    </Container>
  );
}

export default Register;
