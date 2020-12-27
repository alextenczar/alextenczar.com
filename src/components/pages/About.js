import '../../scss/App.scss';
import Clock from 'react-live-clock';
import '../../scss/about.scss'

function About () {
    return (
        <div id="About">
            <p>About</p>
            <div className="location-time">
            <p>📍 concord, nh:</p><Clock format={'LTS'} ticking={true} timezone={'America/New_York'} />
        </div>
        
        </div>
    )
};

export default About;