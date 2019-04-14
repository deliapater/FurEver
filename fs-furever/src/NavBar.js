import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return(
    <header>
    <h2>For the love of Dog</h2>
    <ul>
      <li className="homeLink">
      <Link to="/home">Home</Link>
      </li>
      <li className="ownersLink">
      <Link to="/owners">Owners</Link>
      </li>
      <li className="messagesLink">
      <Link to="/messages">My Messages</Link>
      </li>
    </ul>
    </header>
  )
}

export default NavBar
