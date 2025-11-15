// Type declarations for existing JSX modules
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.pdf' {
  const value: string;
  export default value;
}

// Declare existing JSX components
declare module '@/components/Pre.jsx' {
  const Preloader: React.FC<{ load: boolean }>;
  export default Preloader;
}

declare module '@/components/ScrollToTop.jsx' {
  const ScrollToTop: React.FC;
  export default ScrollToTop;
}

declare module '@/components/Footer.jsx' {
  const Footer: React.FC;
  export default Footer;
}

declare module '@/components/About/About.jsx' {
  const About: React.FC;
  export default About;
}

declare module '@/components/Projects/Projects.jsx' {
  const Projects: React.FC;
  export default Projects;
}

declare module '@/components/Resume/Resume.jsx' {
  const Resume: React.FC;
  export default Resume;
}

declare module '@/components/Home/Home2.jsx' {
  const Home2: React.FC;
  export default Home2;
}

declare module '@/components/Home/Type.jsx' {
  const Type: React.FC;
  export default Type;
}

declare module '@/components/Particle.jsx' {
  const Particle: React.FC;
  export default Particle;
}