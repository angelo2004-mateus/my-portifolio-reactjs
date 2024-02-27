import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className='flex flex-col gap-y-3 items-start'>
      <Button content={<li>About</li>}/>
      <h2 className='text-big-size'>Designer and Web Developer</h2>
      <p className='opacity-50'>My name is <b>Ângelo Mateus</b> , I'm Brazilian and a <b>Programmer</b>. 
        I graduated in Electronics from IFMT and I'm currently studying 
        Analysis and Systems Development. I'm always seeking to learn and 
        evolve, committed to developing intuitive and accessible technological 
        solutions. With a curious mind and a passion for innovation, I'm eager
        to contribute significantly to the world of technology.
        <br /><br />
        I am seeking challenging and rewarding opportunities that allow me to 
        apply and expand my knowledge and skills. I am committed to making a meaningful 
        contribution to a dynamic team, where I can collaborate to achieve common goals and 
        grow professionally. I am looking for a position that allows me to continue learning and 
        developing my skills, while contributing to the success and innovation of the company.
      </p>
    </div>
  )
}

export default About
