import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';


const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <div>
          Email: michaelxswe@gmail.com
          </div>
          <div>
          Phone: (917)520-5546
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');


