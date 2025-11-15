import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterOptions {
  strings: string[];
  autoStart: boolean;
  loop: boolean;
  deleteSpeed: number;
}

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Problem Solver",
          "Open Source Contributor", 
          "Laravel, React, Vue & Flutter Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      } as TypewriterOptions}
    />
  );
};

export default Type;