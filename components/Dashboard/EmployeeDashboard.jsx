import React from 'react'
import TaskList from '../TaskList/TaskList'
import Header from '../../Other/Header'
import TaskListNumbers from '../../Other/TaskListNumbers'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-4 bg-[#08105b] h-screen'>
        
        <Header changeUser = {props.changeUser} data = {props.data}/>
        <TaskListNumbers data = {props.data}/>
        <TaskList data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard