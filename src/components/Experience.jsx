import React from 'react'
import Button from './Button'
import CardSkill from './CardSkill'

import js from '../assets/img/js.png'
import git from '../assets/img/git.png'
import html from '../assets/img/html-5.png'
import css from '../assets/img/css-3.png'
import tailwind from '../assets/img/tailwind.svg'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import ts from '../assets/img/ts.png'

const Experience = () => {
  return (
    <section className='flex flex-col gap-5 items-start'>
        <Button content={<li>Skills</li>}/>
        <CardSkill title={'HTML'} subtitle={'Medium Nivel'} src={html}/>
        <CardSkill title={'CSS'} subtitle={'Medium Nivel'} src={css}/>
        <CardSkill title={'JavaScript'} subtitle={'Medium Nivel'} src={js}/>
        <CardSkill title={'TypeScript'} subtitle={'Learning'} src={ts}/>
        <CardSkill title={'Tailwind'} subtitle={'Medium Nivel'} src={tailwind}/>
        <CardSkill title={'React Js'} subtitle={'Medium Nivel'} src={react}/>
        <CardSkill title={'Node Js'} subtitle={'Basic Nivel'} src={node}/>
        <CardSkill title={'Git'} subtitle={'Medium Nivel'} src={git}/>
    </section>
  )
}

export default Experience
