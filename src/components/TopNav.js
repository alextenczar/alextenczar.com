import '../scss/nav.scss';
import '../scss/nav.scss';
import React from 'react'
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-top">
          <Link to="/" className="nav-item">alex tenczar</Link>
        </div>
      </nav>
    </>
  )
}

export default TopNav
