import { motion } from "framer-motion"
import React from "react"
import Tilt from "react-parallax-tilt"
import { skills } from "../constants/index"
import SectionWrapper from "../hoc/SectionWrapper"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, list, title }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px]">
        <div className="text-center pt-5 font-extrabold text-[30px]">
          {title}
        </div>
        <div className="py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {list.map((e) => (
            <h3 className="text-white text-[20px] font-bold text-center">
              {e}
            </h3>
          ))}
        </div>
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
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"></motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {skills.map((skill, index) => (
          <ServiceCard
            list={skill.list}
            title={skill.title}
            index={index}
            {...skill}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
