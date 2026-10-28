export const personalInfo = {
  name: "S. Nivetha",
  firstName: "Nivetha",
  lastName: "S",
  age: "21",
  nationality: "Indian",
  freelance: "Available",
  languages: "English, Tamil",
  title: "MERN Stack Developer | Full Stack Developer",
  shortBio: "MERN Stack Developer with nearly one year of hands-on experience building responsive, API-driven web applications and admin panels using React.js, Node.js, Express.js, MongoDB, MySQL and Tailwind CSS.",
  location: "Chennai, Tamil Nadu, India",
  address: "Tambaram, Chennai, Tamil Nadu, India",
  email: "nivethas1112@gmail.com",
  phone: "+91 8778461163",
  github: "https://github.com/nivetha-os",
  linkedin: "https://linkedin.com/in/nivetha-seetharaman-ab7335363",
  status: "Available for Opportunities",
  experienceYears: "Nearly 1 Year",
  resumeUrl: "/Nivetha_S_Resume.pdf"
};

export const aboutData = {
  heading: "About Me",
  watermark: "RESUME",
  subheading: "MERN Stack Developer with nearly one year of hands-on experience building responsive, API-driven web applications and admin panels.",
  paragraphs: [
    "I'm S. Nivetha, a MERN Stack Developer based in Chennai, Tamil Nadu, India. I specialize in building responsive, API-driven web applications and administrative panels using React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS.",
    "I have delivered three client projects (two of them currently live in production), and I am actively developing Serviq, an end-to-end restaurant management platform where I own the admin panel UI, inventory management module, and full frontend-backend API integration.",
    "I'm a quick learner with a keen eye for clean UI, reusable components, robust database architecture, and writing maintainable code."
  ],
  stats: [
    { number: "01", suffix: "YR", label1: "Nearly 1 Year", label2: "Hands-on Experience" },
    { number: "03", suffix: "+", label1: "Client Projects", label2: "Delivered & Maintained" },
    { number: "02", suffix: "", label1: "Live In Production", label2: "Active Web Platforms" },
    { number: "10", suffix: "+", label1: "Core Technologies", label2: "React, Node, DBs & More" }
  ],
  terminalFiles: {
    "profile.js": `// S. Nivetha — MERN Stack Developer
const developer = {
  name: "S. Nivetha",
  location: "Chennai, Tamil Nadu, India",
  role: "MERN Stack Developer",
  status: "Available for Opportunities",
  specialties: [
    "Enterprise Admin Panels",
    "Full-Stack Web Applications",
    "Inventory & Booking Modules",
    "RESTful API Architecture"
  ],
  readyToBuild: true
};

console.log(\`Ready to deliver production-grade applications!\`);`,
    "stack.json": `{
  "frontend": ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  "backend": ["Node.js", "Express.js", "RESTful APIs", "PHP"],
  "databases": ["MongoDB", "MySQL", "SQL"],
  "tools": ["Git & GitHub", "Postman", "VS Code", "Vite"]
}`,
    "philosophy.ts": `// Engineering Philosophy
interface WorkEthic {
  codeQuality: "High maintainability & reusable modularity";
  performance: "Fast response times & clean API queries";
  uiExcellence: "Intuitive, mobile-first responsive interfaces";
  reliability: "Error handling, Postman testing, validation";
}

export const mission: WorkEthic = {
  codeQuality: "High maintainability & reusable modularity",
  performance: "Fast response times & clean API queries",
  uiExcellence: "Intuitive, mobile-first responsive interfaces",
  reliability: "Error handling, Postman testing, validation"
};`
  },
  highlights: [
    {
      title: "Admin Panels & Dashboards",
      description: "Building end-to-end admin panels, inventory management modules, and secure CRUD operations.",
      icon: "ShieldCheck"
    },
    {
      title: "RESTful API Integration",
      description: "Designing and integrating Express.js APIs with robust form validation and error handling.",
      icon: "Server"
    },
    {
      title: "Reusable UI Components",
      description: "Crafting clean, responsive interfaces across desktop, tablet, and mobile with Tailwind CSS.",
      icon: "Layout"
    },
    {
      title: "Multi-Database Handling",
      description: "Managing data modeling and persistence using MongoDB, MySQL, and SQL databases.",
      icon: "Database"
    }
  ]
};

