import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import spacedlogo from './spacedlogo.png';
import { Link } from 'react-router-dom';
import UseToken from '../../fetch/Fetch';

const Navbar = () => {
  const { token, setToken } = UseToken();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const logoutUser = async () => {
    await fetch(`/api/auth/logout/`, {
      method: "POST",
      headers: {
        "Authorization": "Token " + token,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      response.json()
      setToken("")
    })
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/" ><img src={spacedlogo} className='logo' alt='logo' /></Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef} onClick={toggleLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>{!token ? <Link to="/login">Login</Link> : <a href="/" onClick={logoutUser}>Logout</a>}</li>
            {/* {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
