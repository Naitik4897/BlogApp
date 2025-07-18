import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-64 w-full'>
      <div className='loader mb-4'></div>
      <p className='text-gray-600 font-medium'>Loading...</p>
    </div>    
  )
}

export default Spinner