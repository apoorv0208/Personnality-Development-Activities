import React from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "Sachin Pande",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Amruta Awati",
    image: "https://via.placeholder.com/150",
  },
];

const CoreTeam = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col overflow-hidden">
      <NavBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <h1 className="text-5xl font-bold mb-8">Faculty Committee</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700"
              />
              <h2 className="text-2xl font-semibold">{member.name}</h2>
            </div>
          ))}
        </div>
      </div>
        
        <Footer />
    </div>
  );
};

export default CoreTeam;
