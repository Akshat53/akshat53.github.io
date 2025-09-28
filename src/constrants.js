import {
  DownloadOutlined,
  ContactsOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import CV from './resume.pdf'

export const navOptions = [
  {
    label: "About us ",
    key: "1",
  },
  {
    label: "Experience",
    key: "2",
  },
  {
    label: "Projects",
    key: "3",
  },
  {
    label: "Contact",
    key: "4",
  },
];
export const buttonOptions = [
  {
    key: "downloade",
    text: "Downloade CV",
    icon: <DownloadOutlined />,
    href : CV
  },
  {
    key: "contact",
    text: "Contact Info",
    icon: <ContactsOutlined />,
    href: ''
  },

  {
    key: "linkedin",
    text: "",
    icon: <LinkedinOutlined />,
    href : 'https://www.linkedin.com/in/akshat53/'
  },
  {
    key: "github",
    text: "",
    icon: <GithubOutlined />,
    href : 'https://github.com/Akshat53'
  },
];

export const cardOptions = [
  {
    key: 1,
    prof: "Experience",
    desg: "Frontend Development",
    stats: "3+ years",
    icon: <ScheduleOutlined />,
  },
  {
    key: 2,
    prof: "Education",
    desg: "MCA (In Progress)",
    stats: "Master of Computer Applications",
    icon: <TeamOutlined />,
  },
];

export const expCard1 = [
  {
    key: 1,
    level: "Experienced",
    label: "React.js",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 2,
    level: "Experienced",
    label: "Next.js",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 3,
    level: "Experienced",
    label: "JavaScript",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 4,
    level: "Experienced",
    label: "HTML5",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 5,
    level: "Experienced",
    label: "CSS3",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 6,
    level: "Experienced",
    label: "Tailwind CSS",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 7,
    level: "Experienced",
    label: "ShadCN UI",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 8,
    level: "Experienced",
    label: "Ant Design",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 9,
    level: "Intermediate",
    label: "Chakra UI",
    icon: <CheckCircleOutlined />,
  },
];
export const expCard2 = [
  {
    key: 1,
    level: "Experienced",
    label: "Node.js",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 2,
    level: "Intermediate",
    label: "Java Spring Boot",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 3,
    level: "Experienced",
    label: "Strapi CMS",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 4,
    level: "Experienced",
    label: "PostgreSQL",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 5,
    level: "Experienced",
    label: "MySQL",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 6,
    level: "Experienced",
    label: "Git & Version Control",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 7,
    level: "Experienced",
    label: "API Integration",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 8,
    level: "Intermediate",
    label: "Azure Cloud",
    icon: <CheckCircleOutlined />,
  },
];
export const projectsData = [
  {
    key: "1",
    title: "SparkTG Website",
    description: "Corporate website for SparkTG built with modern web technologies. Features responsive design, smooth animations, and professional layout showcasing company services and portfolio.",
    href: "https://sparktg.com/",
    link: "https://sparktg.com/",
    label: "Visit Website",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web Development"
  },
  {
    key: "2",
    title: "Ellemora E-commerce Platform",
    description: "Full-stack fashion e-commerce platform built with Next.js and Strapi CMS. Features responsive product pages, secure checkout with Stripe integration, and comprehensive content management system.",
    href: "https://ellemora.com/",
    link: "https://ellemora.com/",
    label: "Visit Website",
    technologies: ["Next.js", "Strapi CMS", "PostgreSQL", "Stripe"],
    category: "E-commerce"
  },
  {
    key: "3",
    title: "Manali Ladakh Moto World",
    description: "Embark on a journey of discovery through our immersive travel website, your gateway to unparalleled destinations and seamless wanderlust fulfillment. Explore, plan, and indulge in unforgettable experiences curated just for you",
    href: "https://manaliladakhmotoworld.com/",
    link: "https://manaliladakhmotoworld.com/",
    label: "Visit Website",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    category: "Travel & Tourism"
  },
  {
    key: "4",
    title: "Event Management System",
    description: "Built a comprehensive event management system with user-friendly design, strong database handling, and tools for easy event planning",
    href: "https://github.com/Akshat53/Event-management-system.git",
    link: "https://github.com/Akshat53/Event-management-system.git",
    label: "View Code",
    technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
    category: "Enterprise Software"
  },
  {
    key: "5",
    title: "Event Creation Tool",
    description: "Developed a user-centric web application, enabling effortless event creation with intuitive tools for seamless customization and planning. Designed an innovative event creation tool, streamlining the process by offering a user-friendly interface and versatile functionalities to tailor events to perfection",
    href: "https://github.com/Akshat53/10times-task.git",
    link: "https://github.com/Akshat53/10times-task.git",
    label: "View Code",
    technologies: ["React.js", "JavaScript", "CSS3", "REST API"],
    category: "Web Application"
  },
];

export const professionalExperience = [
  {
    key: "1",
    period: "Feb 2025 - Present",
    company: "SparkTG",
    role: "React.js Developer",
    location: "Noida, India",
    description: "Building frontend interfaces for cloud-based IVR and call analytics solutions. Developing real-time dashboards and IVR flow management tools for unified communications platform.",
    responsibilities: [
      "Building frontend interfaces for cloud-based IVR and call analytics solutions",
      "Developed real-time dashboards and IVR flow management tools using React.js and Tailwind",
      "Integrated APIs to handle live call data, agent dashboards, and queue tracking",
      "Improved user experience through performance optimization and component reusability"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "API Integration", "Real-time Dashboards"]
  },
  {
    key: "2",
    period: "July 2023 - Feb 2025",
    company: "Ellemora",
    role: "Software Engineer",
    location: "Bareilly, India",
    description: "Developed a full-stack fashion e-commerce platform using modern web technologies. Built comprehensive solution from frontend to backend with payment integration and content management.",
    responsibilities: [
      "Developed a full-stack fashion e-commerce platform using Next.js, Node.js, and Strapi",
      "Created responsive product and checkout pages integrated with Stripe and custom APIs",
      "Built content management workflows using Strapi CMS with PostgreSQL and MySQL",
      "Implemented SEO and server-side rendering, improving organic traffic and speed"
    ],
    technologies: ["Next.js", "Node.js", "Strapi CMS", "PostgreSQL", "MySQL", "Stripe", "SEO"]
  },
  {
    key: "3",
    period: "June 2022 - June 2023",
    company: "Wipro Technologies",
    role: "Project Engineer (Frontend Developer)",
    location: "Noida, India",
    description: "Worked on internal enterprise tools and modernized legacy systems. Collaborated with cross-functional teams for feature development and accessibility improvements.",
    responsibilities: [
      "Worked on internal enterprise tools using HTML, CSS, JavaScript, and Bootstrap",
      "Migrated legacy UIs to modern React.js workflows and maintained design consistency",
      "Collaborated with cross-functional teams for feature development and accessibility",
      "Assisted in performance improvement, design handoffs, and documentation"
    ],
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Enterprise Tools"]
  },
  {
    key: "4",
    period: "June 2021 - June 2022",
    company: "Fantasy Squad",
    role: "Frontend Developer",
    location: "Remote",
    description: "Built fantasy gaming dashboards with focus on real-time data display and user experience. Developed modular UI components for team selection and gaming features.",
    responsibilities: [
      "Built fantasy gaming dashboards using React.js, Next.js, and Ant Design",
      "Focused on modular UI components, real-time data display, and team selection features",
      "Worked with backend APIs and maintained clean UI/UX across all pages"
    ],
    technologies: ["React.js", "Next.js", "Ant Design", "API Integration", "Gaming UI"]
  }
];
