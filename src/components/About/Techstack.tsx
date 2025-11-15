import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiMysql,
  DiPhp,
  DiDart,
  DiAndroid,
} from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFirebase, SiFlutter } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";

function Techstack(): React.ReactElement {
  const techIcons = [
    { icon: DiPhp, name: "PHP" },
    { icon: FaLaravel, name: "Laravel" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
    { icon: DiMysql, name: "MySQL" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: DiReact, name: "React" },
    { icon: RiVuejsFill, name: "Vue.js" },
    { icon: DiGit, name: "Git" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: DiDart, name: "Dart" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: DiAndroid, name: "Android" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center py-8">
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 w-20 h-20 sm:w-24 sm:h-24"
          title={tech.name}
        >
          <tech.icon className="text-3xl sm:text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" />
          <span className="text-xs text-slate-400 mt-2 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;