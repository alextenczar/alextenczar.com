import '../../scss/App.scss';
import '../../scss/home.scss';
import React from 'react';

function Home (props) {
    return (
        <div id="home-content">
        {
            (props.hover === '')
            ? <>dadfasadfasdf</>
            : <p className="hover-item">{props.hover}</p>
        }
        </div>
    );
}


export default Home;