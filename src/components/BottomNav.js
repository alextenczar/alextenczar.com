import '../scss/nav.scss';
import React, {useState, Component} from 'react'
import { NavLink } from 'react-router-dom';

class BottomNav extends Component {
  update = (val) => {
    this.props.hoverValue(val);
  }
  render () {
      return (
      <>
        <nav className="nav">
          <div className="nav-bottom">
            <NavLink to="/about" className="nav-item" activeClassName="selected" onMouseEnter={() => this.update('who am i?')} onMouseLeave={() => this.update('')}>about</NavLink>
            <NavLink to="/projects" className="nav-item" activeClassName="selected"onMouseEnter={() => this.update("things i've worked on.")} onMouseLeave={() => this.update('')}>projects</NavLink>
            <NavLink to="/contact" className="nav-item" activeClassName="selected"onMouseEnter={() => this.update('get in touch with me.')} onMouseLeave={() => this.update('')}>contact</NavLink>
          </div>
        </nav>
      </>
      );
  }
}
export default BottomNav;
