import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Footer from "./Footer";
import QuoteAndCommittees from "./QuoteAndCommittees";
import LandPage from "./LandingPage";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavBar from "./NavBar";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Navbar */}
      <NavBar/>

      {/* Hero Section */}
      <LandPage/>

      {/* About Us Section */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">About Us</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 flex flex-col md:flex-row items-center text-left">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-bold">PICT</h3>
              <img src="/pict-logo.png" alt="PICT Logo" className="h-16 mx-auto mt-2" />
            </div>
            <p className="w-full md:w-2/3 text-gray-300">Pune Institute of Computer Technology (PICT) is an elite academic institute located in Pune, known as "The Oxford of the East." Since its establishment in 1983, PICT has been at the forefront of revolutionizing education by nurturing skilled and industry-ready engineers. The institute is dedicated to value-based quality education in Information and Communication Technology (ICT) and has a well-established Research & Development (R&D) center. Faculty members at PICT have undertaken numerous research projects funded by renowned organizations.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 flex flex-col md:flex-row items-center text-left">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-bold">PDA</h3>
              <img src="/pda-logo.png" alt="PDA Logo" className="h-16 mx-auto mt-2" />
            </div>
            <p className="w-full md:w-2/3 text-gray-300">Professional Development Activity (PDA) is an initiative by the IT department aimed at enhancing students' professional growth. It includes View Sharing Sessions with industry experts, Aptitude Tests for sharpening problem-solving skills, Coding Tests to strengthen technical proficiency, and Resume Building sessions to help students craft impactful resumes. Additionally, Interview Experience Sharing provides insights from peers about interviews with top companies. PDA goes beyond academics, equipping students with essential skills to navigate their careers confidently while fostering collaboration between the IT department and future professionals.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Upcoming Events</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full md:w-3/4 mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 h-200">
            <h3 className="text-2xl font-semibold mb-4 text-center">Event Calendar</h3>
            <div className="h-64 bg-black rounded-lg flex items-center justify-center text-gray-400">
              <Calendar className="w-full bg-black text-white border-gray-700 p-2 rounded-lg" />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 max-h-[800px] overflow-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">Announcements</h3>
            <p className="text-gray-300">No upcoming events at the moment. Stay tuned for updates!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full md:w-3/4 mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 mr-4">
            <h3 className="text-2xl font-semibold text-center mb-6">Contact Information</h3>
            <div className="flex flex-col space-y-9">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-500" />
                <p className="text-gray-300">Sachin Pande: (+91) 87668 08467</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-500" />
                <p className="text-gray-300">sachinpande@pict.edu</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-yellow-500" />
                <p className="text-gray-300">Pune Institute of Computer Technology<br></br> Dhankawadi, Pune, Maharashtra-411043</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 mr-4">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="mt-4 flex flex-col space-y-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded-lg bg-gray-700 text-white" />
              <input type="email" placeholder="Your Email" className="p-2 border rounded-lg bg-gray-700 text-white" />
              <textarea placeholder="Your Message" className="p-2 border rounded-lg h-24 bg-gray-700 text-white"></textarea>
              <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section>
        < QuoteAndCommittees/>
      </section>

      <footer className="bg-gray-800 py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
