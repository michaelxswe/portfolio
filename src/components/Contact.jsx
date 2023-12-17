import { motion } from "framer-motion"
import React from "react"
import SectionWrapper from "../hoc/SectionWrapper"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white font-bold text-[17px] max-w-3xl leading-[30px]">
          <div>Email: michaelxiazzz@gmail.com</div>
          <div>LinkedIn: linkedin.com/in/michaelxiazzz</div>
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")
