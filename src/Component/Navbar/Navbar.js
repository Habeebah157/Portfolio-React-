import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

        <ul className='navbar'>
            <li className='li'><Link to="/resume">Resume</Link></li>
            <li className='li'><Link to="/project">Projects</Link></li>
            <li className='li'><Link to="/socials">Socials</Link></li>
            <li className='li'><Link to="/">Home</Link></li> 
        </ul>
    </div>
  )
}

export default Navbar
