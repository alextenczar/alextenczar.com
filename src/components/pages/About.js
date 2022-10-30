import '../../scss/App.scss';
import Clock from 'react-live-clock';
import '../../scss/about.scss';
import resume from '../../static/ResumeAlexTenczar2021.pdf';

function About () {
    return (
        <div id="About">
            <p>📍 Concord, NH, USA:</p><Clock format={'LTS'} ticking={true} timezone={'America/New_York'} />
            <p id="bio">Hi. I'm a recent MS Graduate of <a href="https://unh.edu/" target="_blank" rel="noreferrer">The University of New Hampshire</a> in Information Technology. Over the past few  years I've become especially interested in pursuing web development. I enjoy using Python and React to make my ideas come to life.  I'm currently working as a contract web developer for Tufts University.</p>
            <a id="resume" href={resume} target="_blank" rel="noopener noreferrer" download="ResumeAlexTenczar">resume</a>
        </div>
    )
};

export default About;
