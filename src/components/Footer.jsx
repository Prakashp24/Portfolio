import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1F80] backdrop-blur-xl py-8 mt-16 border-t border-[#22D3EE30] shadow-lg shadow-[#22D3EE20]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Copywrite */}
        <p className="text-sm text-[#DDEEFF] opacity-80 hover:opacity-100 transition duration-300">
          © {new Date().getFullYear()} <span className="text-[#22D3EE] font-semibold">Prakash</span> — All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          {[ 
            { icon: <FaGithub size={26} />, link: "https://github.com/Prakashp24", color: "#e0e0e0" },
            { icon: <FaLinkedin size={26} />, link: "https://linkedin.com/in/prakash-p-b3194229b", color: "#0A66C2" },
            { icon: <SiGmail size={26} />, link: "mailto:pks.prakashpandiyan@gmail.com", color: "#D14836" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Social Link"
              className="relative flex items-center justify-center p-2 rounded-xl
              text-[#22D3EE] transition-all duration-300
              hover:scale-125 hover:text-white"
            >
              <span className="z-10" style={{ color: item.color }}>
                {item.icon}
              </span>

              {/* Glow on hover */}
              <span
                className="absolute inset-0 rounded-xl blur-xl opacity-0 hover:opacity-40 transition duration-300"
                style={{ backgroundColor: item.color }}
              ></span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-6 mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[#22D3EE80] to-transparent animate-pulse"></div>
    </footer>
  );
};

export default Footer;
