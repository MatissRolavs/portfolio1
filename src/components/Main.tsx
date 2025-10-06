import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import image from '../assets/images/Photo on 06-10-2025 at 13.33.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
            <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MatissRolavs" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Matīss Mareks Rolavs</h1>
          <p>Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MatissRolavs" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;