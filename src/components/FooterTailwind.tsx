import React, { memo } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: AiFillGithub,
    url: "https://github.com/arafatkat",
    label: "GitHub",
  },
  {
    icon: AiOutlineTwitter,
    url: "https://twitter.com/arafat_kamal_",
    label: "Twitter",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/arafat-kamal-8a7184194/",
    label: "LinkedIn",
  },
  {
    icon: AiFillInstagram,
    url: "https://www.instagram.com/arafat.kamal.3/",
    label: "Instagram",
  },
];

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Designed by */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-300">
              Designed and Developed by Arafat Kamal
            </h3>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-300">
              Copyright © {currentYear} AK
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-white hover:text-purple-400 transition-colors duration-200 p-2 rounded-full hover:bg-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;