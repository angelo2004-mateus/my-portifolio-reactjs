import React from 'react'
import Button from './Button'
import CardProject from './CardProject'
import ButtonIcon from './ButtonIcon'

const Projects = () => {
  return (
    <section className='flex flex-col gap-5 items-start'>
        <Button content={<li>Projects</li>}/>

        <div className='flex flex-wrap gap-5 overflow-x-scroll'>
            <CardProject src={'https://gym-react-website-ruddy.vercel.app/'} 
            title={'Gym Website'} subtitle={'React & Tailwind'}/>

            <CardProject src={'https://hoobank-website-react-g4iz6s9h1-angelo-mateus-projects.vercel.app/'} 
            title={'Bank Website'} subtitle={'React & Tailwind'}/>

            <CardProject src={'https://silly-centaur-886f76.netlify.app/'} 
            title={'CRUD LocalStorage'} subtitle={'JavaScript & CSS'}/>

            <CardProject src={'https://slide-5pby.vercel.app/'} 
            title={'Slide'} subtitle={'JavaScript & CSS'}/>
        </div>

        <ButtonIcon src={'https://github.com/angelo2004-mateus'} content={'More Projects'}/>
    </section>
  )
}

export default Projects
