import React from 'react';

const Skills = () => {
  const skills = {
    technical: [
      "Data Structures and Algorithms",
      "Python (Flask, Django, FastAPI)",
      "Bash Scripting, C/C++, Haskell, JavaScript, Go",
      "Linux, Computer Networking, System Troubleshooting",
      "DevOps tools: Vim, Git, Ansible, Puppet, GitHub Actions, Docker, Kubernetes",
      "Troubleshooting tools: netstat, Wireshark, strace, perf, btrace"
    ],
    soft: [
      "Fluent in English communication",
      "Problem-solving skills",
      "Ability to work under high-pressure environments",
      "Fast learning and research skills"
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              {skills.technical.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              {skills.soft.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {skill}
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