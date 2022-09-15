import React from 'react'
import Form from './Form'
import bunny from '../assets/bunny.png'
import turtle from '../assets/turtle.png'


const Header = ({userName}) => {
  return (
    <div className='flex flex-col items-center py-4 form-wrapper'>
      {userName&&(<h1 className='text-white my-1 text-lg'><span className='font-semibold text-xl'>{userName}</span> is about to achieve something significant </h1>)}
      <div className='flex flex-rox gap-9 items-end'>
        <img src={bunny} className='h-36 mb-6 hidden md:block'/>
        <Form/>
        <img src={turtle} className='h-36 mb-8 hidden md:block'/>
      </div>
    </div>
  )
}

export default Header
