import React from 'react';
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }, 
  },
});

const Technologies = () => {
  return (
    <div>
      <motion.h2 
      whileInView={{opacity:1 , y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Technologies & <span className='text-neutral-500'>Tools</span></motion.h2>
      <motion.div
      whileInView={{opacity:1 , x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobephotoshop className='text-6xl text-cyan-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobeillustrator className='text-6xl text-orange-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobexd className='text-6xl text-purple-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiFramer  className='text-6xl text-purple-100'/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-6xl text-cyan-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaFigma className='text-6xl text-purple-100'/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
