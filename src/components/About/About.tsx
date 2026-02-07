import React from "react";
import Particle from "../Particle.tsx";
import Github from "./Github.tsx";
import TechArsenal from "./TechArsenal.tsx";
import Aboutcard from "./AboutCard.tsx";
import laptopImg from "../../Assets/about.png";

function About(): React.ReactElement {
  return (
    <section className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Know Who <strong className="text-gradient">I'M</strong>
            </h1>
            <Aboutcard />
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={laptopImg}
              alt="about"
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Technical Arsenal Section */}
        <TechArsenal />

        {/* GitHub Section */}
        <div className="text-center pt-20">
          <Github />
        </div>
      </div>
    </section>
  );
}

export default About;