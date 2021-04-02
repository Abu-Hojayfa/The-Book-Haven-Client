import React, { useContext } from 'react';
import './Header.css';
import bg from '../../images/top-bg.png';
import logo from'../../images/logo.jpg';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  const login = () =>{
    history.push('/login');
  };
  const [loggedIn] = useContext(userContext);

  return (
    <div className="body-header">
      <div className="img-bg-top">
        <img src={bg} alt=""/>
      </div>
      <div className="navBar">
        <header className="header">
          <a href="/home" className="logo">
            <img src={logo} alt=""/>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              {
                loggedIn.name ? 
                  <div className="activeIcon">
                    <img src={loggedIn.img} alt=""/>
                    <p>{loggedIn.name}</p>
                  </div>
                  : 
                  <button onClick={login}>
                  LogIn
                  </button>

              }
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;