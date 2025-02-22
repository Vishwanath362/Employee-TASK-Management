import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="ml-5 mr-5 flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl shadow-lg transition-transform transform hover:scale-105">
  <div className='flex justify-between items-center p-5'>
    <h3 className='bg-red-600 text-xs font-semibold rounded px-3 py-1 text-white'>{data.category}</h3>
    <h4 className='text-xs text-gray-700'>{data.taskDate}</h4>
  </div>
  <h3 className='text-2xl mt-3 px-3 font-bold text-gray-900'>{data.title}</h3>
  <p className='text-sm mt-2 px-3 text-gray-800 h-14 overflow-hidden overflow-ellipsis whitespace-nowrap'>{data.taskDescription}</p>
  <div className='mt-4 flex items-center justify-center'>
    <button className='py-2 bg-green-600 hover:bg-green-700 transition-colors px-4 rounded text-white font-semibold shadow-md'>
      Accept Task
    </button>
  </div>
</div>

  )
}

export default NewTask
