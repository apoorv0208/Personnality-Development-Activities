import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-1000 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-2 ml-6">
        <img src="/pict-logo.png" alt="Logo 1" className="h-12" />
        <div className="w-[2px] h-8 bg-gray-500"></div>
        <img src="/pda-logo.png" alt="Logo 2" className="h-12" />
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600">
          Reports
        </button>
        <button onClick={() => navigate("/AdminLogin")} className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
          Admin Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
