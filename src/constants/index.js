import { 
  time,
  generator,
  crypto,
  tasktracker
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
    title: ['AWS', 'Azure Pipeline'],

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
      'Utilized FastAPI to create the backend for an administrative dashboard.',
      'Performed unit, integration, and Cucumber testing.',
      'Managed data manipulation tasks by updating and retrieving information from a PostgreSQL database.',
      'Leveraged Docker Containers, AWS CloudFormation, and Azure CI/CD pipelines for streamlined deployments to AWS Fargate.',
      'Collaborated in a Scrum environment, effectively communicating daily updates during stand-ups.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name:
      'NASA Space Grant intern hosted by Lockheed Martin | Owego, NY',
    icon: time,
    iconBg: '#383E56',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Collaborated with Lockheed Martin engineers on the development of a remote-controlled water filtering system.',
      'Created a full-stack project management application with features such as project creation, team assignments, and progress tracking.',
      'Implemented unit tests to validate individual components of the project management application to ensure its functionalities.',
    ],
  },
]

const projects = [
  {
    name: 'TaskFlow Manager',
    description:
      'A task tracker with full CRUD functionality for effective team and project management, incorporating multi-dimensional sorting, filtering, and search capabilities.',
    tags: [
      {
        name: 'NextJS',
        color: 'white-text-gradient',
      },
      {
        name: 'Radix Ui',
        color: 'white-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'white-text-gradient',
      },
    ],
    image: tasktracker,
    web_link: 'https://task-tracker-self.vercel.app/',
    github_link: 'https://github.com/michaelxswe/task-tracker',
  },
  {
    name: 'OpenAI Image Generator',
    description:
      'A full stack application that utilizes OpenAI API to generate AI Images based on user prompts. Featuring creating and posting your favorit images',
    tags: [
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'orange-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },

      {
        name: 'Node',
        color: 'pink-text-gradient',
      },
    ],
    image: generator,
    web_link: 'https://openai-image-generator-mx.netlify.app',
    github_link: 'https://github.com/michaelxswe/openai-image-generator',
  },
  {
    name: 'Cryptocurrency Finder',
    description:
      'A web application for accessing up-to-date pricing data for a broad range of cryptocurrencies through integration with CoinGecko API',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
    ],
    image: crypto,
    web_link: 'https://cryptocurrency-mx.netlify.app',
    github_link: 'https://github.com/michaelxswe/cryptocurrency',
  },
]

export { interests, experiences, projects };
