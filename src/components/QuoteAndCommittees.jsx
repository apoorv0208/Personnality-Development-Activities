import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuoteAndCommittees = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 space-y-6 md:space-y-0 md:space-x-12">
      {/* Quote Section */}
      <div className="text-center max-w-md">
        <FaQuoteLeft className="text-gray-400 text-3xl mx-auto" />
        <p className="text-white-700 text-lg mt-4">
          Man needs difficulties in life because they are necessary to enjoy success.
        </p>
        <div className="w-10 h-1 bg-blue-500 mx-auto my-3"></div>
        <p className="text-black font-semibold">Dr A. P. J. Abdul Kalam</p>
      </div>

      {/* Committee Buttons */}
      <div className="flex space-x-4">
        <button onClick={() => navigate("/webteam")} className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-900 transition">
          Web Committee
        </button>
        <button onClick={() => navigate("/Coreteam")} className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-900 transition">
          Core Committee
        </button>
        <button onClick={() => navigate("/FacultyTeam")} className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-900 transition">
          Faculty Committee
        </button>
      </div>
    </div>
  );
};

export default QuoteAndCommittees;
