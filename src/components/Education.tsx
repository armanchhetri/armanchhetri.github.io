import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      location: "Lalitpur, Nepal",
      period: "Nov 2017 – April 2022",
      details: [
        "Graduated with First Division honors, achieving 78.21%.",
        "Ranked 29th out of 18,000 candidates in the 2017 entrance exam.",
        "Capstone Project: Speech Recognition in Nepali Language."
      ]
    },
    {
      degree: "High School",
      institution: "Liverpool International College",
      location: "Kathmandu, Nepal",
      period: "June 2015 – June 2017",
      details: [
        "Graduated in the top 5 of the class with 85.8% aggregate."
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