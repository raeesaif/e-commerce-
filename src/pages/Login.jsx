import React, { useState } from "react";

 const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black-500">
      <div className="border border-sky-500 p-8 bg-black text-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-blue-400 text-2xl mb-6">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
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
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;