import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return(
    <header>
    <h2>For the love of Dog</h2> <img src="https://previews.123rf.com/images/elena3567/elena35671711/elena3567171100040/89834483-%E4%B8%AD%E5%BF%83%E9%83%A8%E3%81%AB%E7%8A%AC%E3%81%AE%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF.jpg" alt="logo" height="10%" width="10%"/>
    <ul>
    <li className="homeLink">
    <Link to="/home">Home</Link>
    </li>
    <li className="dogsLink">
    <Link to="/dogs">Search Dogs</Link>
    </li>
    <li className="account">
    <Link to="/account">My Account</Link>
    </li>
    <li className="galleryLink">
    <Link to="/gallery">Gallery Photos</Link>
    </li>
    </ul>
    </header>
  )
}

export default NavBar
