import React, { useState } from "react";
import axios from "axios"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.status === 200) {
        onLogin(response.data);
      } else {
        console.error("login fail", response.data);
      }
    } catch (error) {
      console.error("Error in login ", error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black-500">
        <div className="p-8 bg-black-700 text-white shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-blue-400 text-2xl mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password  "
                required
                className="p-2 border border-gray-600 rounded bg-gray-800 text-white w-full"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-1 text-gray-400 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <button type="submit" className="bg-blue-400 p-2 rounded text-white">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginPage;