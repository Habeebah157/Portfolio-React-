import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ResumePage.css'

const ResumePage = () => {
  return (
    <>
    <Navbar/>
    <center><iframe className="iframe" height={700} width={800}src="https://docs.google.com/document/d/e/2PACX-1vQ9X7CNbFNEQ1pAVV5XmK_REuLyPh4uOPZyvTwGcQFO-slOn4CgeJm4eIUvP6kcGP04__emmZ7hUu9k/pub?embedded=true"></iframe></center>
    </>
  )
}

export default ResumePage