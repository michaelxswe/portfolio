import { 
  web,
  backend,
  database,
  graph,
  time,
  generator,
  crypto
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
    company_name: 'Lockheed Martin',
    icon: time,
    iconBg: '#383E56',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Developed and implemented multiple firmware components for a filtration system',
      'Implemented a MySQL database to analyze the performance of a filtration system under diverse process parameters',
      'Developed Python scripts to automate the data collection process for the filtration system',
    ],
  },
  {
    title: 'Course Assistant',
    company_name: 'Binghamton University',
    icon: time,
    iconBg: '#383E56',
    date: 'Aug 2021 - Dec 2021',
    points: [
      'Served as a resource for students taking CS240 (Data Structures and Algorithms)',
      'Hold weekly in-person office hours to address any questions students may have about the course material',
    ],
  },
  {
    title: 'Math Tutor',
    company_name: 'Startline Academy',
    icon: time,
    iconBg: '#383E56',
    date: 'Dec 2019 - Feb 2020',
    points: [
      'Develop lesson plans that are customized to the specific needs of each student',
      'Evaluated and documented each student’s progress',
    ],
  },
]

const projects = [
  {
    name: 'OpenAI Image Generator',
    description:
      ' a full stack application that allow users to generate an image which closely matches their input description',
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
    source_code_link: 'https://openai-image-generator-mx.netlify.app/',
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
    source_code_link: 'https://cryptocurrency-mx.netlify.app/',
    github_link: 'https://github.com/michaelxswe/cryptocurrency',
  },
]

export { interests, experiences, projects };
