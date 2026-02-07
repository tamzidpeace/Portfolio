import React from "react";
import ProjectCard from "./ProjectCards.tsx";
import Particle from "../Particle.tsx";

import hishabi from "../../Assets/Projects/hishabi.png";
import jibonsheba from "../../Assets/Projects/jibonsheba.png";
import limadi from "../../Assets/Projects/limadi.png";
import ibm from "../../Assets/Projects/ibm1.png";
import maway from "../../Assets/Projects/maway.png";
import unimass_portfolio from '../../Assets/Projects/unimass_portfolio.png'
import ebox_live from '../../Assets/Projects/ebox-live.png'

function Projects(): React.ReactElement {
  const projects = [
    {
      imgPath: hishabi,
      isBlog: false,
      title: "Hishabi",
      description: "Inventory & POS system built with Laravel and Vue. Multi-package architecture, REST APIs, real-time reporting.",
      link: "https://hishabi.com"
    },
    {
      imgPath: jibonsheba,
      isBlog: false,
      title: "Jibon Sheba",
      description: "Diagnostic management system. Role-based access, lab test tracking, automation workflows.",
      link: "https://jibonsheba.com"
    },
    {
      imgPath: limadi,
      isBlog: false,
      title: "Limadi",
      description: "Fleet management platform with real-time route optimization, vehicle tracking. Laravel backend, Flutter app, React admin dashboard.",
      link: "https://limadi.dk"
    },
    {
      imgPath: ibm,
      isBlog: false,
      title: "IBM",
      description: "A School Management System for Ibrahim Memorial Shikkha Niketon. This system allows the school to manage the students, teachers, and parents. It also allows the school to manage the school's admission and the school's events.",
      link: "https://ibm.orbitsource.net/"
    },
    {
      imgPath: maway,
      isBlog: false,
      title: "Maway",
      description: "Driving Management System for Maway. This system allows the school to manage the instructors and students. Instructors can spread their skills to students from renowned schools. Students can learn from the instructors and can ...",
      link: "https://maway.atiar.info/"
    },
    {
      imgPath: unimass_portfolio,
      isBlog: false,
      title: "Unimass",
      description: "Since its inception in 2010, Unimass Holdings Ltd. creates greater value of living for its Clients, Landowners and Stakeholders. Unimass Holdings Ltd. has made it a success story by establishing long term mutually beneficial relationship...",
      link: "https://unimassportfolio.atiar.info/"
    },
    {
      imgPath: ebox_live,
      isBlog: false,
      title: "Ebox-Live",
      description: "An FTP Media Server. To enjoy free movies, tv series, and documentaries you can visit here. The latest Multimedias are available here. Contents are regularly updated. The most valuable thing about this server is ....",
      link: "http://103.49.168.173/home"
    }
  ];

  return (
    <section className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My Recent <strong className="text-gradient">Works</strong>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;