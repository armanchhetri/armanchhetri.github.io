import React from 'react';

const Navigation = () => {
  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Publications', href: '#publications' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Affiliations', href: '#affiliations' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="text-xl font-bold text-blue-900">
            AC
          </a>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => {
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;