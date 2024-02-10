import { tasktracker, time, ecommerce} from "../assets/index"

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
    list: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
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
      "Contributed to the development and optimization of RESTful APIs in a microservices architecture.",
      "Designed unit tests and integration tests with more than 90% code coverage.",
      "Refactored and modularized parts of the existing code base, reduced test files by 1/5 while maintaining code coverage.",
      "Designed CI/CD pipelines to automate testing and deployment in different environments.",
      "Created API documentation and specifications.",
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
    name: "Ecommerce Backend",
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
        name: "Redis",
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
    image: ecommerce,
    web_link: "http://3.131.157.147/docs",
    github_link: "https://github.com/michaelxswe/shop-api",
  },
]

export { experiences, projects, skills }
