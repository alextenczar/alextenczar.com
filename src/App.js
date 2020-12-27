import React, { Component } from 'react';
import './scss/App.scss';
import TopNav from './components/TopNav.js';
import BottomNav from './components/BottomNav.js';
import { Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {hover: ""};}

    changeHover = hover => {
      this.setState({
        hover
      });
    };
    

  render() {
    return (
      <div className="wrapper">
        <header>
          <TopNav />
        </header>
        <div id="content" className="content-container">
        <Switch>
            <Route path='/' exact render={(props) => (
            <Home {...props} hover={this.state.hover} />)}/>
            <Route path='/about' exact component={About}/>
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </div>
        <footer>
          <BottomNav hoverValue={this.changeHover}/>
        </footer>
      </div>
    );
  }
}

export default App;
