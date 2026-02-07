import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";
import pdfUrl from "../../Assets/Arafat_Kamal_CV.pdf";

// Resume Data Interfaces
interface Experience {
  role: string;
  company: string;
  date: string;
  desc: string[];
}

interface Education {
  degree: string;
  institution: string;
  date: string;
  desc?: string;
}

interface Cert {
  name: string;
  issuer: string;
  date: string;
}

export default function Resume() {
  // Professional Summary from CV
  const summary = "Full-Stack Software Engineer with 4+ years of experience building scalable, maintainable web and mobile solutions using Laravel, Vue, React, and Flutter. Successfully delivered 40+ projects including ERP, POS, E-commerce, and SaaS platforms.";

  const experiences: Experience[] = [
    {
      role: "Software Engineer (Full-Stack Web)",
      company: "Softzino Technologies",
      date: "June 2023 – Present",
      desc: [
        "Lead development of scalable PHP and Laravel-based SaaS applications.",
        "Built modular, maintainable codebases using Laravel packages and Vue components.",
        "Collaborated with cross-functional teams to deliver secure, high-performance solutions."
      ]
    },
    {
      role: "Full-Stack Web & Flutter Developer",
      company: "Genie InfoTech",
      date: "Sept 2020 – May 2023",
      desc: [
        "Developed and maintained multi-tenant SaaS, POS, and e-commerce platforms.",
        "Designed RESTful APIs and integrated third-party services like payment gateways and push notifications.",
        "Delivered responsive mobile applications with Flutter."
      ]
    }
  ];

  const educations: Education[] = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Shahjalal University of Science and Technology",
      date: "2020",
      desc: "CGPA: 3.35/4.00"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajuk Uttara Model College",
      date: "2013",
      desc: "Science Group • GPA: 5.00/5.00"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Cumilla Zilla School",
      date: "2011",
      desc: "Science Group • GPA: 5.00/5.00"
    }
  ];

  const achievements: Cert[] = [
    {
      name: "Honorable Mention",
      issuer: "SUST CSE Carnival Programming Contest",
      date: "Programming"
    },
    {
      name: "2nd Place",
      issuer: "SEC ICT Fest",
      date: "Competition"
    },
    {
      name: "Top 10",
      issuer: "SUST Techfest Hackathon",
      date: "Hackathon"
    },
    {
      name: "Competitive Programming",
      issuer: "Solved 100+ problems on UVA; Codechef rating: 1506",
      date: "Continuous"
    }
  ];

  const skills = [
    "PHP", "JavaScript", "TypeScript", "Dart", "Java", "C++",
    "Laravel", "Node.js", "Express", "Vue.js", "React", "Next.js", "Flutter",
    "Tailwind CSS", "Bootstrap", "MUI",
    "MySQL", "PostgreSQL", "Firebase", "MongoDB",
    "Git", "Docker", "AWS", "REST APIs", "CI/CD", "OneSignal",
    "MCP", "RAG"
  ];

  return (
    <section className="min-h-screen relative py-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              <div className="bg-slate-900 rounded-full px-6 py-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold uppercase tracking-wider text-sm">
                      Career Path
                  </span>
              </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional <strong className="text-gradient">Resume</strong>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {summary}
          </p>
          
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <AiOutlineDownload className="text-xl" />
            <span>Download CV</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <FaBriefcase className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Work Experience</h2>
            </div>

            <div className="relative border-l-2 border-purple-900/50 pl-8 ml-4 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-purple-900 border-4 border-slate-900 group-hover:border-purple-500 group-hover:bg-purple-400 transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 group-hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                        <h4 className="text-lg text-slate-300">{exp.company}</h4>
                      </div>
                      <span className="mt-2 sm:mt-0 px-3 py-1 bg-purple-900/30 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.desc.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Skills (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Education Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-pink-900/30 rounded-lg border border-pink-500/30">
                  <FaGraduationCap className="text-2xl text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {educations.map((edu, index) => (
                  <div key={index} className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-900/10 group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">{edu.degree}</h3>
                            <p className="text-slate-300 text-sm">{edu.institution}</p>
                        </div>
                        <span className="text-xs font-medium text-pink-300 bg-pink-900/30 px-2 py-1 rounded border border-pink-500/20 whitespace-nowrap ml-2">
                            {edu.date}
                        </span>
                    </div>
                    {edu.desc && <p className="text-slate-400 text-sm mt-2">{edu.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
                  <FaCertificate className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Skills</h2>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-slate-800/50 hover:bg-blue-900/30 border border-slate-700 hover:border-blue-500/30 rounded-lg text-slate-300 hover:text-blue-300 text-sm transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

             {/* Achievements Section */}
             <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/30">
                  <FaAward className="text-2xl text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Achievements</h2>
              </div>

              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all duration-300 group">
                     <div className="mr-4 text-yellow-500 group-hover:scale-110 transition-transform">
                        <FaAward />
                     </div>
                     <div>
                        <h4 className="text-white font-medium group-hover:text-yellow-400 transition-colors">{item.name}</h4>
                        <p className="text-xs text-slate-400">{item.issuer} • {item.date}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}