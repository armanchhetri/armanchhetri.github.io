import React from 'react';
import { Github } from 'lucide-react';

type Project = {
  title: string;
  description: string[];
  repository?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ContamBench",
      description: [
        "Contamination stress dataset and CLIs for open-weight LLM serving stacks.",
        "Supports measurement of inference-cost behavior under contaminated or adversarial-style workloads.",
        "Used in cross-model and cross-configuration inference-cost evaluation."
      ]
    },
    {
      title: "Metamorphic VLM Stress Testing",
      description: [
        "Metamorphic stress tests for vision-language components in time-critical settings.",
        "Focuses on timing and behavior contracts rather than accuracy alone.",
        "Aligned with TRUST '26 work on autonomous-system VLM robustness."
      ]
    },
    {
      title: "Constant-Time Verification (CT_Prover)",
      description: [
        "Software security analysis for constant-time properties in cryptographic code.",
        "Observation-directed relational slicing applied to libraries such as BearSSL RSA.",
        "Uses Boogie, Z3, and SMACK/BAM in the verification workflow. Advisor: Yinxi Liu."
      ]
    },
    {
      title: "Distributed Filestore",
      description: [
        "Distributed file storage implemented in Go.",
        "Supports store and retrieve operations from any node in the system."
      ],
      repository: "https://github.com/armanchhetri/distributed-filestore"
    },
    {
      title: "HTTP Server",
      description: [
        "Simplified HTTP server inspired by Go's net/http package.",
        "Custom request multiplexer based on a Trie."
      ],
      repository: "https://github.com/armanchhetri/http-server"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <Github size={20} /> View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
