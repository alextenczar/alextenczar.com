import '../../scss/App.scss';
import Clock from 'react-live-clock';
import '../../scss/about.scss';
import resume from '../../static/ResumeAlexTenczar2021.pdf';

function About () {
    return (
        <div id="About">
            <p>📍 Concord, NH, USA:</p><Clock format={'LTS'} ticking={true} timezone={'America/New_York'} />
            <p id="bio">Hi. I'm an Information Technology graduate student at the <a href="https://manchester.unh.edu/" target="_blank" rel="noopener noreferrer">University of New Hampshire at Manchester</a>. Over the past few years I've become especially interested in pursuing web development. I enjoy using Python and React to make my ideas come to life. I'm currently working as a freelance web developer while I complete my final year of school.</p>
            <a id="resume" href={resume} target="_blank" rel="noopener noreferrer">resume</a>
        </div>
    )
};

export default About;