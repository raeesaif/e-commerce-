// import React, { useState } from "react";
// import axios from "axios"
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginmessgae,setLoginMessage] = useState('');

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/signup', { email, password });
//       if (response.status === 200) {
//         setLoginMessage("Login Successful!");
//       } else {
//         console.error("login fail", response.data.message);
//         setLoginMessage("Login Fail",response.data.message)
//       }
//     } catch (error) {
//       console.error("Error in login ", error);
//       setLoginMessage("Error in login ",error.message)
//     }

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex items-center justify-center min-h-screen bg-black-500">
//         <div className="p-8 bg-black-700 text-white shadow-lg rounded-lg w-full max-w-md">
//           <h2 className="text-blue-400 text-2xl mb-6">Login</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your Email"
//               required
//               value={email}
//               onChange={(e)=>{setEmail(e.target.value)}}
//               className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
//             />
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password "
//                 required
//                 value={password}
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                 className="p-2 border border-gray-600 rounded bg-gray-800 text-white w-full"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 px-3 py-1 text-gray-400 focus:outline-none"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//             <button type="submit" className="bg-blue-400 p-2 rounded text-white">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState(""); // State for login message

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input Validation (optional, add checks for email format and password length)
    if (!email || !password) {
      setLoginMessage("Please enter your email and password.");
      return; // Early return if inputs are empty
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginMessage("Login Successful!");
        // Optionally: Redirect to a different page after a short delay
        // setTimeout(() => {
        //   // Redirect to another page
        // }, 2000); // Redirect after 2 seconds (adjust as needed)
      } else {
        console.error("Login failed:", response.data.message);
        setLoginMessage("Login Failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error in login:", error);
      setLoginMessage("Login Error: Please enter 8 character log password.");
    }

    setEmail(""); // Clear email and password after submission (optional)
    setPassword("");
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
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-600 rounded bg-gray-800 text-white w-full"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-1 text-gray-400 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit" className="bg-blue-400 p-2 rounded text-white">
              Login
            </button>
          </form>
          {loginMessage && (
            <p className={`mt-4 text-center ${loginMessage.includes("Successful") ? "text-green-500" : "text-red-500"}`}>
              {loginMessage}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

