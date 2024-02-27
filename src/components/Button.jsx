import React from 'react'

const Button = ({content, className}) => {

   
    

  return (
    <button className={`bg-secondary text-white rounded-md border
     border-white border-opacity-10 py-2 px-5 ${className}`}>
        {content}
    </button>
  )
}

export default Button
