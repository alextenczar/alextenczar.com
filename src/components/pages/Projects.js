import '../../scss/App.scss';
import '../../scss/projects.scss';
import {ReactComponent as Linkicon} from '../../static/external-link.svg';
import { SRLWrapper } from "simple-react-lightbox";
import djangoproject from '../../static/django-project.png';
import bandviz from '../../static/bandviz.gif';
import tmc from '../../static/TMC.png';
import cpproject from '../../static/cp-project.png';

const options = {
    settings: {
        disableWheelControls: true,
        disableKeyboardControls: true,
    },
    caption: {
        showCaption: false,
    },
    buttons: {
        showDownloadButton: false,
        showAutoplayButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false,
        showNextButton: false,
        showPrevButton: false,
    },
    thumbnails: {
        showThumbnails: false,
    }
};

function Projects () {
    return (
    <SRLWrapper options={options}>
        <div id="Projects">
        <div className="project">
                <div className="project-text">
                    <a href="https://github.com/alextenczar/bandviz.com" className="project-link" target="_blank" rel="noopener noreferrer">BandViz.com - A Web Application for Visualizing Music Discovery <Linkicon className="link-icon"/></a>
                        <p><strong>Recipient of UNHM MSIT Program's 2020-2021 Master’s Project Award.</strong><br></br> For my master's project I created a React web application that utilizes Last.fm and Spotify's APIs to visualize musical artists similar to one a user searches for. The project was deployed to <a href="https://www.bandviz.com" target="_blank" rel="noopener noreferrer">Vercel</a> to be accessed from any device.</p>
                    <p><strong>Technologies used:</strong> React.js, D3.js, Axios, SASS, Vercel, RESTful APIs.</p>
                </div>
                <div className="project-image">
                    <img id="bandviz_gif" src={bandviz} alt="BandViz.com"></img>
                </div>
            </div>
            <div className="project">
                <div className="project-text">
                    <a href="https://tuftsmountainclub.org" className="project-link" target="_blank" rel="noopener noreferrer">TuftsMountainClub.org <Linkicon className="link-icon"/></a>
                        <p>Tufts University's Mountain Club needed to transition their original Wix site to something with more functionality. I created a WordPress equilvalent site with user trip propsal/registration and admin approved sign-ups.</p>          
                    <p><strong>Technologies used:</strong> WordPress, CSS, HTML, SMTP, PHP.</p>
                </div>
                <div className="project-image">
                    <img id="tmc-image" src={tmc} alt="tuftsmountainclub.org"></img>
                </div>
            </div>
            <div className="project">
                <div className="project-text">
                    <a href="https://github.com/alextenczar/3-julian-alex" className="project-link" target="_blank" rel="noopener noreferrer">Django Spreadsheet Web App <Linkicon className="link-icon"/></a>
                    <p>A fellow classmate and I created a Django web app capable of importing a Microsoft Excel spreadsheet and populating various data models within a PostGreSQL database. The web app then displays the models and sorts them by any attribute. This web app and database were eventually deployed to <a href="https://nhsee-team3.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a> for remote access.</p>
                    <p><strong>Technologies used:</strong> Django, Python, PostGreSQL, Heroku</p>
                </div>
                <div className="project-image">
                    <img src={djangoproject} alt="Django Project"></img>
                </div>
            </div>
            <div className="project">
                <div className="project-text">
                    <h2 className="non-link-title">React Front End for Drupal 8</h2>
                    <p>During my internship at CommonPlaces Interactive, I built a React front end on top of their existing Drupal workflow with Create-React-App and GraphQL.</p>
                    <p><strong>Technologies used: React.js, Drupal 8, GraphQL, Docker, Storybook</strong></p>
                </div>
                <div className="project-image">
                    <img src={cpproject} alt="React Drupal Project"></img>
                </div>
            </div>
        </div>
        </SRLWrapper>
    )
};

export default Projects;