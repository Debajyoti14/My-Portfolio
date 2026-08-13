import type {
  FeaturedProject,
  Job,
  NavLink,
  PracticeArea,
  Project,
  TechGroup,
  WritingEntry,
} from '@/types';

export const SOCIAL = {
  github: 'https://github.com/Debajyoti14',
  linkedin: 'https://www.linkedin.com/in/debajyotisaha14/',
  x: 'https://x.com/debajyotis14',
  email: 'mailto:debajyotisaha14@gmail.com',
  emailAddress: 'debajyotisaha14@gmail.com',
  resume:
    'https://drive.google.com/file/d/1pY_7Mm5PQNEpBgMWzbLvZSt6JZTAdoMT/view?usp=sharing',
};

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  // { href: '#writing', label: 'Writing' },
  { href: '#stack', label: 'Stack' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    index: '01',
    name: 'Cloud & DevOps',
    description:
      "I'm a tech enthusiast passionate about Cloud, DevOps, and Backend Development. I have experience working with tools like Rust, AWS, Docker, Kubernetes, Terraform to build scalable and efficient systems.",
  },
  {
    index: '02',
    name: 'Backend',
    description:
      'In Backend Development, I specialize in Node.js, Express, MongoDB, and microservices architecture, ensuring robust and high-performance applications.',
  },
  {
    index: '03',
    name: 'Web',
    description:
      'In Web Development, I work with Next.js, React, TypeScript, and Tailwind CSS to build modern and interactive user experiences.',
  },
  {
    index: '04',
    name: 'Mobile',
    description:
      'I have past experience in building Mobile Applications using Flutter, leveraging Dart, Firebase, BLoC, Provider, and SQLite for seamless cross-platform development.',
  },
];

/**
 * Work history. `visibleSkills` render by default; the rest expand behind the
 * "+N skills" toggle.
 *
 * NOTE (from the design handoff): the expanded skill lists are inferred from
 * the role descriptions — replace them with the real LinkedIn skill lists.
 */
