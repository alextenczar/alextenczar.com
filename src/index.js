import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>    
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);