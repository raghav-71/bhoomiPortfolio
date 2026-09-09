import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

/**
 * =========================================================================
 * BHOOMI JAKKANNAVAR — CENTRAL PORTFOLIO CONFIGURATION & DATA
 * =========================================================================
 * All personal information, social links, biography, skills, projects,
 * timeline, and education details can be easily updated in this file.
 */

export const PERSON = {
  // Identity & Titles
  name: "Bhoomi Jakkannavar",
  short: "Bhoomi",
  heroFirstName: "Bhoomi",
  heroLastName: "Jakkannavar",
  role: "Aspiring Software Engineer | Full Stack Developer | AI Enthusiast",
  roles: [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "AI Enthusiast",
  ],

  // Academic & Location
  college: "Bharatesh College of Computer Applications",
  degree: "Bachelor of Computer Applications",
  location: "Belagavi, Karnataka",
  graduationYear: "May 2027",
  cgpa: "8.20",

  // Contact Information (Easily editable placeholders)
  email: "bhoomi.jakkannavar@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/bhoomi-jakkannavar" },
    { label: "GitHub", href: "https://github.com/bhoomi-jakkannavar" },
    { label: "Instagram", href: "https://instagram.com/bhoomi_jakkannavar" },
    { label: "Email", href: "mailto:bhoomi.jakkannavar@gmail.com" },
  ],

  // Tagline & Introductions
  tagline:
    "Aspiring Software Engineer passionate about building modern web applications, exploring full stack technologies, and creating innovative AI-powered solutions.",
  intro:
    "I am a BCA student and aspiring Software Developer passionate about building modern web applications and innovative digital solutions. I enjoy exploring full stack development, artificial intelligence, and new technologies while turning ideas into practical projects.",

  // About Me Section Paragraphs
  bio: [
    "I am a Bachelor of Computer Applications student at Bharatesh College of Computer Applications, Belagavi.",
    "I am passionate about software development and full stack technologies. I enjoy building modern web applications, exploring artificial intelligence, and working on technology projects that solve real-world problems.",
    "My goal is to become a skilled Software Developer and Full Stack Developer while continuously learning new technologies and building innovative digital products.",
  ],

  // About Highlights
  highlights: [
    "BCA Student",
    "Software Development",
    "Full Stack Development",
    "Artificial Intelligence",
    "Problem Solving",
    "Building Modern Applications",
    "Continuous Learning",
  ],

  // Stats / Metric Badges
  stats: [
    { value: "2027", label: "Expected Graduation" },
    { value: "8.20", label: "Academic CGPA" },
    { value: "03", label: "Co-Developed Projects" },
    { value: "BCA", label: "Belagavi, Karnataka" },
  ],

  // Career Goals & Passions
  passions: [
    { value: "FULL STACK", label: "Web Applications" },
    { value: "AI & ML", label: "Intelligent Systems" },
    { value: "SOFTWARE", label: "Engineering Quality" },
    { value: "INNOVATE", label: "Problem Solving" },
  ],

  // Personal Hobbies & Future Extensible Fields
  hobbies: [
    "Exploring Emerging Tech & AI Tools",
    "Coding Modern Interfaces",
    "Problem Solving",
    "Continuous Tech Learning",
  ],
};

