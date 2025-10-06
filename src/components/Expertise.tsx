import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src="https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png" alt="Laravel logo" width="75" height="50" />
                    <h3>Laravel app development</h3>
                    <p>Developed multiple Laravel projects as school assignments, implemented Laravel best practices.</p>
                </div>

                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS logo" width="70" height="50" />
                    <h3>Tailwind</h3>
                    <p>I mainly use Tailwind CSS as the styling framework for my web applications, and occasionally use something more bespoke depending on the project's requirements.</p>
                </div>

                <div className="skill">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML logo" width="70" height="50" />
                    <h3>PHP, HTML, CSS</h3>
                    <p>I have a solid foundation in PHP, HTML, and CSS, and can confidently write clean, efficient, and well-structured code in these languages.</p>
                </div>

                <div className="skill">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" alt="MySQL logo" width="70" height="50" />
                    <h3>MySQL</h3>
                    <p>I have a solid understanding of MySQL, including how to design and optimize databases for optimal performance and scalability. I only have used MySQL for databases in my projects.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
