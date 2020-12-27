import '../scss/nav.scss';
import React, {useState, Component} from 'react'
import { Link } from 'react-router-dom';

class BottomNav extends Component {
  update = (val) => {
    this.props.hoverValue(val);
  }
  render () {
      return (
      <>
        <nav className="nav">
          <div className="nav-bottom">
            <Link to="/about" className="nav-item"  onMouseEnter={() => this.update('who am i?')} onMouseLeave={() => this.update('')}>about</Link>
            <Link to="/projects" className="nav-item"onMouseEnter={() => this.update("things i've worked on.")} onMouseLeave={() => this.update('')}>projects</Link>
            <Link to="/contact" className="nav-item"onMouseEnter={() => this.update('get in touch with me.')} onMouseLeave={() => this.update('')}>contact</Link>
          </div>
        </nav>
      </>
      );
  }
}
export default BottomNav;
