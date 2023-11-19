import { 
  time,
  tasktracker,
  ishop
} from '../assets/index';

export const navLinks = [
  {
    id: 'skills',
    title: 'Technical Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },  
  {
    id: 'contact',
    title: 'Contact',
  },
]

const interests = [
  {
    title: ['Python', 'Java', 'Typescript', 'C++', 'C'],
  },
  {
    title: ['NextJS', 'React', 'FastAPI', 'Spring Boot', 'Express'],

  },
  {
    title: ['PostgreSQL', 'MySQL', 'MongoDB'],

  },
  {
    title: ['Amazon Web Services', 'Azure Pipeline'],

  },
]

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Symetra | Bellevue, WA',
    icon: time,
    iconBg: '#383E56',
    date: 'May 2023 - August 2023',
    points: [
      'Developed a Restful API that supports user authentication, plan enrollment, and notification services.',
      'Conducted Pytest and Cucumber Test to ensure application functionality and reliability.',
      'Managed data manipulation tasks by updating and retrieving information from a PostgreSQL database.',
      'Leveraged Docker Containers, AWS CloudFormation, and Azure Pipelines for automatic deployments to AWS Elastic Container Service (Fargate).',
      'Collaborated in a Scrum environment, effectively communicating daily updates during stand-ups.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name:'NASA Space Grant intern hosted by Lockheed Martin | Owego, NY',
    icon: time,
    iconBg: '#383E56',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Collaborated with Lockheed Martin engineers on the development of a remote-controlled water filtering system.',
      'Created a full-stack project management application with features such as task assignment, progress tracking, deadline reminders, and a comprehensive reporting dashboard.',
      'Conducted JUnit Test to ensure application functionality and reliability.',
    ],
  },
]

const projects = [
  {
    name: 'TaskFlow Manager',
    description:
      'A comprehensive task tracker, enabling robust task and team management.',
    tags: [
      {
        name: 'Typescript',
        color: 'white-text-gradient',
      },
      {
        name: 'NextJS',
        color: 'white-text-gradient',
      },
      {
        name: 'Radix Ui',
        color: 'white-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'white-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'white-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'white-text-gradient',
      },
      
    ],
    image: tasktracker,
    web_link: 'https://task-tracker-self.vercel.app',
    github_link: 'https://github.com/michaelxswe/task-tracker',
  },
  {
    name: 'Shopping App Backend',
    description:
      'A complete Restful API for a shopping app deployed onto AWS ECS.',
    tags: [
      {
        name: 'Python',
        color: 'white-text-gradient',
      },
      {
        name: 'FastAPI',
        color: 'white-text-gradient',
      },
      {
        name: 'SQLAlchemy',
        color: 'white-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'white-text-gradient',
      },

      {
        name: 'Docker',
        color: 'white-text-gradient',
      },
      {
        name: 'AWS ECS(Fargate)',
        color: 'white-text-gradient',
      }
    ],
    image: ishop,
    web_link: 'http://18.119.129.40/docs',
    github_link: 'https://github.com/michaelxswe/ishop',
  },
]

export { interests, experiences, projects };
