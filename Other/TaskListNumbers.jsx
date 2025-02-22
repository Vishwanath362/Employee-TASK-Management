import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 mx-5">
  <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg transition-transform transform hover:scale-105">
    <h2 className="text-4xl font-bold text-white">{data.taskCounts.newTask}</h2>
    <h3 className="font-medium text-gray-200">New Task</h3>
  </div>
  
  <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transition-transform transform hover:scale-105">
    <h2 className="text-4xl font-bold text-white">{data.taskCounts.completed}</h2>
    <h3 className="font-medium text-gray-200">Completed Task</h3>
  </div>

  <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg transition-transform transform hover:scale-105">
    <h2 className="text-4xl font-bold text-white">{data.taskCounts.active}</h2>
    <h3 className="font-medium text-gray-800">Accepted Task</h3>
  </div>

  <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-400 to-red-600 shadow-lg transition-transform transform hover:scale-105">
    <h2 className="text-4xl font-bold text-white">{data.taskCounts.failed}</h2>
    <h3 className="font-medium text-gray-200">Failed Task</h3>
  </div>
</div>

  );
};

export default TaskListNumbers;
