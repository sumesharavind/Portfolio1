import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import img from '../assets/images/img1.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={img} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sumesharavind" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumesh-aravind-k-5b1a71269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sumesh Aravind </h1>
          <p>Front End Web Developer (MERN)</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sumesharavind" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumesh-aravind-k-5b1a71269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;