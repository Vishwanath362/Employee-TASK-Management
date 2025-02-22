import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  
  console.log(userData); // Debugging: Check the user data

  return (
    <div className="bg-gradient-to-l from-blue-800 to-yellow-200 p-5 rounded mt-5 h-auto">
      {/* Header Row */}
      <div className="bg-gradient-to-r from-red-400 to-red-600 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between rounded text-sm sm:text-base shadow-lg">
        <h2 className="text-base sm:text-lg font-medium sm:w-1/5 text-white">Employee Name</h2>
        <h3 className="text-base sm:text-lg font-medium sm:w-1/5 text-white">New Task</h3>
        <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-white">Active Task</h5>
        <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-white">Completed</h5>
        <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-white">Failed</h5>
      </div>

      {/* Employee Rows */}
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between rounded text-sm sm:text-base bg-white shadow-md"
          >
            <h2 className="text-base sm:text-lg font-medium sm:w-1/5 text-black">{elem.firstName}</h2>
            <h3 className="text-base sm:text-lg font-medium sm:w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
            <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-black">{elem.taskCounts.completed}</h5>
            <h5 className="text-base sm:text-lg font-medium sm:w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
