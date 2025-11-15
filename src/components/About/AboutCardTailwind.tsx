import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard(): React.ReactElement {
  return (
    <div className="card">
      <div className="p-6">
        <blockquote className="border-l-4 border-purple-400 pl-4 mb-0">
          <p className="text-slate-300 leading-relaxed text-justify">
            Hi Everyone, I am <span className="text-purple-400 font-semibold">Arafat Kamal</span>
            from <span className="text-purple-400 font-semibold">Dhaka, Bangladesh.</span>
            <br />I am a full stack web and mobile application developer.
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-slate-300">
              <ImPointRight className="text-purple-400 mr-2 flex-shrink-0" /> 
              Problem Solving
            </li>
            <li className="flex items-center text-slate-300">
              <ImPointRight className="text-purple-400 mr-2 flex-shrink-0" /> 
              Exploring New Technologies
            </li>
            <li className="flex items-center text-slate-300">
              <ImPointRight className="text-purple-400 mr-2 flex-shrink-0" /> 
              Reading Books
            </li>
          </ul>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;