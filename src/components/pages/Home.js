import '../../scss/App.scss';
import '../../scss/home.scss';
import React from 'react';

function Home (props) {
    return (
        <>
        {
            (props.hover === '')
            ? <></>
            : <p className="hover-item">{props.hover}</p>
        }
        </>
    );
}


export default Home;