export const SKILL_GROUPS = [
  {
    title: "Languages",
    code: "01",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    code: "02",
    items: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend",
    code: "03",
    items: ["Node.js", "APIs"],
  },
  {
    title: "Tools",
    code: "04",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "AI / Development",
    code: "05",
    items: ["AI Tools", "Prompt Engineering", "AI Integration"],
  },
  {
    title: "Professional Skills",
    code: "06",
    items: ["Communication", "Problem Solving", "Team Collaboration", "Continuous Learning"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  collaboration: string;
  year: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  href: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    id: "scam-handling",
    index: "01",
    title: "SCAM HANDLING",
    category: "AI-Powered Scam & Fraud Detection Platform",
    collaboration: "Collaboratively developed project",
    year: "2026",
    summary:
      "A collaboratively developed AI-powered platform designed to detect potentially fraudulent content across multiple formats including emails, SMS messages, and suspicious URLs.",
    description:
      "A collaboratively developed AI-powered platform designed to detect potentially fraudulent content across multiple formats including emails, SMS messages, and suspicious URLs.",
    problem:
      "Online users and consumers frequently encounter sophisticated scam emails, fraudulent SMS text phishing attempts, and deceptive malicious URLs that are challenging to distinguish from legitimate communications.",
    solution:
      "An intelligent AI-powered analysis platform with browser integration that inspects textual and URL signatures in real time to categorize threat levels and prevent users from falling victim to fraudulent scams.",
    features: [
      "📧 Email Scam Detection",
      "💬 SMS Scam Detection",
      "🔗 Malicious URL Detection",
      "🤖 AI-powered Analysis",
      "🌐 Browser Extension",
      "🛡️ Scam Risk Classification",
    ],
    tech: ["JavaScript", "AI", "APIs", "Web Technologies"],
    image: project1,
    href: "#projects",
    github: "https://github.com/bhoomi-jakkannavar",
  },
  {
    id: "campus-os",
    index: "02",
    title: "CAMPUS OS",
    category: "Smart College Management Platform",
    collaboration: "Built as part of a development team",
    year: "2026",
    summary:
      "A collaboratively developed digital platform designed to improve the college experience for students, teachers, and administrators.",
    description:
      "Campus OS provides a unified digital ecosystem connecting students, faculty members, and administrative staff into a single seamless platform for academics, announcements, and AI assistance.",
    problem:
      "Educational institutions frequently struggle with fragmented communication, scattered academic notes, disjointed announcement channels, and inefficient timetable management spread across disparate legacy tools.",
    solution:
      "A cohesive college management hub combining dedicated student and faculty portals, administrative oversight, event calendars, structured notes repository, and an AI study assistant.",
    features: [
      "👨‍🎓 Student Portal",
      "👨‍🏫 Teacher Portal",
      "⚙️ Admin Dashboard",
      "📚 Notes & Resources",
      "📢 Announcements",
      "📅 Events & Timetables",
      "🤖 AI Study Assistant",
    ],
    tech: ["React", "JavaScript", "AI", "Web Technologies"],
    image: project2,
    href: "#projects",
    github: "https://github.com/bhoomi-jakkannavar",
  },
  {
    id: "location-tracker",
    index: "03",
    title: "LOCATION TRACKER",
    category: "Real-Time Location Tracking Application",
    collaboration: "Co-developed project",
    year: "2026",
    summary:
      "A collaboratively developed application designed to provide real-time location tracking with interactive maps and secure location permission handling.",
    description:
      "A responsive mobile and web tracking application designed to deliver real-time geographical coordinates, route visualizations on interactive maps, and granular privacy-centric permission controls.",
    problem:
      "Reliable real-time location tracking often suffers from latency, poor mobile optimization, excessive battery drain, and unclear permission handling for user privacy.",
    solution:
      "A performant location tracking system utilizing modern Maps APIs and real-time positioning protocols with clear user-controlled permission workflows and live interactive map markers.",
    features: [
      "📍 Real-time Location",
      "🗺️ Interactive Map",
      "📱 Mobile Application",
      "🔐 Location Permissions",
      "📡 Live Location Updates",
    ],
    tech: ["Mobile Technologies", "Maps API", "Location Services", "JavaScript"],
    image: project3,
    href: "#projects",
    github: "https://github.com/bhoomi-jakkannavar",
  },
];

export const AI_CAPABILITIES = [
  {
    code: "AI/01",
    title: "AI Tools & Accelerated Workflows",
    body: "Proficient in leveraging cutting-edge developer AI tools, coding assistants, and prompt workflows to boost development velocity and build robust software architectures.",
  },
  {
    code: "AI/02",
    title: "Prompt Engineering & Evaluation",
    body: "Designing structured, context-aware prompt templates, zero/few-shot prompts, and system instructions for reliable and deterministic outputs across web applications.",
  },
  {
    code: "AI/03",
    title: "AI API Integration",
    body: "Integrating state-of-the-art LLM endpoints and machine learning services cleanly into full-stack web and mobile systems with error resiliency and responsive streaming.",
  },
  {
    code: "AI/04",
    title: "Practical Problem Solving",
    body: "Transforming real-world challenges into functional AI applications — from automated fraud detection in Scam Handling to smart study tools in Campus OS and location intelligence.",
  },
];

export const JOURNEY = [
  {
    year: "2024",
    role: "Foundations in Programming",
    org: "Self-Directed & Academic Exploration",
    body: "Started learning programming and exploring software development fundamentals, algorithms, and computational logic.",
  },
  {
    year: "2025",
    role: "Core Languages & Full Stack Exploration",
    org: "Computer Applications & Web Tech",
    body: "Learned Java, Python, HTML, CSS, JavaScript, and web development fundamentals while exploring modern developer tooling.",
  },
  {
    year: "2026",
    role: "Collaborative Projects & AI Platforms",
    org: "Development Team Collaborator",
    body: "Started collaboratively building real-world projects and AI-powered applications. Worked on projects including Scam Handling, Campus OS, and Location Tracker.",
  },
  {
    year: "2027",
    role: "BCA Graduation & Career Launch",
    org: "Aspiring Software Engineer",
    body: "Bachelor of Computer Applications Graduation. Start a professional career as a Software Developer and Full Stack Developer, building modern web applications and innovative technology products.",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications",
  college: "Bharatesh College of Computer Applications",
  location: "Belagavi, Karnataka",
  graduation: "May 2027",
  cgpa: "8.20",
  highlights: [
    "Core studies in Software Development, Database Management (SQL), Data Structures, and Web Technologies",
    "Continuous practical learning in Artificial Intelligence, Modern Frontend Frameworks, and Node.js APIs",
    "Collaborative development of real-world platforms including Scam Handling, Campus OS, and Location Tracker",
  ],
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "ai", label: "AI" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
