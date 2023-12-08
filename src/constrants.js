import {
  DownloadOutlined,
  ContactsOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import ProjectCard from "./components/project/ProjectCard";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";

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
  },
  {
    key: "contact",
    text: "Contact Info",
    icon: <ContactsOutlined />,
  },

  {
    key: "linkedin",
    text: "",
    icon: <LinkedinOutlined />,
  },
  {
    key: "github",
    text: "",
    icon: <GithubOutlined />,
  },
];

export const cardOptions = [
  {
    key: 1,
    prof: "Experience",
    desg: "Frontend Development",
    stats: "2+ years",
    icon: <ScheduleOutlined />,
  },
  {
    key: 2,
    prof: "Education",
    desg: "",
    stats: "BCA Bachelors Degree",
    icon: <TeamOutlined />,
  },
];

export const expCard1 = [
  {
    key: 1,
    level: "Experienced",
    label: "HTML",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 2,
    level: "Experienced",
    label: "CSS",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 3,
    level: "Experienced",
    label: "BootStrap",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 4,
    level: "Experienced",
    label: "React Js",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 5,
    level: "Intermediate",
    label: "JavaScript",
    icon: <CheckCircleOutlined />,
  },

  {
    key: 6,
    level: "Intermediate",
    label: "Java J2EE",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 7,
    level: "Intermediate",
    label: "Springboot",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 8,
    level: "Experienced",
    label: "AntD",
    icon: <CheckCircleOutlined />,
  },
];
export const expCard2 = [
  {
    key: 1,
    level: "Intermediate",
    label: "MySql",
    icon: <CheckCircleOutlined />,
  },

  {
    key: 2,
    level: "Intermediate",
    label: "MongoDB",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 3,
    level: "Experienced",
    label: "Git",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 4,
    level: "Experienced",
    label: "Bitbucket",
    icon: <CheckCircleOutlined />,
  },
  {
    key: 5,
    level: "Experienced",
    label: "Postman",
    icon: <CheckCircleOutlined />,
  },
];
export const carouselOptions = [
  {
    key: "1",
    comp: (
      <ProjectCard
        title={"Manali Ladakh Moto World"}
        img={Img1}
        description={
          "Embark on a journey of discovery through our immersive travel website, your gateway to unparalleled destinations and seamless wanderlust fulfillment. Explore, plan, and indulge in unforgettable experiences curated just for you"
        }
        href={"https://manaliladakhmotoworld.com/"}
        link={"https://manaliladakhmotoworld.com/"}
        label={"Visit"}
      />
    ),
  },
  {
    key: "2",
    comp: (
      <ProjectCard
        title={"Event Management System"}
        img={Img2}
        description={
          "Built a comprehensive event management system with user-friendly design, strong database handling, and tools for easy event planning"
        }
        href={"https://github.com/Akshat53/Event-management-system.git"}
        link={"https://github.com/Akshat53/Event-management-system.git"}
        label={"Visit"}
      />
    ),
  },
  {
    key: "3",
    comp: (
      <ProjectCard
        title={"Event Creation Tool"}
        img={
          "https://raw.githubusercontent.com/Akshat53/10times-task/master/Screenshot%202023-11-29%20212733-1.png"
        }
        description={
          "Developed a user-centric web application, enabling effortless event creation with intuitive tools for seamless customization and planning Designed an innovative event creation tool, streamlining the process by offering a user-friendly interface and versatile functionalities to tailor events to perfection"
        }
        href={"https://github.com/Akshat53/10times-task.git"}
        link={"https://github.com/Akshat53/10times-task.git"}
        label={"Visit"}
      />
    ),
  },
  {
    key: "3",
    comp: (
      <ProjectCard
        title={"Color Prediction Game"}
        img={Img3}
        description={
          "Designed a captivating color prediction game web app, merging intuitive gameplay with real-time forecasting elements, fostering enjoyable and stimulating user interactions."
        }
        href={"https://github.com/Akshat53/gamerocket.git"}
        link={"https://gamerocket.in/home"}
        label={"Visit"}
      />
    ),
  },
];
