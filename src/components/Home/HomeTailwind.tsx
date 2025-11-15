import React, { memo } from "react";
import homeLogo from "@/Assets/home-main.png";
import Particle from "@/components/Particle.tsx";
import Home2 from "@/components/Home/Home2Tailwind.tsx";
import Type from "@/components/Home/Type.jsx";

const Home: React.FC = memo(() => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <Particle />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hi There! <span className="wave inline-block animate-bounce" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              I'M <strong className="text-gradient">Arafat</strong>
            </h1>

            <div className="pt-4">
              <Type />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={homeLogo} 
              alt="home pic" 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
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