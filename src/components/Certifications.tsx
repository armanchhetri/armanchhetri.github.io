import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "ISC2 Certified in Cybersecurity",
    "LinkedIn Advanced Linux: The Linux Kernel",
    "Cisco Networking Academy Networking Essentials",
    "AWS Academy Graduate",
    "Coursera Algorithmic Toolbox",
    "Coursera Deep Learning Specialization"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
              <Award className="text-blue-600" size={20} />
              <span className="text-gray-800">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;