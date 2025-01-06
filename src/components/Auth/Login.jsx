
import React, { useState } from "react";

const Login = ({handelLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email,password)
    // console.log("Email:", email);
    // console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="bg-gray-800 shadow-lg p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-red-400 text-center mb-6">Login</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Email Input */}
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-64 text-black p-3 bg-transparent outline-none text-white text-base rounded-lg border border-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-red-400"
            aria-label="Email Address"
          />

          {/* Password Input */}
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-64 text-black p-3 bg-transparent outline-none text-white text-base rounded-lg border border-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-red-400"
            aria-label="Password"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-64 text-white bg-red-500 hover:bg-red-600 font-semibold p-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Log in
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-red-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
