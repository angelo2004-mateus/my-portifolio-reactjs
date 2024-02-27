import React from 'react'

const ButtonIcon = ({src, content, className}) => {

   
    

  return (
    <a href={src} target='_blank'>
      <button className={`btn-icon relative bg-secondary text-white rounded-md border
     border-white border-opacity-10 opacity-50 p-2 text-[20px] hover:opacity-100 transition-all ${className}`}>
        {content}
      </button>
    </a>
    
  )
}

export default ButtonIcon
