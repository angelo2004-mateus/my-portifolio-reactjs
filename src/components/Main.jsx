import React from 'react'
import Menu from './Menu'
import Section from './Section'

const Main = ({children}) => {
  return (
    <main className='flex max-w-[1200px] w-[95%] max-md:flex-col h-screen py-10 gap-10'>
       <Menu />
       <Section />
    </main>
  )
}

export default Main
