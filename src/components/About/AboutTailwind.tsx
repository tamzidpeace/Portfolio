import React from "react";
import Particle from "../Particle.tsx";
import Github from "./GithubTailwind.tsx";
import Techstack from "./TechstackTailwind.tsx";
import Aboutcard from "./AboutCardTailwind.tsx";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./ToolstackTailwind.tsx";

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

        {/* Skills Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Professional <strong className="text-gradient">Skill Set</strong>
            </h1>
            <Techstack />
          </div>

          {/* Tools Section */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              <strong className="text-gradient">Tools</strong> I use
            </h1>
            <Toolstack />
          </div>

          {/* GitHub Section */}
          <div className="text-center">
            <Github />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;