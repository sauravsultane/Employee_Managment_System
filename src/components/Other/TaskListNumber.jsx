import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex justify-between gap-5 mt-10 screen bg-inherit'>
        <div className=' w-[45%] bg-blue-400 rounded-xl py-6 px-9'>

            <h2 className='text-2xl font-semibold bg-inherit text-white'>0</h2>
            <h3 className='text-xl font-medium bg-inherit text-white'>New Task</h3>
        </div> 
        <div className=' w-[45%] bg-green-400 rounded-xl py-6 px-9'>

            <h2 className='text-2xl font-semibold bg-inherit text-white'>0</h2>
            <h3 className='text-xl font-medium bg-inherit text-white'>Complited Task</h3>
        </div> 
        <div className=' w-[45%] bg-yellow-400 rounded-xl py-6 px-9'>

            <h2 className='text-2xl font-semibold bg-inherit text-white'>0</h2>
            <h3 className='text-xl font-medium bg-inherit text-white'>Accpted</h3>
        </div> 
        <div className=' w-[45%] bg-red-400 rounded-xl py-6 px-9'>

            <h2 className='text-2xl font-semibold bg-inherit text-white'>0</h2>
            <h3 className='text-xl font-medium bg-inherit text-white'>Failed</h3>
        </div> 
      
    </div>
  )
}

export default TaskListNumber
