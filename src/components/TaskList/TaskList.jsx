import React from 'react'


//-----------------------overflow auto for scrolling in web-------------------------------------------//

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] overflow-auto bg-inherit mt-10 py-5 flex align-middle justify-start gap-5 flex-nowrap'>

        <div className='flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl px-4 py-5' >
            <div className='bg-inherit flex justify-between items-center'>

            <h3 className='bg-red-500 rounded-md h-6 w-12 flex items-center text-sm justify-center text-white'> High</h3>
            <h4 className='bg-inherit text-white text-sm'>2 jan 2025</h4>
            </div>
            <h2 className='mt-4 bg-inherit text-white font-semibold text-2xl'>Make a video</h2>

            <p className='bg-inherit text-white mt-3 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sed unde neque nulla corrupti?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl px-4 py-5' >
            <div className='bg-inherit flex justify-between items-center'>

            <h3 className='bg-red-500 rounded-md h-6 w-12 flex items-center text-sm justify-center text-white'> High</h3>
            <h4 className='bg-inherit text-white text-sm'>2 jan 2025</h4>
            </div>
            <h2 className='mt-4 bg-inherit text-white font-semibold text-2xl'>Make a video</h2>

            <p className='bg-inherit text-white mt-3 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sed unde neque nulla corrupti?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl px-4 py-5' >
            <div className='bg-inherit flex justify-between items-center'>

            <h3 className='bg-red-500 rounded-md h-6 w-12 flex items-center text-sm justify-center text-white'> High</h3>
            <h4 className='bg-inherit text-white text-sm'>2 jan 2025</h4>
            </div>
            <h2 className='mt-4 bg-inherit text-white font-semibold text-2xl'>Make a video</h2>

            <p className='bg-inherit text-white mt-3 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sed unde neque nulla corrupti?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl px-4 py-5' >
            <div className='bg-inherit flex justify-between items-center'>

            <h3 className='bg-red-500 rounded-md h-6 w-12 flex items-center text-sm justify-center text-white'> High</h3>
            <h4 className='bg-inherit text-white text-sm'>2 jan 2025</h4>
            </div>
            <h2 className='mt-4 bg-inherit text-white font-semibold text-2xl'>Make a video</h2>

            <p className='bg-inherit text-white mt-3 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sed unde neque nulla corrupti?</p>
        </div>


      
    </div>
  )
}

export default TaskList
