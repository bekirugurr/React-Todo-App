import React from 'react'
import  loadingGif  from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='flex justify-center'>
        <img src={ loadingGif }  alt="loading" className='w-24 mt-3' />
    </div>
  )
}

export default Loading