import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Input, Button } from '../Common';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <Card>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="text-[#636E72]">Login to continue reading</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />

          <Button type="submit" fullWidth size="large">
            Login
          </Button>

          <p className="text-center mt-4 text-sm text-[#636E72]">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#0984E3] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;