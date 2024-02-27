import React from 'react'

import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import profilePhoto from '../assets/img/profilePhoto.jpeg'
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <nav className='bg-secondary rounded-2xl p-[28px] w-[500px] md:h-[90vh] max-md:w-full flex flex-col justify-between'>
      <div className='flex flex-col gap-y-2 items-start'>
        <div className='w-[70px] h-[70px] rounded-full'
        style={{backgroundImage: `url('${profilePhoto}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}/>
        
        <h3 className='text-medium-size mt-3'>Ângelo Mateus</h3>
        <p className='text-small-size mb-3'>Web Developer & Designer</p>

        <a href="mailto:angelomateusnerysouza@gmail.com">
          <Button className={'hover:opacity-50 transition-all'} content={'@ Mail Me'}/>
        </a>

      </div>

      <div className='flex gap-3 max-md:mt-20'>
        <ButtonIcon content={<FiGithub />} src={'https://github.com/angelo2004-mateus'}/>
        <ButtonIcon content={<TiSocialLinkedin/>} src={'https://www.linkedin.com/in/angelo-mateus-nery-souza-a2738821b/'}/>
        <ButtonIcon content={<MdOutlineEmail />} src={'mailto:angelomateusnerysouza@gmail.com'}/>
        <ButtonIcon content={<FaWhatsapp />} src={'https://wa.me/5565992673850'}/>
      </div>
    </nav>
  )
}

export default Menu
