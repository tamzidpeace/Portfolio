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
    <div className="card h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
          src={props.imgPath} 
          alt="project-img" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {props.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
          {props.description}
        </p>
        
        {/* Action Button */}
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center space-x-2 mt-auto"
        >
          <BiLinkExternal className="text-lg" />
          <span>{props.isBlog ? "View Blog" : "View Project"}</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;