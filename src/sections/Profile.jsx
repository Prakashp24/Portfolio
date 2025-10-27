import React from 'react';
import prakashImage from '../assets/prakash.JPG';

const Profile = () => {
  return (
    <section id="about" className="py-20 px-6 text-[#F5F5F5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ✅ Profile Image - Square Neon Frame */}
        <div className="flex justify-center w-full">
          <div className="
            w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 
            overflow-hidden 
            border-4 border-[#64FFDA] 
            shadow-[0_0_20px_#64FFDA70]
            hover:shadow-[0_0_35px_#64FFDA]
            transition-all duration-500
            hover:scale-105
            rounded-[14px]
          ">
            <img
              src={prakashImage}
              alt="Prakash Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h2 className="text-4xl font-bold text-[#64FFDA] mb-4">About Me</h2>

          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            I'm <span className="font-semibold text-[#64FFDA]">Prakash</span>, a passionate
            Full Stack Developer (Python) focused on building fast, scalable
            web applications using <span className="text-[#64FFDA] font-semibold">
            Django & React</span>.
          </p>

          {/* Highlights Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 text-base mb-6">
            <li>✅ Backend API Development</li>
            <li>✅ React Dynamic UI</li>
            <li>✅ Database & Authentication</li>
            <li>✅ Problem Solver</li>
          </ul>

          <p className="text-lg text-gray-300 leading-relaxed">
            I love transforming ideas into structured, user-centered products.
            Open to full-time roles & internships to grow and build real-world applications 🚀
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;
