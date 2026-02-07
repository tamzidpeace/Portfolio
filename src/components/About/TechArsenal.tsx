import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiMysql,
  DiPhp,
  DiDart,
} from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFirebase, SiFlutter, SiTypescript, SiCplusplus, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiAmazon } from "react-icons/si";
import { FaLaravel, FaJava, FaDocker, FaServer, FaBrain, FaNetworkWired } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";

function TechArsenal(): React.ReactElement {
  const languages = [
    { icon: DiPhp, name: "PHP", color: "text-indigo-400" },
    { icon: DiJavascript1, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: DiDart, name: "Dart", color: "text-cyan-400" },
    { icon: FaJava, name: "Java", color: "text-orange-500" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
  ];

  const frameworks = [
    { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-400" },
    { icon: RiVuejsFill, name: "Vue.js", color: "text-green-400" },
    { icon: DiReact, name: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiFlutter, name: "Flutter", color: "text-cyan-400" },
  ];

  const tools = [
    { icon: DiGit, name: "Git", color: "text-orange-500" },
    { icon: FaDocker, name: "Docker", color: "text-blue-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiAmazon, name: "AWS", color: "text-orange-400" },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { icon: DiMysql, name: "MySQL", color: "text-blue-400" },
    { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-indigo-300" },
    { icon: FaServer, name: "VPS", color: "text-slate-400" },
    { icon: FaNetworkWired, name: "MCP", color: "text-purple-400" },
    { icon: FaBrain, name: "RAG", color: "text-pink-400" },
  ];

  const Section = ({ title, items, className = "" }: { title: string, items: any[], className?: string }) => (
    <div className={`bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 ${className}`}>
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <item.icon className={`text-4xl sm:text-5xl ${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
        Technical <strong className="text-gradient">Arsenal</strong>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Languages & Frameworks */}
        <div className="space-y-8">
          <Section title="Languages" items={languages} />
          <Section title="Frameworks" items={frameworks} />
        </div>

        {/* Right Column - Tools & DevOps */}
        <Section title="Tools & DevOps" items={tools} />
      </div>
    </div>
  );
}

export default TechArsenal;
