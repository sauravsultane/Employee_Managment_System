import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#323232] my-5 ">
    <form className=" flex flex-wrap  mt-5  items-start justify-between">
      <div className="w-1/2 flex-col">
        <div >
        <h3 className="text-white text-lg font-semibold  mt-3">Task Title</h3>
        <input type="text" placeholder="Make a Design" className="bg-transparent w-[80%] text-white outline-none border-neutral-600 border-2 rounded-md placeholder:px-2"/>
        </div>

        <div className="mt-3">
        <h3 className="text-white text-lg font-medium mt-3">Date</h3>
        <input type="date" className="bg-transparent border-neutral-600 w-[80%] border-2 outline-none text-white rounded-md text-[#979494] px-2"/>
      </div>
      <div>
        <h3 className="text-white text-lg font-medium  mt-3" >Assign To</h3>
        <input type="text" placeholder="Name of emploee" className="bg-transparent outline-none w-[80%] text-white border-neutral-600 border-2 rounded-md placeholder:px-2"/>
      </div>
      <div>
        <h3 className="text-white text-lg font-medium  mt-3">Category</h3>
        <input type="text" placeholder="Design,Dev,etc" className="bg-transparent outline-none w-[80%] text-white border-neutral-600 border-2 rounded-md placeholder:px-2"/>
      </div>

      
      </div>
      <div className="w-1/2 mx-15 ">
        <h3 className="text-white text-lg font-medium ">Descreption</h3>
        <textarea name="" id="" rows={10} cols={30} className="bg-transparent outline-none w-[90%] text-white border-neutral-600 border-2 rounded-md placeholder:px-2"></textarea> 

        <div className="mt-4">
        <button className="bg-red-400 p-2.5 rounded-md font-medium w-[90%] text-white">Create Task</button>
      </div>           
      </div>
    </form>
  </div>
  )
}

export default CreateTask
