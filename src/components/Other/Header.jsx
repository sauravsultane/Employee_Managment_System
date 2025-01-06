import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white bg-inherit'>
        <h1 className='text-2xl font-medium bg-inherit' >Hello <br/><span className='text-3xl font-semibold bg-inherit'> Saurav👋</span></h1>
        <button className='bg-red-500 p-2 rounded-md font-medium'>Log Out</button>
      
    </div>
  )
}

export default Header
