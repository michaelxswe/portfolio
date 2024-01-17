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
    title: "Languages",
    list: ["Python", "Javascript", "Java", "C++"],
  },
  {
    title: "Frameworks",
    list: ["NextJS", "FastAPI", "Spring Boot", "Express"],
  },
  {
    title: "Libraries",
    list: ["React", "SQLAlchemy", "Hibernate", "Pandas"],
  },
  {
    title: "Databases",
    list: ["PostgreSQL", "MySQL", "MongoDB"],
  }
]

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Symetra | Bellevue, WA",
    icon: time,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Designed and implemented a RESTful API for a new insurance plan, allowing users to register, manage their accounts, and access services.",
      "Developed unit and integration tests achieving over 90% code coverage.",
      "Refactored and modularized parts of the existing code base, improving testability and maintainability.",
      "Designed CI/CD pipelines to automate testing and deployment.",
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
      "Developed a RESTful API that transfers data collected by Arduino Uno to a MySQL database."
    ],
  },
]

const projects = [
  {
    name: "Task Manager",
    description: "",
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
    name: "Zelle Backend",
    description: "",
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
    web_link: "http://3.147.127.202/docs",
    github_link: "https://github.com/michaelxswe/zelle",
  },
]

export { experiences, projects, skills }
