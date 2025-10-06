import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Project.scss';
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Biggest Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <video width="100%" className="zoom" controls>
                <source src={`${process.env.PUBLIC_URL}/movies.mp4`} type="video/mp4" />
                </video>
                <a style={{ textDecoration: 'underline', color: 'white' }} href="https://github.com/MatissRolavs/movies"><h2>My first big project - Movie watching website</h2></a>
                <p>Developed simple movie watching website using Laravel, MySQL, Tailwind, API for movies and some JavaScript, haven't finished it fully, since i wanted to start something new and did biggest features i wanted to add.</p>
                <a style={{ textDecoration: 'underline', color: 'white' }} href="https://github.com/MatissRolavs/movies">Link to GitHub <GitHubIcon/></a>
            </div>
            <div className="project">
                <video width="100%" className="zoom" controls>
                <source src={`${process.env.PUBLIC_URL}/f1hub.mp4`} type="video/mp4" />
                </video>
                <a  style={{ textDecoration: 'underline', color: 'white' }} href="https://github.com/MatissRolavs/f1hub"><h2>F1hub - work in progress</h2></a>
                <p>A website for Formula 1 fans, with all driver, race and championship information. Let's user make their own predictions for race and communicate trough forums. Made with Laravel, MySQL, Tailwind, JolpicaApi and AnimeJS.</p>
                <a style={{ textDecoration: 'underline', color: 'white' }} href="https://github.com/MatissRolavs/movies">Link to GitHub <GitHubIcon/></a>
            </div>
        </div>
    </div>
    );
}

export default Project;
