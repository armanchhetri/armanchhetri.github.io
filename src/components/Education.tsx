import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "PhD in Cybersecurity",
      institution: "Rochester Institute of Technology (Golisano / Department of Cybersecurity)",
      location: "Rochester, NY",
      period: "Aug 2025 – Present",
      details: [
        "Advisor: Yinxi Liu",
        "Focus: LLM security (inference-cost stressors / resource robustness) and software security analysis."
      ]
    },
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      location: "Lalitpur, Nepal",
      period: "Nov 2017 – April 2022",
      details: [
        "Graduated with First Division honors.",
        "Capstone Project: Speech Recognition in Nepali Language."
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 mb-2">{edu.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
