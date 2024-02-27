import React from 'react'

import { motion } from 'framer-motion'

const CardSkill = ({src, title, subtitle}) => {
  return (
    <motion.div 
    initial={{scale: .5}}
    whileInView={{scale: 1}}
    

    className='bg-secondary w-full text-white rounded-md border
    border-white border-opacity-10 p-5 h-[90px] flex gap-x-5'>
      <img src={src} alt="" className='h-full rounded-md justify-center'/>
      <div className='h-full flex flex-col'>
        <h2 className='text-medium-size'>{title}</h2>
        <p className='text-small-size'>{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default CardSkill
