import React from "react";
import Navbar from "../Navbar/Navbar";
import "./SocialPage.css";
import img from "./github-mark-white.png";
import linkedin_img from "./LI-Logo.png";
import { Link } from "react-router-dom";

const SocialPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Link to="https://www.linkedin.com/in/habeebahmuse/" />
        <div className="github">
          <img className="github-img" src={img} />
          <p className="github-text"><a href="https://github.com/Habeebah157?tab=repositories" target="_blank">GitHub</a></p>
        </div>
        <Link />
        <div className="linkedin">
          <img className="linkedin-img" src={linkedin_img} />
          <p className="linkedin-text"><a href="https://www.linkedin.com/in/habeebahmuse/" target="_blank">LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