export const EXPERIENCE: Job[] = [
  {
    company: 'Chainrisk',
    duration: '2 yrs 7 mos',
    location: 'Remote',
    roles: [
      {
        title: 'Cloud & Infra',
        type: 'Full-time',
        meta: 'Aug 2024 – Present · 2 yrs 1 mo · Remote',
        bullets: [
          'Built a TEE-attested Proof-of-Reserves system for Real-World Assets on AWS Nitro Enclaves. Designed a concurrent ZK-proof API (Circom + snarkjs) with bounded concurrency to prove asset reserves, binding Merkle commitments directly to hardware attestations (verifiable to AWS Root CA).',
          'Provisioned production AWS infrastructure as code (Terraform) — RDS PostgreSQL (multi-AZ), WAF, KMS, ALB, CloudWatch auto-scaling — backing a real-time DeFi protocol.',
          'Developed a Retrieval-Augmented Generation (RAG) backend utilizing Weaviate vector search and OpenAI to deliver accurate DeFi insights via Discord bot integrations.',
          'Architected and shipped several interactive partner community dashboards from scratch to production using NextJS.',
        ],
        visibleSkills: ['Amazon Web Services (AWS)', 'Cloud Computing'],
        hiddenSkills: ['AWS Nitro Enclaves', 'Zero-Knowledge Proofs', 'Rust', 'Docker'],
      },
      {
        title: 'Software Engineer',
        type: 'Part-time',
        meta: 'Feb 2024 – Aug 2024 · 7 mos · Remote',
        bullets: [
          'Worked on distributed risk-simulation control plane in Rust, orchestrating millions of parallel Monte Carlo simulations across an auto-scaling fleet of AWS Fargate (ECS) workers.',
          'Took entire ownership of frontend workloads from the first day, driving end-to-end development and ensuring seamless user experiences.',
        ],
        visibleSkills: ['Amazon Web Services (AWS)', 'Rust'],
        hiddenSkills: [
          'Amazon ECS',
          'Distributed Systems',
          'Concurrency',
          'Monte Carlo Simulation',
          'Docker',
          'Terraform',
        ],
      },
    ],
  },
  {
    company: 'DryFi Laundry',
    duration: 'Nov 2023 – Mar 2024 · 5 mos',
    location: 'Kolkata, West Bengal, India · Hybrid',
    roles: [
      {
        title: 'Software Engineer',
        type: 'Full-time',
        meta: 'Nov 2023 – Mar 2024 · 5 mos · Kolkata, India · Hybrid',
        bullets: [
          'Built the Admin Dashboard for efficient monitoring and orders management',
          'Built the POS from scratch to cater the Laundry Business',
          'Built Mobile App for Delivery Person using React Native',
        ],
        visibleSkills: ['Next.js', 'TypeScript'],
        hiddenSkills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      },
    ],
  },
  {
    company: 'ClueLess Community',
    duration: 'Feb 2022 – Jun 2024 · 2 yrs 5 mos',
    location: 'Kolkata, West Bengal, India · Remote',
    roles: [
      {
        title: 'Co-Founder',
        type: 'Self-employed',
        meta: 'Feb 2022 – Jun 2024 · 2 yrs 5 mos · Kolkata, India · Remote',
        body: 'Clueless is a developer community that builds developer tools with the power of open source. We believe in the vision “Learn and Grow” and encourage & guide enthusiasts to dive deep into the world of open source.',
      },
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  kicker: 'Featured — Backend',
  title: 'FlexAuth',
  description:
    'Flexauth is a flexible, blazingly fast, and secure auth system that you can use for your project/company. Need to add a specific feature as you need? Change the code as you like and deploy it on your servers.',
  image: '/images/projects/FlexAuth/flexauth1.png',
  tags: ['Rust', 'MongoDB', 'Docker', 'Kubernetes'],
  url: 'https://flexauth.vercel.app',
};

export const PROJECTS: Project[] = [
  {
    title: 'MamaVault',
    description:
      'Mama vault is a utility management application for pregnant women. It helps you manage your documents, reach your caring ones in one tap, and keep your memories safe.',
    image: '/images/projects/MamaVault/mamavault1.png',
    tags: ['Flutter', 'Dart', 'Go'],
    url: 'https://github.com/Debajyoti14/MamaVault',
  },
  {
    title: 'Socially',
    description:
      'This is a Social Media made with flutter & firebase. In this project Firebase Auth, Firebase Firestore and Firebase Storage is used to make it a realtime social media mobile Application.',
    image: '/images/projects/Socially/socially.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    url: 'https://github.com/Debajyoti14/Socially',
  },
  {
    title: 'Skribble Multiplayer Game',
    description:
      'This is Multiplayer Flutter app built with MongoDB, NodeJS and Socket.io. Here one player has to draw inorder to explain a certain Word where the other has to guess. Atlast the one who guesses right with time, Wins.',
    image: '/images/projects/Skribble/skribble.png',
    tags: ['Flutter', 'Dart', 'Socket', 'NodeJS', 'MongoDB'],
    url: 'https://github.com/Debajyoti14/Skribble-Multiplayer-Game',
  },
  {
    title: 'BookLee',
    description:
      'Booklee is a Web App, to sell and donate your second hand books at a minimal price or free of cost to help a needy learner, learn and grow more. This made it to the Finals of Microsoft Imagine Cup 2022',
    image: '/images/projects/Booklee/booklee1.png',
    tags: ['React', 'NextJS', 'Azure', 'Mapbox', 'Tailwind'],
    url: 'https://github.com/Rajdip019/booklee',
  },
  {
    title: 'Clueless Official Website',
    description:
      'This is Clueless official website where you can make your developer profile as well as meet new people across the world.',
    image: '/images/projects/Clueless Website/clueless1.png',
    tags: ['Typescript', 'NextJS', 'MUI', 'Firebase', 'GCP'],
    url: 'https://github.com/Clueless-Community/clueless-official-website',
  },
  {
    title: 'Smart Naka',
    description:
      'It is an Flutter application to facilitate police officers with Nakas in a more convenient way. With this We won Ethos - a national level hackathon oraganised by IIT Guwahati.',
    image: '/images/projects/Smart Naka/Smart Naka.png',
    tags: ['Flutter', 'Dart', 'OpenCV', 'AWS', 'Yolo v5'],
    url: 'https://github.com/Debajyoti14/Smart-Naka',
  },
];

/** Placeholder entries — wire to the real blog source. */
export const WRITING: WritingEntry[] = [
  { date: '2026 — 06', title: 'Post title goes here', href: '#writing' },
  { date: '2026 — 03', title: 'Post title goes here', href: '#writing' },
  { date: '2025 — 11', title: 'Post title goes here', href: '#writing' },
];

export const TECHNOLOGIES: TechGroup[] = [
  { label: 'Front-End', items: 'React, Next.js, Flutter, Dart, TypeScript, React-Native' },
  { label: 'Back-End', items: 'NodeJs, Rust, Firebase, MongoDB, GCP' },
  { label: 'Cloud & DevOps', items: 'AWS, GCP, Docker, Kubernetes, Terraform' },
  { label: 'UI/UX', items: 'Figma, Adobe XD' },
];
