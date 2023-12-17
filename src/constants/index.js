import { tasktracker, time, zelle } from "../assets/index"

export const navLinks = [
  {
    id: "skills",
    title: "Technical Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const skills = [
  {
    title: "Language",
    list: ["Python", "Javascript", "Java", "C++"],
  },
  {
    title: "Framework",
    list: ["NextJS", "FastAPI", "Spring Boot", "Express"],
  },
  {
    title: "Database",
    list: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "AWS",
    list: ["Elastic Container Service"],
  },
]

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Symetra | Bellevue, WA",
    icon: time,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developed a RESTful API that supports user authentication, plan enrollment, and notification services.",
      "Conducted unit tests, integration tests, and performance tests.",
      "Leveraged Docker, AWS CloudFormation, and Azure Pipeline for automatic testing and deployment.",
      "Collaborated in a Scrum and Agile methodology environment, actively participating in pull requests and code reviews",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "NASA New York Space Grant | Owego, NY",
    icon: time,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Collaborated with Lockheed Martin engineers on the development of a water filtration system.",
      "Implemented features for detecting collisions and water leaks within the system.",
      "Developed a RESTful API that transfers data collected by Arduino Uno to a MySQL database.",
      "Gained proficiency in MySQL through schemas design and query formulation.",
    ],
  },
]

const projects = [
  {
    name: "TaskFlow Manager",
    description: "A cross-team task tracker",
    tags: [
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
      {
        name: "NextJS",
        color: "white-text-gradient",
      },
      {
        name: "Radix Ui",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "white-text-gradient",
      },
      {
        name: "Prisma",
        color: "white-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
    ],
    image: tasktracker,
    web_link: "https://task-tracker-self.vercel.app",
    github_link: "https://github.com/michaelxswe/task-tracker",
  },
  {
    name: "Zelle Clone Backend",
    description: "A RESTful API for a Zelle clone",
    tags: [
      {
        name: "Python",
        color: "white-text-gradient",
      },
      {
        name: "FastAPI",
        color: "white-text-gradient",
      },
      {
        name: "SQLAlchemy",
        color: "white-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },

      {
        name: "Docker",
        color: "white-text-gradient",
      },
      {
        name: "AWS ECS",
        color: "white-text-gradient",
      },
    ],
    image: zelle,
    web_link: "http://18.117.107.32/docs",
    github_link: "https://github.com/michaelxswe/zelle",
  },
]

export { experiences, projects, skills }
