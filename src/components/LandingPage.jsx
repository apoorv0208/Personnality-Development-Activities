import { useEffect, useState } from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import PDADesign from "./PDACenterDesign";

export default function PDASection() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 0.5);
    }, 100); // Adjust speed for rotation

    return () => clearInterval(interval);
  }, []);

  // Elliptical movement (X-radius > Y-radius)
  const rx = 450; // Wider ellipse (X-axis)
  const ry = 290; // Shorter height (Y-axis)
  const boxes = [
    { text: "Crave a challenge? Try the QUIZ!", button: "QUIZ" },
    { text: "Ready to compete? Join the CONTEST!", button: "Contest" },
    { text: "Need direction? Explore GUIDANCE!", button: "Guidance" },
    { text: "Seeking knowledge? Check out RESOURCES!", button: "Resources" },
    { text: "Want to test your skills? Try a MOCK INTERVIEW!", button: "Mock Interview" },
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <BackgroundAnimation />
      </div>

      {/* Center Circle */}
      {/* <div className="absolute flex flex-col items-center justify-center w-64 h-64 border-4 border-white rounded-full">
        <h1 className="text-6xl font-bold text-white">PDA</h1>
        <p className="text-xl text-white text-center">Department of Information Technology</p>
      </div> */}
      
      <PDADesign/>

      {/* Moving Boxes in Ellipse */}
      {boxes.map((box, index) => {
        const boxAngle = (angle + index * (360 / boxes.length)) * (Math.PI / 180);
        const x = rx * Math.cos(boxAngle);
        const y = ry * Math.sin(boxAngle);

        return (
          <div
            key={index}
            className="absolute w-72 h-36 p-4 border border-white bg-transparent rounded-lg flex flex-col items-center space-y-4 text-center hover:bg-white/20"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <p className="text-white">{box.text}</p>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
              {box.button}
            </button>
          </div>
        );
      })}
    </section>
  );
}
