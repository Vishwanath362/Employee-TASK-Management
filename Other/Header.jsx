import React from 'react'
import { setLocalStorage } from '../utils/LocalStorage'
const Header = (props) => {
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser',"")
    props.changeUser('')
  }
  return (
    <div>
      <div className='py-6 px-6 font-bold flex justify-between'> 
        <h4>Hello, <br/> <span>username😉</span></h4>
        <button onClick={logOutUser} className='py-2 px-3 mt-4 rounded-sm bg-red-600'>Log Out</button>
      </div>
      
    </div>
  )
}

export default Header
