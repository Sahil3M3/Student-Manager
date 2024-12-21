import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div className='header'>
        <h1>Student Manager</h1>
         <p>All Students : {props.studentCount}</p>
    </div>
  )
}

export default Header