export const servicesData = [
  {
    num: "01",
    category: "Full Stack",
    title: "MERN Web Applications",
    description: "End-to-end web application development using React.js frontend, Node.js & Express.js backend, and MongoDB/MySQL persistence.",
    features: [
      "Custom business logic & schema modeling",
      "High-speed SPA navigation",
      "Robust state management & async flows",
      "End-to-end testing with Postman"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"]
  },
  {
    num: "02",
    category: "Operations",
    title: "Admin Panels & Dashboards",
    description: "Secure, intuitive administrative portals equipped with role controls, live data dashboards, inventory tracking, and full CRUD tables.",
    features: [
      "Inventory & stock tracking modules",
      "Booking & customer order management",
      "Secure CRUD operations with validation",
      "Data export and dynamic filtering"
    ],
    tech: ["React", "Express APIs", "Tailwind CSS", "SQL / NoSQL"]
  },
  {
    num: "03",
    category: "Backend & Cloud",
    title: "RESTful API Engineering",
    description: "Scalable REST APIs designed for high efficiency, clean routing, structured controllers, error middlewares, and third-party integrations.",
    features: [
      "Clean route & controller separation",
      "JSON input validation & sanitization",
      "Automated email & lead integrations",
      "Postman test suites & documentation"
    ],
    tech: ["Node.js", "Express.js", "REST APIs", "Postman", "PHP"]
  },
  {
    num: "04",
    category: "UI / UX",
    title: "Responsive Frontend Engineering",
    description: "Pixel-perfect, mobile-friendly user interfaces crafted with Tailwind CSS and Bootstrap, emphasizing modular reusable components.",
    features: [
      "Responsive across phone, tablet, and desktop",
      "Clean semantic HTML5 structure",
      "Subtle micro-animations & state feedback",
      "Cross-browser tested & fast loading"
    ],
    tech: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript ES6+"]
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core", icon: "FileCode", tags: ["ES6+", "Async/Await", "DOM"] },
      { name: "HTML5 & CSS3", level: "Core", icon: "Layers", tags: ["Semantic HTML", "Responsive Layouts"] },
      { name: "PHP", level: "Core", icon: "Code2", tags: ["Server Scripts", "Email Integration"] },
      { name: "SQL", level: "Core", icon: "Database", tags: ["Relational Queries", "Data Modeling"] }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Core", icon: "Code2", tags: ["Components", "Hooks", "Reusable UI"] },
      { name: "Tailwind CSS", level: "Core", icon: "Palette", tags: ["Utility-First", "Modern UI", "Responsive"] },
      { name: "Bootstrap", level: "Core", icon: "Boxes", tags: ["Grid System", "Responsive Layouts"] },
      { name: "Reusable Components", level: "Core", icon: "Layers", tags: ["Modularity", "UI Consistency"] }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Core", icon: "Cpu", tags: ["Async Operations", "Server Logic"] },
      { name: "Express.js", level: "Core", icon: "Server", tags: ["Routing", "Middleware", "Controllers"] },
      { name: "RESTful APIs", level: "Core", icon: "Network", tags: ["CRUD Operations", "API Integration", "Validation"] }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: "Core", icon: "Database", tags: ["NoSQL", "Document Modeling", "CRUD"] },
      { name: "MySQL / SQL", level: "Core", icon: "TableProperties", tags: ["Relational Tables", "Queries"] }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Core", icon: "GitBranch", tags: ["Version Control", "Collaboration"] },
      { name: "Postman", level: "Core", icon: "Send", tags: ["API Testing", "Validation"] },
      { name: "VS Code", level: "Core", icon: "Zap", tags: ["IDE", "Productivity"] }
    ]
  }
];

export const experienceData = [
  {
    period: "2026 — Present",
    role: "MERN Stack Developer",
    company: "Ocean Softwares Private Limited, Tambaram",
    location: "Chennai, Tamil Nadu, India",
    type: "Full-Time",
    description: "Developing and maintaining responsive, production-ready web applications using React.js, Node.js, and Express.js for client projects.",
    achievements: [
      "Develop and maintain responsive, production-ready web applications using React.js, Node.js, and Express.js for client projects.",
      "Build complete admin panels, from UI design to backend API integration, for restaurant, theatre, and charity clients.",
      "Develop an inventory management module and admin dashboards for managing content and records through secure CRUD operations.",
      "Build reusable React components and maintain a consistent, mobile-friendly UI across screen sizes using Tailwind CSS and Bootstrap.",
      "Design and integrate REST APIs between frontend and backend for dynamic, data-driven features, with form validation and error handling.",
      "Work with MongoDB, MySQL, and SQL databases to store and retrieve application data for admin and customer-facing modules.",
      "Deliver end-to-end client websites, from requirement understanding and UI development to API integration, testing, and live deployment.",
      "Integrate email functionality into client websites so enquiries and form submissions reach business owners directly.",
      "Debug issues, test APIs with Postman, and collaborate with the engineering team via Git and GitHub."
    ],
    tech: [""]
  }
];

