import React from 'react';
import { Github, Linkedin, Mail, Globe, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Arman Chhetri</h1>
        <p className="text-xl mb-2">PhD Student in Cybersecurity</p>
        <p className="text-lg text-blue-100 mb-4">
          Golisano College of Computing and Information Sciences · Department of Cybersecurity · Rochester Institute of Technology
        </p>
        <p className="text-base text-blue-50 mb-2 max-w-3xl">
          Research on LLM security—especially inference-cost stressors and resource robustness—and software security analysis.
        </p>
        <p className="text-base text-blue-100 mb-6">Advisor: Yinxi Liu</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://armanchhetri.com.np" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <Globe size={20} /> armanchhetri.com.np
          </a>
          <a href="mailto:ac7240@rit.edu" className="flex items-center gap-2 hover:text-blue-300">
            <Mail size={20} /> ac7240@rit.edu
          </a>
          <a href="https://linkedin.com/in/arman-chhetri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/armanchhetri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <Github size={20} /> GitHub
          </a>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <FileText size={20} /> CV (PDF)
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
