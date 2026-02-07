import React, { memo } from "react";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  {
    icon: AiFillGithub,
    url: "https://github.com/arafatkat",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/arafat-kamal-8a7184194/",
    label: "LinkedIn",
  },
  {
    icon: BsTwitterX,
    url: "https://twitter.com/arafat_kamal_",
    label: "X (Twitter)",
  },
];

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-7xl">
        {/* Liquid Glass Footer Container */}
        <div className="liquid-glass-footer">
          {/* Copyright Text */}
          <div className="text-center mb-6">
            <p className="text-slate-300 text-sm font-medium">
              Copyright © {currentYear} Arafat Kamal. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="liquid-glass-social-icon"
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
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;