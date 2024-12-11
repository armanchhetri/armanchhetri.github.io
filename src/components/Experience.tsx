import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Logpoint Inc.",
      role: "Software Engineer",
      location: "Lalitpur, Nepal",
      period: "April 2024 – Present",
      description: [
        "Building and maintaining tool for application server (Linux) monitoring (Tech stack: Golang, GraphQL, JS, Python).",
        "Managing the full software development lifecycle of a customer-facing License Portal (Tech stack: TypeScript, Rust, NodeJS, GraphQL, gRPC, NestJS, Ansible, GitLab CI, Docker)."
      ]
    },
    {
      company: "Logpoint Inc./ Tribhuvan University",
      role: "Lab Tutor (Part-time)",
      location: "Lalitpur, Nepal",
      period: "Jan 2024 – March 2024",
      description: [
        "Assisted in an elective course 'Security Operations Fundamentals'.",
        "Created course materials, evaluated assignments, and conducted labs on topics: Phishing Awareness, Threat Modeling, Security Information and Event Management.",
        "Instructed labs on Network Intrusion, Web, Linux systems security, and Application Security leveraging Arizona State University's pwn.college."
      ]
    },
    {
      company: "Logpoint Inc.",
      role: "Solutions Engineer",
      location: "Lalitpur, Nepal",
      period: "May 2023 – March 2024",
      description: [
        "Handled over 150 customer cases at the L3 support level.",
        "Conducted technical training programs for new hires.",
        "Worked extensively on SSL/TLS, PKI, and AWS-related projects.",
        "Contributed as a temporary Software Developer for the AgentX project, resolving over 10 complex software bugs."
      ]
    },
    {
      company: "Techniti Nepal",
      role: "Software Developer and Cofounder",
      location: "Lalitpur, Nepal",
      period: "Feb 2021 – March 2022",
      description: [
        "Developed web applications for healthcare, management portals, and a cricket fantasy platform.",
        "Gained experience with Python, JavaScript, MySQL, Linux servers, and Docker.",
        "Ensured application uptime during high traffic loads."
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
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