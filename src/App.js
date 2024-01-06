
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import HomePage from './Component/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialPage from './Component/SocialPage/SocialPage';
import ResumePage from './Component/ResumePage/ResumePage';
import ProjectPage from './Component/ProjectPage/ProjectPage';

function App() {
  return (
    <>
   
    <BrowserRouter>
    
      <Routes>
       <Route path="/navbar" element={<Navbar/>}/>
         <Route path="/" element={<HomePage />} />
         <Route path='/socials' element={<SocialPage/>}/>
         <Route path='/resume' element={<ResumePage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>  

      </Routes>

    </BrowserRouter></>
   
   
  )
}

export default App
