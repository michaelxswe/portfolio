import React from 'react'
import Tilt from 'react-parallax-tilt'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { interests } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'

  const ServiceCard = ({ index, title}) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            {title.map((t) => (
              <h3 className='text-white text-[20px] font-bold text-center'>
                {t}
              </h3>
            ))}
        </div>
      </motion.div>
    </Tilt>
  )


const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {interests.map((interest, index) => (
          <ServiceCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, 'skills')
