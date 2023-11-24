import { motion } from 'framer-motion'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import { projects } from '../constants/index'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  web_link,
  github_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div
          onClick={() => window.open(web_link, '_blank')}
          className='relative w-full h-[230px] cursor-pointer'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
        <div
          onClick={() => window.open(github_link, '_blank')}
          className='flex justify-end cursor-pointer text-[18px] text-white'>
          GitHub
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')
