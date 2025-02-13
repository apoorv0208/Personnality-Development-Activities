import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <NavBar />

      {/* Main content should take available space */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300">Username:</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300">Password:</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
