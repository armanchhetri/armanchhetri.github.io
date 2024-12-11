import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Arman Chhetri</h1>
        <p className="text-xl mb-6">Software Engineer at Logpoint Inc.</p>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+9779867740214" className="flex items-center gap-2 hover:text-blue-300">
            <Phone size={20} /> +977 9867740214
          </a>
          <a href="mailto:armanchhetri44@gmail.com" className="flex items-center gap-2 hover:text-blue-300">
            <Mail size={20} /> armanchhetri44@gmail.com
          </a>
          <a href="https://linkedin.com/in/arman-chhetri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/armanchhetri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;