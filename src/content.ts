export const profile = {
  name: 'Arman Chhetri',
  role: 'PhD Student in Cybersecurity',
  affiliation:
    'Golisano College of Computing and Information Sciences · Department of Cybersecurity · Rochester Institute of Technology',
  research:
    'Research on LLM security—especially inference-cost stressors and resource robustness—and on side-channel and non-constant-time (non-CT) verification.',
  advisor: 'Yinxi Liu',
  site: 'https://armanchhetri.com.np',
  siteLabel: 'armanchhetri.com.np',
  email: 'ac7240@rit.edu',
  linkedin: 'https://linkedin.com/in/arman-chhetri',
  github: 'https://github.com/armanchhetri',
  cvHref: '/CV.pdf',
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Rochester Institute of Technology',
    role: 'Graduate Research Assistant',
    location: 'Rochester, NY',
    period: 'Aug 2025 – Present',
    description: [
      'PhD research on LLM inference-cost stress testing and resource robustness under advisor Yinxi Liu.',
      'Studying vision-language model timing and behavior contracts for time-critical autonomous systems.',
      'Research on side-channel and non-constant-time (non-CT) verification.',
    ],
  },
  {
    company: 'Logpoint Inc.',
    role: 'Software Engineer',
    location: 'Lalitpur, Nepal',
    period: 'April 2024 – July 2025',
    description: [
      'Built and maintained Linux application-server monitoring tooling (Go, GraphQL, JavaScript, Python).',
      'Owned the customer-facing License Portal lifecycle (TypeScript, Rust, Node.js, GraphQL, gRPC, NestJS, Ansible, GitLab CI, Docker).',
    ],
  },
  {
    company: 'Logpoint Inc. / Tribhuvan University',
    role: 'Lab Tutor (Part-time)',
    location: 'Lalitpur, Nepal',
    period: 'Jan 2024 – March 2024',
    description: [
      'Supported the elective course Security Operations Fundamentals.',
      'Prepared materials and labs on phishing awareness, threat modeling, and SIEM.',
      'Ran labs on network intrusion, web and Linux security, and application security using pwn.college.',
    ],
  },
  {
    company: 'Logpoint Inc.',
    role: 'Solutions Engineer',
    location: 'Lalitpur, Nepal',
    period: 'May 2023 – March 2024',
    description: [
      'Handled L3 customer cases and technical onboarding for new hires.',
      'Worked on SSL/TLS, PKI, and AWS support tasks.',
      'Temporarily contributed to AgentX development and bug fixes.',
    ],
  },
  {
    company: 'Techniti Nepal',
    role: 'Software Developer and Cofounder',
    location: 'Lalitpur, Nepal',
    period: 'Feb 2021 – March 2022',
    description: [
      'Built web applications for healthcare, management portals, and a cricket fantasy platform.',
      'Used Python, JavaScript, MySQL, Linux, and Docker in day-to-day development.',
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    degree: 'PhD in Cybersecurity',
    institution: 'Rochester Institute of Technology (Golisano / Department of Cybersecurity)',
    location: 'Rochester, NY',
    period: 'Aug 2025 – Present',
    details: [
      'Advisor: Yinxi Liu',
      'Focus: LLM security (inference-cost stressors / resource robustness) and side-channel / non-constant-time (non-CT) verification.',
    ],
  },
  {
    degree: 'Bachelor in Computer Engineering',
    institution: 'Pulchowk Campus, Tribhuvan University',
    location: 'Lalitpur, Nepal',
    period: 'Nov 2017 – April 2022',
    details: [
      'Graduated with First Division honors.',
      'Capstone Project: Speech Recognition in Nepali Language.',
    ],
  },
];

export type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  doi?: string;
};

export const publications: Publication[] = [
  {
    title:
      'Metamorphic Stress Testing of Vision-Language Components for Time-Critical Autonomous Systems',
    authors: 'Arman Chhetri, Yinxi Liu',
    venue: "TRUST '26 @ ASE 2026",
    year: 2026,
    doi: '10.1145/3843782.3844660',
  },
  {
    title:
      'When Do Inference-Cost Stress Tests Generalize? A Cross-Model and Cross-Configuration Measurement Study',
    authors: 'Arman Chhetri, Yinxi Liu',
    venue: "RASE '26 @ ASE 2026",
    year: 2026,
    doi: '10.1145/3820756.3844910',
  },
  {
    title:
      'Automatic speech recognition for the Nepali language using CNN, bidirectional LSTM, and ResNet',
    venue: '2022 International Conference on Inventive Computation Technologies (ICICT)',
    year: 2022,
    doi: '10.1109/ICICT54344.2022.9850832',
  },
];

export type Project = {
  title: string;
  description: string[];
  repository?: string;
};

export const projects: Project[] = [
  {
    title: 'ContamBench',
    description: [
      'Contamination stress dataset and CLIs for open-weight LLM serving stacks.',
      'Supports measurement of inference-cost behavior under contaminated or adversarial-style workloads.',
      'Used in cross-model and cross-configuration inference-cost evaluation.',
    ],
  },
  {
    title: 'Build Git from scratch',
    description: [
      'Small version of Git implemented from scratch in Go.',
      'Recreates core version-control operations from first principles.',
    ],
    repository: 'https://github.com/armanchhetri/build-your-own-git',
  },
  {
    title: 'Distributed Filestore',
    description: [
      'Flat file store distributed across multiple nodes (Go).',
      'Store and retrieve files across nodes.',
    ],
    repository: 'https://github.com/armanchhetri/distributed-filestore',
  },
  {
    title: 'Interpreter from scratch',
    description: [
      'Lox interpreter implemented from scratch in Rust.',
      'Builds the core interpreter pipeline for the Lox language.',
    ],
    repository: 'https://github.com/armanchhetri/Interpreter-from-scratch',
  },
];

export const skills = {
  research: [
    'LLM inference and experimental evaluation (vLLM)',
    'Inference-cost / resource robustness measurement',
    'Software security and program analysis (working knowledge)',
    'Side-channel and non-constant-time (non-CT) verification',
  ],
  languages: [
    'Python',
    'Go',
    'Rust',
    'TypeScript / JavaScript',
    'C/C++ (reading and systems work)',
  ],
  systems: [
    'Linux',
    'Docker',
    'Git / CI basics',
    'GraphQL, gRPC, NestJS (prior engineering work)',
  ],
};

export const certifications = [
  'ISC2 Certified in Cybersecurity',
  'LinkedIn Advanced Linux: The Linux Kernel',
  'Cisco Networking Academy Networking Essentials',
  'AWS Academy Graduate',
  'Coursera Algorithmic Toolbox',
  'Coursera Deep Learning Specialization',
];

export type Affiliation = {
  organization: string;
  year?: number;
  period?: string;
  roles?: string[];
};

export const affiliations: Affiliation[] = [
  {
    organization: 'Microsoft Learn Student Ambassadors',
    year: 2019,
  },
  {
    organization: 'LOCUS',
    roles: ['Datarush Contest Organizer (2021)', 'Children in Tech Organizer (2021)'],
  },
  {
    organization: 'ANSWER Scholar',
    period: '2012–2022',
  },
];

export const navItems = [
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Affiliations', href: '#affiliations' },
] as const;
