import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Synergia-logo.png';
import './App.css';

function Nav() {
  return (
    <nav>
        <ul>
            <Link className="secondary" to="/">
                <img src={logo} alt="Brand Logo" className="brand-logo"/> 
            </Link>           
            <li className="brand-text"><strong><Link className="secondary" to="/">Synergia</Link></strong></li> {/* Apply .brand-text class here */}
        </ul>
        <ul>
            <li><Link className="secondary" to="/">Solutions</Link></li>
            <li><Link className="secondary" to="/Roadmap">Roadmap</Link></li>
            <li>
            <details className="dropdown">
                <summary>
                    Account
                </summary>
                <ul dir="rtl">
                    <li><Link to="/GUI">GUI</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </details>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
