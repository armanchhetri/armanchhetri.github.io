import React from 'react';

const Skills = () => {
  const skills = {
    research: [
      "LLM inference and experimental evaluation (vLLM)",
      "Inference-cost / resource robustness measurement",
      "Software security and program analysis (working knowledge)",
      "Constant-time verification tooling (Boogie, Z3, SMACK/BAM)"
    ],
    languages: [
      "Python",
      "Go",
      "Rust",
      "TypeScript / JavaScript",
      "C/C++ (reading and systems work)"
    ],
    systems: [
      "Linux",
      "Docker",
      "Git / CI basics",
      "GraphQL, gRPC, NestJS (prior engineering work)"
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Research</h3>
            <ul className="space-y-2">
              {skills.research.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              {skills.languages.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Systems & Tools</h3>
            <ul className="space-y-2">
              {skills.systems.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
