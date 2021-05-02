import React from 'react'
import aiman from '../img/aiman2.png';
import {NavLink} from 'react-router-dom';
import '../styles/animation-border.css';

function Navbar() {
    return (
        <div className="NavBar gradient-border">
            <nav className="nav">
                <div className="profile">
                    <img src={aiman} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Ahad Hossain Aiman
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