export const projectsData = [
  {
    id: "theatre-booking",
    title: "Private Theatre Booking Website & Admin Panel",
    shortTitle: "The Tiny Theatre",
    company: "OCEAN SOFTWARES",
    subTag: "Theatre Booking System",
    category: "Full Stack",
    badge: "Live System",
    image: "/tinytheatre.png",
    shortDescription: "Customer-facing website and comprehensive admin panel for a private theatre booking business, live in production.",
    fullDescription: "A production booking platform featuring customer-facing slot reservation and a dedicated administrative portal to manage bookings, slot availability, pricing, and dynamic website content.",
    features: [
      "Built responsive pages for theatre details, available slots, and booking enquiries",
      "Created an admin panel to manage bookings, slots, and website content with full CRUD operations",
      "Integrated frontend and backend through REST APIs with form validation and error handling",
      "Live in production and actively serving booking customers"
    ],
    roles: [
      "Frontend Development",
      "Admin Panel Engineering",
      "Database Modeling",
      "REST API Integration",
      "Slot Booking Workflow"
    ],
    techStack: ["React", "Node.js", "Express.js", "SQL", "Bootstrap", "REST APIs"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://thetinytheatre.in"
  },
  {
    id: "charity-website",
    title: "Charity Website with Admin Panel",
    shortTitle: "Anbu Suzhalagu Charity",
    company: "OCEAN SOFTWARES",
    subTag: "Charity & Donor Portal",
    category: "Full Stack",
    badge: "Live System",
    image: "/charity.png",
    shortDescription: "Public charity website live in production, featuring a separate administrative panel for managing content and donor initiatives.",
    fullDescription: "A full-featured public charity platform coupled with an administrative backend for managing content updates, community initiatives, dynamic records, and donor outreach.",
    features: [
      "Developed a public charity website along with a separate admin panel for managing website content",
      "Integrated APIs for administrative operations and for displaying dynamic data on the public portal",
      "Tested API endpoints with Postman and maintained code versioning with Git and GitHub",
      "Live in production"
    ],
    roles: [
      "Frontend Development",
      "Admin Dashboard",
      "RESTful API Integration",
      "Database Architecture",
      "Production Deployment"
    ],
    techStack: ["React", "Node.js", "Express.js", "SQL", "REST APIs"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://anbusuzhulagu.org"
  },
  {
    id: "meadows-landsale",
    title: "Meadows - Land Sale Website",
    shortTitle: "Meadows Asset Tree",
    company: "OCEAN SOFTWARES",
    subTag: "Real Estate Campaign",
    category: "Full Stack",
    badge: "Live System",
    image: "/meadows.png",
    shortDescription: "Property listing and sales website with responsive design and automated PHP email enquiry delivery.",
    fullDescription: "A commercial real-estate campaign portal featuring property listing showcases, plot layout galleries, and an automated lead capture enquiry form delivering customer leads directly to management.",
    features: [
      "Responsive, user-friendly property listing pages for customer browsing",
      "Integrated enquiry form so customers can view available plots and contact business representatives",
      "Implemented server-side email integration in PHP ensuring leads reach the business owners directly",
      "Live in production"
    ],
    roles: [
      "Frontend UI/UX",
      "Responsive Layouts",
      "Server-side PHP",
      "Email Automation",
      "Lead Capture Pipeline"
    ],
    techStack: ["HTML5", "CSS3", "PHP", "Email Integration"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://campaign.assettreehomes.com"
  },
  {
    id: "serviq-platform",
    title: "Serviq - Restaurant Management Platform",
    shortTitle: "Serviq Platform",
    company: "OCEAN SOFTWARES",
    subTag: "Serviq Admin & POS",
    category: "Admin Panels",
    badge: "Active Development",
    image: "/serviq.png",
    shortDescription: "Restaurant management platform where I own the admin panel UI, inventory management module, and complete frontend-backend API integration.",
    fullDescription: "A comprehensive enterprise management platform designed to digitize and streamline restaurant operations, inventory tracking, order management, and administrative records through secure CRUD operations.",
    features: [
      "Developed the complete admin panel UI for managing restaurant operations and records",
      "Built the inventory management module to add, update, track, and manage stock items with full CRUD operations",
      "Integrated the entire admin panel with backend REST APIs, complete with form validation and error handling",
      "Responsive layouts and reusable components built with React.js"
    ],
    roles: [
      "Frontend Development",
      "Backend Development",
      "Database Architecture",
      "REST API Integration",
      "Inventory Management Module"
    ],
    techStack: ["React", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "#contact"
  }
];

export const educationData = [
  {
    degree: "Full Stack Development Course",
    institution: "Cadpoint",
    location: "Chennai, Tamil Nadu, India",
    period: "2025",
    description: "Specialized training covering HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express, and SQL."
  },
  {
    degree: "B.A. English Literature",
    institution: "Pachaiyappa's College for Women, University of Madras",
    location: "Chennai, Tamil Nadu, India",
    period: "2024",
    description: "Graduated with a focus on English Literature, Professional Communication, and Analytical Problem Solving."
  }
];

export const certificationsData = [
  {
    name: "Full Stack Development Specialization",
    issuer: "Cadpoint",
    skills: "React.js, Node.js, Express.js, SQL, Bootstrap, JavaScript",
    period: "2025"
  }
];
