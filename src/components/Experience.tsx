import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Rochester Institute of Technology",
      role: "Graduate Research Assistant",
      location: "Rochester, NY",
      period: "Aug 2025 – Present",
      description: [
        "PhD research on LLM inference-cost stress testing and resource robustness under advisor Yinxi Liu.",
        "Studying vision-language model timing and behavior contracts for time-critical autonomous systems.",
        "Working on software security analysis, including constant-time verification and related tooling."
      ]
    },
    {
      company: "Logpoint Inc.",
      role: "Software Engineer",
      location: "Lalitpur, Nepal",
      period: "April 2024 – July 2025",
      description: [
        "Built and maintained Linux application-server monitoring tooling (Go, GraphQL, JavaScript, Python).",
        "Owned the customer-facing License Portal lifecycle (TypeScript, Rust, Node.js, GraphQL, gRPC, NestJS, Ansible, GitLab CI, Docker)."
      ]
    },
    {
      company: "Logpoint Inc. / Tribhuvan University",
      role: "Lab Tutor (Part-time)",
      location: "Lalitpur, Nepal",
      period: "Jan 2024 – March 2024",
      description: [
        "Supported the elective course Security Operations Fundamentals.",
        "Prepared materials and labs on phishing awareness, threat modeling, and SIEM.",
        "Ran labs on network intrusion, web and Linux security, and application security using pwn.college."
      ]
    },
    {
      company: "Logpoint Inc.",
      role: "Solutions Engineer",
      location: "Lalitpur, Nepal",
      period: "May 2023 – March 2024",
      description: [
        "Handled L3 customer cases and technical onboarding for new hires.",
        "Worked on SSL/TLS, PKI, and AWS support tasks.",
        "Temporarily contributed to AgentX development and bug fixes."
      ]
    },
    {
      company: "Techniti Nepal",
      role: "Software Developer and Cofounder",
      location: "Lalitpur, Nepal",
      period: "Feb 2021 – March 2022",
      description: [
        "Built web applications for healthcare, management portals, and a cricket fantasy platform.",
        "Used Python, JavaScript, MySQL, Linux, and Docker in day-to-day development."
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} | {exp.location}</p>
              <p className="text-gray-500 mb-2">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
