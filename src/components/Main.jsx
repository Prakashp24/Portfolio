// src/components/Main.js
import React from "react";
import Hello from "../sections/Hello";
import Profile from '../sections/Profile'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Education from '../sections/Education'
import Contact from '../sections/Contact'
import SocialLinks from "../sections/SocialLinks";
import CertificateCarousel from "../sections/Certifications";

const Main = () => {
  return (
    <>
      <Hello />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <CertificateCarousel />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default Main;
