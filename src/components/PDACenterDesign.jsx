import Particles from "react-tsparticles";

export default function PDADesign() {
  return (
    <div className="absolute flex flex-col items-center justify-center">
      {/* Particle Effect */}
      <Particles
        className="absolute w-full h-full"
        options={{
          particles: {
            number: { value: 15 },
            move: { speed: 2, enable: true, outMode: "bounce" },
            shape: { type: "circle" },
            color: { value: "#ffffff" },
            size: { value: 5 },
          },
        }}
      />
      
      {/* PDA Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">PDA</h1>
        <p className="text-sm text-white text-center">Department of IT</p>
      </div>
    </div>
  );
}
