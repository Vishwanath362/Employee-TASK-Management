import React, { act, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskDate: taskDate,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    })

    const data = userData

    data.forEach(function (elem) {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1

      }
    })
    setUserData(data)


    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskTitle('')
    setTaskDescription('')

  }

  return (
    <div className="p-8 mt-8 rounded-lg bg-gradient-to-r from-teal-500 to-green-400 shadow-lg">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col md:flex-row gap-8 w-full text-gray-900"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-5">
          {/* Task Title */}
          <div>
            <h2 className="text-lg font-semibold">Task Title</h2>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="py-2 px-4 w-full bg-white/40 backdrop-blur-md text-gray-900 placeholder-gray-700 outline-none rounded-md border border-gray-600 focus:ring-2 focus:ring-gray-700"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          {/* Date */}
          <div>
            <h2 className="text-lg font-semibold">Date</h2>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="py-2 px-4 w-full bg-white/40 backdrop-blur-md text-gray-900 placeholder-gray-700 outline-none rounded-md border border-gray-600 focus:ring-2 focus:ring-gray-700"
              type="date"
            />
          </div>

          {/* Assign to */}
          <div>
            <h2 className="text-lg font-semibold">Assign to</h2>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="py-2 px-4 w-full bg-white/40 backdrop-blur-md text-gray-900 placeholder-gray-700 outline-none rounded-md border border-gray-600 focus:ring-2 focus:ring-gray-700"
              type="text"
              placeholder="Employee name"
            />
          </div>

          {/* Category */}
          <div>
            <h2 className="text-lg font-semibold">Category</h2>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="py-2 px-4 w-full bg-white/40 backdrop-blur-md text-gray-900 placeholder-gray-700 outline-none rounded-md border border-gray-600 focus:ring-2 focus:ring-gray-700"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        {/* Right Side - Description & Button */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-48 p-4 text-gray-900 bg-white/40 backdrop-blur-md placeholder-gray-700 outline-none rounded-md border border-gray-600 focus:ring-2 focus:ring-gray-700 resize-none"
            placeholder="Describe the task here..."
          ></textarea>
          <button className="p-3 bg-gray-900 text-white font-semibold mt-4 rounded-lg hover:bg-gray-800 transition-all duration-200">
            Create Task
          </button>
        </div>
      </form>
    </div>


  )
}

export default CreateTask
