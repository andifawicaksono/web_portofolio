/**
 * Andifa W. Portfolio Data
 * All website content is managed here.
 * Search for "TODO:" comments to find fields that need to be updated with your real data.
 */

import type {
  Profile,
  Experience,
  SkillCategory,
  Project,
  Research,
  Certification,
  Achievement,
  NavItem,
} from "@/types";

// ============================================
// PROFILE DATA
// ============================================
export const profile: Profile = {
  name: "Andifa",
  title: "Software Engineer & AI Enthusiast",
  tagline: "Building Intelligent Systems & Scalable Web Solutions",
  location: "Indonesia",
  bio: [
    "I am a Software Engineer experienced in building enterprise applications using ASP.NET Core and Spring Boot, with a strong focus on scalable and efficient backend architecture.",
    "I also have a deep passion for Artificial Intelligence and Data Science particularly machine learning for text analysis and predictive modeling. My research covers a comparative study of Naive Bayes and Random Forest algorithms for hoax content classification on social media.",
    "I believe great technology is technology that solves real problems with elegant, high-performance solutions.",
  ],
  profileImageUrl: "/images/profile_printv3_bg.jpg", // TODO: Replace with your profile photo
  resumeUrl: "/resume/Andifa_W_CV.pdf",   // TODO: Upload your CV to public/resume/
  yearsOfExperience: 5,
  currentRole: "Software Engineer",
  currentCompany: "PT ALFAHUMA REKAYASA TEKNOLOGI",
  availableForWork: true,
  contact: {
    email: "andifawicaksono@email.com",                           // TODO: Replace with your email
    linkedin: "https://www.linkedin.com/in/andifa-w-951418132/",
    github: "https://github.com/andifawicaksono",                 // TODO: Replace with your GitHub URL
    whatsapp: "085155214146",                             // TODO: Replace with your WhatsApp number (international format)
    location: "Indonesia",
  },
};

// ============================================
// NAVIGATION ITEMS
// ============================================
export const navItems: NavItem[] = [
  { label: "Home",           href: "#hero" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Research",       href: "#research" },
  // { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "PT ALFAHUMA REKAYASA TEKNOLOGI",
    position: "Software Engineer",
    duration: "March 2019 - Present",
    startDate: "January 2023",
    endDate: null,
    location: "Indonesia",
    type: "full-time",
    current: true,
    description: [
      "Developed and maintained enterprise web applications using ASP.NET Core with Clean Architecture principles.",
      "Developed and maintained enterprise web applications using Spring Boot with Clean Architecture principles.",
      "Developed and maintained enterprise web applications using ASP.NET MVC with Clean Architecture principles.",
      "Designed and implemented RESTful APIs for various internal services.",
      "Contributed to database schema design and stored procedure development.",
      "Collaborated with cross-functional teams to analyze business requirements and deliver technical solutions.",
      "Conducted code reviews and provided mentoring for junior developers.",
    ],
    technologies: ["ASP.NET MVC", "ASP.NET Core", "C#", "SQL Server", "REST API", "Git","Spring Boot", "Java", "Oracle", "PostgreSQL"],
  },
  {
    id: "exp-2",
    company: "PT INTERNUSA CIPTA SOLUSI PERDANA",
    position: "Assistant Junior Web Developer",
    duration: "Jun 2017 - Dec 2018",
    startDate: "June 2022",
    endDate: "December 2022",
    location: "Indonesia",
    type: "internship",
    current: false,
    description: [
      "Built microservices using Laravel & CodeIgniter for internal management systems.",
      "Integrated systems with Mysql databases.",
      "Managing Company Data Using Microsoft Excel",
      "Created API documentation",
    ],
    technologies: ["Laravel", "CodeIgniter", "Mysql", "Microsoft Excel", "PHP", "API", "Bootstrap", "jQuery"],
  },
  // {
  //   id: "exp-3",
  //   company: "INSTITUT TEKNOLOGI ASIA",
  //   position: "Software Developer Intern",
  //   duration: "Jan 2022 - May 2022",
  //   startDate: "January 2022",
  //   endDate: "May 2022",
  //   location: "Indonesia",
  //   type: "internship",
  //   current: false,
  //   description: [
  //     "Developed new features in web applications using ASP.NET MVC.",
  //     "Contributed to database schema design and stored procedure development.",
  //     "Wrote unit tests and performed bug fixing.",
  //     "Participated in daily standups and sprint planning (Agile/Scrum).",
  //   ],
  //   technologies: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap", "jQuery"],
  // },
];

