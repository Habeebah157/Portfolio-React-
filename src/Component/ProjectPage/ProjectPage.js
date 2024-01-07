import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ProjectPage.css";
import axios from "axios";

const ProjectPage = () => {


    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        axios('http://localhost:8000/projects')
        .then((response)=>setProject(response.data))
        .catch((err)=>{
            console.log(err.message)
        })
        .finally(()=>{
            setLoading(true)
        })
          
        },[])


  return (
    <>
    <Navbar />
      {loading ? project.map((proj) => (
        <div className="project-container">
          <li className="project-name" key={proj.name}>
            <a href={proj.html_url} target="_blank">
              {proj.name}
            </a>
            {<br></br>}
            {proj.language}
          </li>
        </div>
      )): <h1>Loading...</h1>}
  
    </>
  );
};

export default ProjectPage;

