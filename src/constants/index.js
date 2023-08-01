import { 
  web,
  backend,
  database,
  graph,
  time,
  generator,
  crypto,
  ishop
} from '../assets/index';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
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
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Engineer',
    icon: database,
  },
  {
    title: 'Data Scientist',
    icon: graph,
  },
]

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Symetra',
    icon: time,
    iconBg: '#383E56',
    date: 'May 2023 - August 2023',
    points: [
      'Created backend APIs using FastAPI',
      'Performed unit, integration, and Cucumber testing to ensure application quality',
      'Created AWS CloudFormation templates to deploy containers to AWS Fargate',
      'Implemented Azure pipelines for maximum development and deployment efficiency',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Lockheed Martin',
    icon: time,
    iconBg: '#383E56',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Assisited in designing, implementing, and maintaining databases',
      'Optimized SQL queries to exatrct relevant information',
      'Presented data findings to my team',
    ],
  },
  {
    title: 'Course Assistant',
    company_name: 'Binghamton University',
    icon: time,
    iconBg: '#383E56',
    date: 'Aug 2021 - Dec 2021',
    points: [
      'Served as a TA for students taking CS240 (Data Structures and Algorithms)',
      'Hold weekly in-person office hours to address any questions students may have about the course',
    ],
  }
]

const projects = [
  {
    name: 'ishop Backend API',
    description:
      'Backend API for a shopping website. Implemented CRUD operations against a Postgres using FastAPI and SQLAlchemy',
    tags: [
      {
        name: 'FastAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'SQLAlchemy',
        color: 'pink-text-gradient',
      },
      {
        name: 'Postgres',
        color: 'blue-text-gradient',
      },

      {
        name: 'AWS',
        color: 'yellow-text-gradient',
      },
    ],
    image: ishop,
    web_link: 'http://3.17.10.48/docs',
    github_link: 'https://github.com/michaelxswe/ishop',
  },
  {
    name: 'OpenAI Image Generator',
    description:
      'A full stack application that utilizes OpenAI API to generate AI Images based on user prompts',
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
    name: 'Cryptocurrency',
    description:
      'A web application for accessing comprehensive, up-to-date pricing data for a broad range of cryptocurrencies',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },

      {
        name: 'API',
        color: 'yellow-text-gradient',
      },
    ],
    image: crypto,
    web_link: 'https://cryptocurrency-mx.netlify.app',
    github_link: 'https://github.com/michaelxswe/cryptocurrency',
  },
]

export { interests, experiences, projects };
