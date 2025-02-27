import React from "react";
// import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock101 from '../assets/images/mock101.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
import mock10 from "../assets/images/mock10.png"
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://66793c58769ada5ef058e068--effervescent-paletas-b433c2.netlify.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://66793c58769ada5ef058e068--effervescent-paletas-b433c2.netlify.app/" target="_blank" rel="noreferrer"><h2>Sharon Restaurant</h2></a>
                <p>Sharon Restaurant Website is a food ordering platform I built using React.js and Bootstrap, designed for a smooth user experience. The site allows customers to browse the menu, customize their orders, and place them for delivery or pickup with ease.</p>
            </div>
            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>*/}
            <div className="project">
                <a href="https://purple-mud-0fc8a0100.5.azurestaticapps.net" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://purple-mud-0fc8a0100.5.azurestaticapps.net" target="_blank" rel="noreferrer"><h2>CLM - Contract Lifecycle Management</h2></a>
                <p>The Contract Lifecycle Management (CLM) platform is a web application I developed using React.js and Bootstrap to streamline the management of contracts from creation to renewal. The platform allows users to draft, review, approve, and monitor contracts in a highly efficient manner.</p>
            </div> 
            <div className="project">
                <a href="https://purple-mud-0fc8a0100.5.azurestaticapps.net" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://purple-mud-0fc8a0100.5.azurestaticapps.net" target="_blank" rel="noreferrer"><h2>Edusity - Clone</h2></a>
                <p>The Edusity clone is an educational institute website I developed using React.js and Bootstrap, designed to facilitate seamless online learning and course management. The platform allows students to browse and enroll in various courses, attend live sessions, and interact with instructors</p>
            </div>
            <div className="project">
                <a href="https://mango-ground-07662d80f.4.azurestaticapps.net" target="_blank" rel="noreferrer"><img src={mock101} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mango-ground-07662d80f.4.azurestaticapps.net" target="_blank" rel="noreferrer"><h2>Customer Portal (Admin & Client) </h2></a>
                <p>Developed a Customer Portal using React.js, Node.js, MongoDB, and MUI for managing customer interactions efficiently. The portal includes Admin and Client interfaces with seamless navigation and enhanced user experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;