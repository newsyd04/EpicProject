import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Synergia-logo.png';
import './App.css';

function InnerNav() {
  return (
    <nav>
        <ul>
            <img src={logo} alt="Brand Logo" className="brand-logo"/>            
            <li className="brand-text"><strong>Synergia</strong></li> {/* Apply .brand-text class here */}
        </ul>
        <ul>
            <li><Link className="secondary" to="/">Solutions</Link></li>
            <li>
            <details className="dropdown">
                <summary>
                    Account
                </summary>
                <ul dir="rtl">
                <li><Link to="/Documentation">Profile</Link></li>
                    <li><Link to="/Chat">Chat</Link></li>
                    <li><Link to="/Search">Search</Link></li>
                    <li><Link to="/CMS">CMS</Link></li>
                    <li><Link to="/login">Roisin</Link></li>
                    <li><Link to="/">Log Out</Link></li>
                </ul>
            </details>
            </li>
        </ul>
    </nav>
  );
}


export default InnerNav;
