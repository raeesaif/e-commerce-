import React, { useState } from "react";
import { Header } from "../components/Header";
const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-black-500">
      <div className="p-8 bg-black-700 text-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-blue-400 text-2xl mb-6">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
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
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;