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

    returnThemeBasedOnTime(){
      const root = document.documentElement
      let date = new Date
      const hour = date.getHours()
      if(this.returnThemeBasedOnOS === undefined){
        if (hour > 20 || hour < 5) {
          root.classList.add('dark')
          root.classList.remove('light')
        }
        else {
          root.classList.add('light')
          root.classList.remove('dark')
        }
      } 
    }

    returnThemeBasedOnOS() {
      const root = document.documentElement
      let pref = window.matchMedia('(prefers-color-scheme: dark)')
      if (pref.matches) root.classList.add('dark')
      else {
        pref = window.matchMedia('(prefers-color-scheme: light)')
        if (pref.matches) root.classList.add('light')
        else return undefined
      }
    }
    
    componentDidMount() {
      this.returnThemeBasedOnOS();
      this.returnThemeBasedOnTime();
    }

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
