import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="ml-5 mr-5 flex-shrink-0 h-full w-[300px] bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-xl shadow-lg transition-transform transform hover:scale-105">
  <div className='flex justify-between items-center p-5'>
    <h3 className='bg-red-600 text-xs font-semibold rounded px-3 py-1 text-white'>{data.category}</h3>
    <h4 className='text-sm text-gray-800'>{data.taskDate}</h4>
  </div>
  <h3 className='text-2xl mt-3 px-3 font-bold text-gray-900'>{data.taskTitle}</h3>
  <p className='text-sm mt-2 px-3 text-gray-700 h-14 overflow-hidden overflow-ellipsis whitespace-nowrap'>{data.taskDescription}</p>
  <div className='mt-4 flex justify-center'>
    <button className='w-full bg-red-500 hover:bg-red-600 transition-colors py-2 rounded-md text-white font-semibold shadow'>
      Mark as Failed
    </button>
  </div>
</div>

  )
}

export default FailedTask
