import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return(
    <header>
    <nav>
      <div className="nav-wrapper">
        <a href="/home" className="brand-logo right">Fur Ever</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li className="homeLink">
        <Link to="/home">Home</Link>
        </li>
        <li className="dogsLink">
        <Link to="/dogs">Search Dogs</Link>
        </li>
        <li className="account">
        <Link to="/account/1">My Account</Link>
        </li>
        <li className="galleryLink">
        <Link to="/gallery">Gallery Photos</Link>
        </li>
        </ul>
      </div>
    </nav>
    </header>
  )
}

export default NavBar
