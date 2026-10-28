export const personalInfo = {
  name: "S. Nivetha",
  title: "MERN Stack Developer | Full Stack Developer",
  shortBio: "MERN Stack Developer with nearly one year of hands-on experience building responsive, API-driven web applications and admin panels using React.js, Node.js, Express.js, MongoDB, MySQL and Tailwind CSS.",
  location: "Chennai, Tamil Nadu, India",
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
  subheading: "MERN Stack Developer with nearly one year of hands-on experience building responsive, API-driven web applications and admin panels.",
  paragraphs: [
    "I'm S. Nivetha, a MERN Stack Developer based in Chennai, Tamil Nadu, India. I specialize in building responsive, API-driven web applications and administrative panels using React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS.",
    "I have delivered three client projects (two of them currently live in production), and I am actively developing Serviq, an end-to-end restaurant management platform where I own the admin panel UI, inventory management module, and full frontend-backend API integration.",
    "I'm a quick learner with a keen eye for clean UI, reusable components, robust database architecture, and writing maintainable code."
  ],
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
    period: "April 2026 — Present",
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
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS", "Bootstrap", "REST APIs"]
  }
];

export const projectsData = [
  {
    id: "serviq-platform",
    title: "Serviq - Restaurant Management Platform",
    category: "Admin Panels",
    badge: "Active Development",
    shortDescription: "Restaurant management platform where I own the admin panel UI, inventory management module, and complete frontend-backend API integration.",
    fullDescription: "An end-to-end restaurant management suite designed for managing restaurant operations, records, and stock. Developed with responsive layouts, reusable components, and secure CRUD operations.",
    features: [
      "Developed the complete admin panel UI for managing restaurant operations and records",
      "Built the inventory management module to add, update, track, and manage stock items with full CRUD operations",
      "Integrated the entire admin panel with backend REST APIs, complete with form validation and error handling",
      "Responsive layouts and reusable components built with React.js"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "#contact"
  },
  {
    id: "theatre-booking",
    title: "Private Theatre Booking Website & Admin Panel",
    category: "Full Stack",
    badge: "Live in Production",
    shortDescription: "Customer-facing website and comprehensive admin panel for a private theatre booking business, live in production.",
    fullDescription: "A production booking platform featuring customer-facing slot reservation and a dedicated admin portal to manage bookings, slots, and website content.",
    features: [
      "Built responsive pages for theatre details, available slots, and booking enquiries",
      "Created an admin panel to manage bookings, slots, and website content with full CRUD operations",
      "Integrated frontend and backend through REST APIs with form validation and error handling",
      "Live in production and actively serving booking customers"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "SQL", "Bootstrap", "REST APIs"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://thetinytheatre.in"
  },
  {
    id: "charity-website",
    title: "Charity Website with Admin Panel",
    category: "Full Stack",
    badge: "Live in Production",
    shortDescription: "Public charity website live in production, featuring a separate administrative panel for managing content and donor initiatives.",
    fullDescription: "A full-featured public charity platform coupled with an administrative backend for managing content updates and dynamic community records.",
    features: [
      "Developed a public charity website along with a separate admin panel for managing website content",
      "Integrated APIs for administrative operations and for displaying dynamic data on the public portal",
      "Tested API endpoints with Postman and maintained code versioning with Git and GitHub",
      "Live in production"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "SQL", "REST APIs"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://anbusuzhulagu.org"
  },
  {
    id: "meadows-landsale",
    title: "Meadows - Land Sale Website",
    category: "Full Stack",
    badge: "Live in Production",
    shortDescription: "Property listing and sales website with responsive design and automated PHP email enquiry delivery.",
    fullDescription: "A commercial real-estate campaign portal featuring property listing showcases and an automated lead capture enquiry form.",
    features: [
      "Responsive, user-friendly property listing pages for customer browsing",
      "Integrated enquiry form so customers can view available plots and contact business representatives",
      "Implemented server-side email integration in PHP ensuring leads reach the business owners directly",
      "Live in production"
    ],
    techStack: ["HTML5", "CSS3", "PHP", "Email Integration"],
    githubUrl: "https://github.com/nivetha-os",
    liveUrl: "https://campaign.assettreehomes.com"
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
    skills: "React.js, Node.js, Express.js, SQL, Bootstrap, JavaScript"
  }
];
