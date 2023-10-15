import { 
  time,
  generator,
  crypto,
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
    title: ['React', 'FastAPI', 'Spring Boot', 'Express'],

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
      'Utilized FastAPI to create the backend for an administrative dashboard',
      'Performed unit, integration, and Cucumber testing',
      'Managed data manipulation tasks by updating and retrieving information from a PostgreSQL database',
      'Leveraged Docker Containers, AWS CloudFormation, and Azure CI/CD pipelines for streamlined deployments to AWS Fargate',
      'Collaborated in a Scrum environment, effectively communicating daily updates during stand-ups',
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
      'Collaborated with Lockheed Martin engineers to create a remote operated water filtering system',
      'Designed and developed a full-stack project management app, supported features include project creation, team assignment, and project progress tracking',
    ],
  },
  {
    title: 'Math Tutor',
    company_name:
      'NASA Space Grant intern hosted by Lockheed Martin | Queens, NY',
    icon: time,
    iconBg: '#383E56',
    date: 'Nov 2019 - Feb 2020',
    points: [
      'Utilized clear and concise communication techniques to simplify complex algebraic concepts for students of varying skill levels',
      'Provide updates on student progress, including areas for improvement and recommended action plans',
    ],
  },
]

const projects = [
  {
    name: 'Shopify Backend Clone',
    description:
      'Backend API for a shopping website. Supporting features includes user registration, secure sign-in, order submission, and access to order history.',
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
    web_link: 'http://3.15.183.9/docs',
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
    name: 'Cryptocurrency Finder',
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
