import React from "react";
import { BiLinkExternal } from "react-icons/bi";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  link: string;
  isBlog?: boolean;
}

function ProjectCards(props: ProjectCardsProps): React.ReactElement {
  return (
    <div className="group h-full flex flex-col bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Project Image */}
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={props.imgPath} 
          alt="project-img" 
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      </div>
      
      {/* Card Content */}
      <div className="flex flex-col flex-grow p-8 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
          {props.title}
        </h3>
        
        <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow ">
          {props.description}
        </p>
        
        {/* Action Button */}
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25 mt-auto"
        >
          <BiLinkExternal className="text-xl" />
          <span>{props.isBlog ? "View Blog" : "View Project"}</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;