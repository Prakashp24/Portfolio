import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/Prakashp24',
    label: 'GitHub',
    color: "#000"
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/prakash-p-b3194229b/',
    label: 'LinkedIn',
    color: "#0A66C2"
  },
  {
    icon: <FaHackerrank />,
    link: 'https://www.hackerrank.com/profile/pks_prakashpand1',
    label: 'HackerRank',
    color: "#00EA64"
  },
  {
    icon: <SiGmail />,
    link: 'mailto:pks.prakashpandiyan@gmail.com',
    label: 'Gmail',
    color: "#D14836"
  },
];

const SocialLinks = () => {
  return (
    <section className="py-12 px-4" id="socials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#22D3EE] tracking-wide drop-shadow-lg">
          Connect With Me
        </h2>

        <p className="text-[#DDEEFF] mb-10 opacity-80">
          Let’s network & collaborate on amazing projects 🚀
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="group relative w-14 h-14 flex items-center justify-center rounded-xl backdrop-blur-lg bg-[#ffffff10]
              border border-[#22D3EE50] shadow-lg hover:shadow-[0_0_20px_#22D3EE]
              transition-all duration-300 hover:scale-125 hover:border-[#22D3EE] cursor-pointer"
            >
              <span
                className="text-3xl drop-shadow-lg transition-all duration-300 group-hover:scale-110"
                style={{ color: social.color }}
              >
                {social.icon}
              </span>

              {/* Glow behind icon */}
              <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition duration-300"
                style={{ backgroundColor: social.color }}>
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Glow Accent */}
        <div className="mt-10 h-1 w-40 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mx-auto animate-pulse opacity-70"></div>
      </div>
    </section>
  );
};

export default SocialLinks;
