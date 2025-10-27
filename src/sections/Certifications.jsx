import React, { useState } from 'react';
import mita from '/mita.jpeg';
import novitech from '/novitech.png';

const certificates = [
  { src: mita, title: 'MITA Certificate' },
  { src: novitech, title: 'NoviTech Certificate' },
];

const CertificateGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-12 px-6" id="certifications">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#22D3EE]">
        My Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelected(cert.src)}
            className="cursor-pointer bg-white border-2 border-[#22D3EE] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full h-[300px] object-contain p-4"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#1E3A8A]">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Certificate"
            className="max-w-[90%] max-h-[85%] rounded-lg shadow-2xl border-4 border-[#22D3EE] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default CertificateGallery;