// ============================================
// SKILLS DATA
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    icon: "code",
    color: "#3B82F6",
    skills: [
      { name: "C#",         level: 90 },
      { name: "Java",       level: 85 },
      { name: "Python",     level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "SQL",        level: 88 },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: "server",
    color: "#06B6D4",
    skills: [
      { name: "ASP.NET Core",     level: 90 },
      { name: "ASP.NET MVC",      level: 88 },
      { name: "Spring Boot",      level: 82 },
      { name: "REST API",         level: 90 },
      { name: "Entity Framework", level: 85 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "monitor",
    color: "#8B5CF6",
    skills: [
      { name: "Next.js",          level: 72 },
      { name: "HTML/CSS",         level: 80 },
      { name: "Bootstrap",        level: 85 },
      { name: "JavaScript (DOM)", level: 75 },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: "database",
    color: "#F59E0B",
    skills: [
      { name: "SQL Server",  level: 90 },
      { name: "Oracle",      level: 82 },
      { name: "PostgreSQL",  level: 80 },
      { name: "MySQL",       level: 85 },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Data Science",
    icon: "brain",
    color: "#EC4899",
    skills: [
      { name: "Machine Learning", level: 78 },
      { name: "Scikit-Learn",     level: 75 },
      { name: "Data Analysis",    level: 80 },
      { name: "Naive Bayes",      level: 85 },
      { name: "Random Forest",    level: 82 },
      { name: "Computer Vision",  level: 65 },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "wrench",
    color: "#10B981",
    skills: [
      { name: "Git",            level: 88 },
      { name: "GitHub",         level: 88 },
      { name: "Postman",        level: 90 },
      { name: "VS Code",        level: 92 },
      { name: "Visual Studio",  level: 88 },
    ],
  },
];

// ============================================
// PROJECTS DATA
// ============================================
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Hoax & Non-Hoax News Prediction",
    description:
      "Comparative study of Naive Bayes and Random Forest algorithms for classifying hoax and non-hoax content on social media platforms.",
    longDescription:
      "A text classification system leveraging Natural Language Processing (NLP) to analyze and predict whether news content is hoax or non-hoax. The research benchmarks two major machine learning algorithms to determine the best-performing model.",
    technologies: ["Python", "Scikit-Learn", "NLTK", "Pandas", "NumPy", "Matplotlib"],
    category: "ai-ml",
    featured: true,
    imageUrl: "/images/projects/hoax-prediction.jpg", // TODO: Add project screenshot
    githubUrl: "https://github.com/andifawicaksono/hoax_prediction", // TODO: Update URL
    status: "completed",
    year: "2025",
  },
  {
    id: "proj-2",
    title: "ERP Stock Request Management System",
    description:
      "ERP application for managing sample requests, stock requests, and delivery orders in a centralized workflow.",
    longDescription:
      "An ERP solution that streamlines sample requests, stock requests, and delivery order management, improving inventory control, request tracking, and operational efficiency across departments.",
    technologies: ["CodeIgniter", "Mysql", "Entity Framework", "Bootstrap", "jQuery"],
    category: "enterprise",
    featured: false,
    imageUrl: "/images/projects/enterprise-app.png", // TODO: Add project screenshot
    githubUrl: undefined, // Private repository
    demoUrl: undefined,   // Internal system
    status: "completed",
    year: "2019",
  },
  {
    id: "proj-3",
    title: "ERP Warehouse Management System",
    description:
      "Warehouse Management System with dashboard reporting, barcode-based inventory tracking, stock transfers, and inbound/outbound transactions.",
    longDescription:
      "A Warehouse Management System that manages inbound and outbound transactions, warehouse-to-warehouse transfers, barcode scanning, and real-time dashboard reporting for accurate inventory control and visibility.",
    technologies: ["Laravel", "PostgreSQL", "MySQL", "Entity Framework", "Bootstrap", "jQuery"],
    category: "enterprise",
    featured: false,
    imageUrl: "/images/projects/enterprise-app.png", // TODO: Add project screenshot
    githubUrl: undefined, // Private repository
    demoUrl: undefined,   // Internal system
    status: "completed",
    year: "2020",
  },
  {
    id: "proj-4",
    title: "Entity Management System",
    description:
      "Centralized platform for subsidiary management and enterprise-wide reporting.",
    longDescription:
      "An Entity Management System that centralizes subsidiary data management and provides consolidated reporting, enabling better visibility, governance, and decision-making across the entire organization.",
    technologies: ["ASP.NET Core", "C#", "SQLServer", "Entity Framework", "Bootstrap", "jQuery"],
    category: "enterprise",
    featured: true,
    imageUrl: "/images/projects/enterprise-app.png", // TODO: Add project screenshot
    githubUrl: undefined, // Private repository
    demoUrl: undefined,   // Internal system
    status: "completed",
    year: "2024",
  },
  {
    id: "proj-5",
    title: "Spring Boot Microservices API Scholarship Applications",
    description:
      "Microservices API for managing scholarship applications and student scholarship processing within organizations.",
    longDescription:
      "A scalable Microservices API that handles scholarship requests, eligibility reviews, approvals, and student scholarship management, enabling efficient and secure administration of corporate scholarship programs.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "JWT", "Swagger", "Maven"],
    category: "enterprise",
    featured: false,
    imageUrl: "/images/projects/spring-api.png", // TODO: Add project screenshot
    githubUrl: "https://github.com/andifa-w/spring-api", // TODO: Update URL
    status: "completed",
    year: "2025",
  },
  {
    id: "proj-6",
    title: "Project Management Portal",
    description:
      "Project Management Portal for managing project data, workflows, and approval processes.",
    longDescription:
      "A Project Management Portal that centralizes project planning, tracking, and approval workflows, enabling teams to manage project data efficiently and ensure timely decision-making.",
    technologies: ["ASP.NET Core", "C#", "SQLServer", "Entity Framework", "Bootstrap", "jQuery"],
    category: "enterprise",
    featured: true,
    imageUrl: "/images/projects/enterprise-app.png", // TODO: Add project screenshot
    githubUrl: undefined, // Private repository
    demoUrl: undefined,   // Internal system
    status: "completed",
    year: "2026",
  },
  {
    id: "proj-7",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.",
    longDescription:
      "This very website — built as a showcase of modern frontend skills with smooth animations, a premium design, and SEO-optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    category: "web",
    featured: false,
    imageUrl: "/images/projects/portfolio.png",
    githubUrl: "https://github.com/andifa-w/portfolio",      // TODO: Update URL
    demoUrl: "https://andifa-w.vercel.app",                  // TODO: Update with your deployment URL
    status: "in-progress",
    year: "2024",
  },
];

// ============================================
// RESEARCH DATA
// ============================================
export const research: Research[] = [
  {
    id: "research-1",
    title:
      "Comparative Analysis of Hoax & Non-Hoax Prediction in Social Media Using Naive Bayes and Random Forest",
    abstract:
      "This research analyzes and compares the performance of two machine learning algorithms — Naive Bayes and Random Forest — in classifying hoax and non-hoax news content circulating on social media. Using an Indonesian-language news dataset, the study evaluates accuracy, precision, recall, and F1-Score for both algorithms.",
    objective:
      "To compare the effectiveness of Naive Bayes and Random Forest algorithms in classifying hoax news content, with the goal of identifying the more optimal algorithm for detecting misinformation on social media.",
    methodology:
      "The study employs a supervised learning approach with the following pipeline: dataset collection, text preprocessing (tokenization, stopword removal, stemming), TF-IDF feature extraction, model training, and performance evaluation using confusion matrix and cross-validation.",
    dataset:
      "The dataset consists of Indonesian-language news articles collected from various social media platforms and fact-checking websites, comprising over 1,000 labeled news samples (hoax / non-hoax).",
    results: [
      {
        algorithm: "Naive Bayes",
        accuracy: 91,
        precision: 95,
        recall: 81,
        f1Score: 87,
      },
      {
        algorithm: "Random Forest",
        accuracy: 96,
        precision: 95,
        recall: 96,
        f1Score: 85,
      },
    ],
    conclusion:
      "Random Forest demonstrated superior performance compared to Naive Bayes across all evaluation metrics, achieving 96% accuracy versus 91%. This indicates that ensemble methods are more effective at handling text feature complexity for hoax classification on social media.",
    keywords: [
      "Machine Learning",
      "Naive Bayes",
      "Random Forest",
      "Hoax Detection",
      "Text Classification",
      "NLP",
      "Social Media",
    ],
    year: "2025",
    pdfUrl: "/resume/Andifa_Jurnal.pdf", // TODO: Upload research PDF
    status: "completed",
  },
];

// ============================================
// CERTIFICATIONS DATA
// TODO: Update with your actual certifications from LinkedIn
// ============================================
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    issueDate: "2024",
    category: "ai-ml",
    credentialUrl: undefined, // TODO: Add credential URL
    imageUrl: "/images/certs/ml-specialization.png",
  },
  {
    id: "cert-2",
    name: "Python for Data Science",
    issuer: "TODO: Issuer",
    issueDate: "2023",
    category: "data",
    credentialUrl: undefined, // TODO: Add credential URL
    imageUrl: "/images/certs/python-ds.png",
  },
  {
    id: "cert-3",
    name: "ASP.NET Core Development",
    issuer: "Microsoft Learn",
    issueDate: "2023",
    category: "programming",
    credentialUrl: undefined, // TODO: Add credential URL
    imageUrl: "/images/certs/aspnet.png",
  },
  {
    id: "cert-4",
    name: "Spring Boot Microservices",
    issuer: "TODO: Issuer",
    issueDate: "2022",
    category: "software",
    credentialUrl: undefined, // TODO: Add credential URL
    imageUrl: "/images/certs/spring-boot.png",
  },
];

// ============================================
// ACHIEVEMENTS / STATS DATA
// ============================================
export const achievements: Achievement[] = [
  {
    id: "ach-1",
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Professional experience in software engineering",
    icon: "briefcase",
  },
  {
    id: "ach-2",
    value: 10,
    suffix: "+",
    label: "Projects Completed",
    description: "Web and AI projects successfully delivered",
    icon: "folder",
  },
  {
    id: "ach-3",
    value: 1,
    suffix: "",
    label: "Research Conducted",
    description: "Published machine learning research paper",
    icon: "flask",
  },
  {
    id: "ach-4",
    value: 15,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Technologies and frameworks proficiently used",
    icon: "code",
  },
];
