import React, { memo } from "react";
import { Link } from "react-router-dom";
import homeLogo from "@/Assets/home-main.png";
import pdf from "@/Assets/Arafat_Kamal_CV.pdf";
import Particle from "@/components/Particle.tsx";
import Home2 from "@/components/Home/Home2.tsx";
import Type from "@/components/Home/Type.tsx";

const Home: React.FC = memo(() => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <Particle />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Hi, I'm Arafat –
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 flex justify-center lg:justify-start items-center gap-2">
              <span>[</span>
              <Type />
              <span>]</span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0">
              Full-Stack Engineer & Open Source Contributor
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
              <Link 
                to="/project"
                className="liquid-glass-btn group"
              >
                <span className="group-hover:text-white">View Projects</span>
              </Link>
              
              <a 
                href={pdf}
                target="_blank"
                rel="noreferrer" 
                className="liquid-glass-btn group"
              >
                <span className="group-hover:text-white">Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end relative">
             {/* Glow effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 blur-[100px] rounded-full -z-10"></div>
            
            <img 
              src={homeLogo} 
              alt="home pic" 
              className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Home2 Section */}
      <Home2 />
    </section>
  );
});

Home.displayName = 'Home';

export default Home;