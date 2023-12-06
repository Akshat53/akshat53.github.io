import {
  DownloadOutlined,
  ContactsOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
  TeamOutlined
} from "@ant-design/icons";

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
