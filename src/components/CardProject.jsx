import React from 'react'

import { motion } from 'framer-motion'

const CardProject = ({src, title, subtitle}) => {
  return (
    <a href={src} target='_blank'>
        <motion.div
        whileHover={{scale: .9}} transition={{type: 'spring', damping: 10, stiffness: 300}}
        
        className='bg-secondary text-white rounded-md border
        border-white border-opacity-10 p-5 flex flex-col gap-5 h-[400px] w-[350px]'>
        <iframe className='h-full rounded-lg' scrolling='no' src={src} frameborder="0"></iframe>
        <div className='flex flex-col'>
            <h2 className='text-medium-size'>{title}</h2>
            <p className='text-small-size'>{subtitle}</p>
        </div>
        </motion.div>
    </a>
  )
}

export default CardProject
