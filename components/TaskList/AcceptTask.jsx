import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="ml-5 mr-3 flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-purple-700 to-blue-600 rounded-xl shadow-lg transition-transform transform hover:scale-105">
  <div className='flex justify-between items-center p-5'>
    <h3 className='bg-red-600 text-xs font-semibold rounded px-3 py-1 text-white'>{data.category}</h3>
    <h4 className='text-sm text-gray-200'>{data.taskDate}</h4>
  </div>
  <h3 className='text-2xl mt-5 px-3 font-bold text-white'>{data.taskTitle}</h3>
  <p className='text-sm mt-2 p-2 text-gray-300'>{data.taskDescription}</p>
  <div className='flex justify-evenly mt-4 rounded-md'>
    <button className='bg-green-500 hover:bg-green-600 transition-colors py-1 rounded-md px-2 text-sm font-semibold text-white shadow'>
      Mark as Completed
    </button>
    <button className='bg-red-500 hover:bg-red-600 transition-colors py-1 rounded-md px-2 text-sm font-semibold text-white shadow'>
      Mark as Failed
    </button>
  </div>
</div>

  )
}

export default AcceptTask
