import React from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'

const Section = () => {
  return (
    <section className='w-full flex flex-col gap-20 overflow-x-hidden'>
        <About />
        <Projects />
        <Experience />
    </section>
  )
}

export default Section
