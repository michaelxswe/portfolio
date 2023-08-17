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
    title: 'Frontend Developer',
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
    title: 'Data Analyst',
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
      'Designed and implemented REST API leveraging FastAPI',
      'Performed unit, integration, and Cucumber testing to ensure application quality',
      'Leveraged Docker Containers to ensure environment compatibility',
      'Created AWS CloudFormation templates for streamlined deployments to AWS Fargate',
      'Orchestrated Azure CI/CD pipelines, enhancing the agility and efficiency of development and deployment cycles',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Lockheed Martin',
    icon: time,
    iconBg: '#383E56',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Collaborated in the development of a frontend for a Project Management System utilizing React and Bootstrap',
      'Developed a backend for a Project Management System leveraging Express',
      'Designed and implemented a MySQL database to support the Project Management System',
      'Acquired hands-on experience in crafting SQL queries'
    ],
  },
  {
    title: 'Course Assistant',
    company_name: 'Binghamton University',
    icon: time,
    iconBg: '#383E56',
    date: 'Aug 2021 - Dec 2021',
    points: [
      'Served as a resource for students taking the course - Data Structures and Algorithms',
      'Hold weekly in-person office hours to address any questions students may have about the course',
    ],
  }
]

const projects = [
  {
    name: 'ishop Backend API',
    description:
      'Backend API for a shopping website. Utilizing FastAPI and SQLAlchemy as the ORM to enable seamless CRUD operations with a PostgreSQL database',
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
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },

    ],
    image: ishop,
    web_link: 'http://3.17.10.48/docs',
    github_link: 'https://github.com/michaelxswe/ishop',
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
    name: 'Cryptocurrency',
    description:
      'A web application for accessing up-to-date pricing data for a broad range of cryptocurrencies through integration with CoinGecko API',
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
