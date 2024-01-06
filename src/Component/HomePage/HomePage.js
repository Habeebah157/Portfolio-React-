import React from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'

const HomePage = () => {
  return (
    
    <div>
        <Navbar/>
        <div>
        <svg className="heart" viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg> 

        <h1 className='welcome-sign'>Welcome To Habeebah Muse's Website</h1>
        <ul className='more-information'>
        <li>Class of <span>2025</span></li>
        <li>Bachelors at <span>Kennesaw State University</span></li>
        <li>Computer Science Student</li>
        <li>Passionate about <span>Full Stack Web Development</span> and <span>Android Development</span></li>

        </ul>
       
        </div>
       
    </div>
  )
}

export default HomePage
