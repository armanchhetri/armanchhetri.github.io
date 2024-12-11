import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automatic Speech Recognition for the Nepali Language",
      description: [
        "Developed a state-of-the-art deep learning model using CNN, LSTM, and ResNet.",
        "Achieved a Character Error Rate (CER) of 17.06%.",
        "Deployed a web interface for testing and built a chatbot for domain-specific question answering.",
        "Enhanced accuracy with Transfer Learning using the wav2vec transformer model."
      ],
      repository: "https://github.com/manishdhakal/ASR-Nepali-using-CNN-BiLSTM-ResNet"
    },
    {
      title: "Distributed Filestore",
      description: [
        "Implemented a distributed filestore from scratch in Go.",
        "Allows file storage and retrieval from any node in the system."
      ],
      repository: "https://github.com/armanchhetri/distributed-filestore"
    },
    {
      title: "HTTP Server",
      description: [
        "Built a simplified version of Go's `net/http` library from scratch.",
        "Implemented a custom multiplexer using Trie data structure."
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
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;