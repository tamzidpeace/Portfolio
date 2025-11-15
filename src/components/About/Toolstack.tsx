import React from "react";
import { SiLinux, SiPostman, SiAndroidstudio } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";

function Toolstack(): React.ReactElement {
  const toolIcons = [
    { icon: SiLinux, name: "Linux" },
    { icon: VscCode, name: "VS Code" },
    { icon: SiAndroidstudio, name: "Android Studio" },
    { icon: SiPostman, name: "Postman" },
    { icon: FiFigma, name: "Figma" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center py-8">
      {toolIcons.map((tool, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 w-20 h-20 sm:w-24 sm:h-24"
          title={tool.name}
        >
          <tool.icon className="text-3xl sm:text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" />
          <span className="text-xs text-slate-400 mt-2 group-hover:text-white transition-colors">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;