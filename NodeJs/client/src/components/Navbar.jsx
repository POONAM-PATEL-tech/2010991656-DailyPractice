import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  
  return (
    <nav>
     <NavLink  to='/'>Home</NavLink> {/*with Navlink there will be a class active add at html */}
     <NavLink  to='/about'>About</NavLink>
     <NavLink to='/Form'>Form</NavLink>
     <NavLink to='/Product'>Product</NavLink>
    </nav>
  )
}
