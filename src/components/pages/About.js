import '../../scss/App.scss';
import Clock from 'react-live-clock';
import '../../scss/about.scss'

function About () {
    return (
        <div id="About">
            <div className="about-container">
            <p>📍 concord, nh:</p><Clock format={'LTS'} ticking={true} timezone={'America/New_York'} />
            <p id="bio">Hi. I'm an Information Technology graduate student at the <a href="https://manchester.unh.edu/">University of New Hampshire at Manchester</a>. Over the past couple years I've become especially interested in pursuing web development. I enjoy using Python and React to make my ideas come to life. I'm currently working freelance as a front-end web developer as I finish up my final year of school.</p>
            <a id="resume">resume</a>
        </div>
        
        </div>
    )
};

export default About;