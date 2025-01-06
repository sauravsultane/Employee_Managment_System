import React from 'react'
import Header from '../../Other/Header'
import TaskListNumber from '../../Other/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

function EmploeeDashboard() {
  return (
    <div>
        <div className='p-11 bg-[#1c1c1c] h-screen'>
            
            <Header/>
            <TaskListNumber/> 
            <TaskList/>
            </div>
    </div>
  )
}

export default EmploeeDashboard
