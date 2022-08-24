import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

  return (
    <>
               <nav className={`${styles.navbar} navbar navbar-expand-lg bg-light sticky-top`}>
                <div className="container-fluid">
                  <div style={{width: '200px', height: '50px'}}>
                   <img className='w-100 h-100' src="./Images/intership.jpeg" alt="" />
                  </div>
                  <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link fs-5`} to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link fs-5`} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <div class="dropdown">
                                <NavLink onClick={handleClick} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className={`${styles.navLink} nav-link dropdown-toggle fs-5`} to="/dashboard">Summer Training</NavLink>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">C</a></li>
                                    <li><a class="dropdown-item" href="#">C++</a></li>
                                    <li><a class="dropdown-item" href="#">Java</a></li>
                                    <li><a class="dropdown-item" href="#">Python</a></li>
                                    <li><a class="dropdown-item" href="#">HTMl</a></li>
                                    <li><a class="dropdown-item" href="#">CSS</a></li>
                                    <li><a class="dropdown-item" href="#">JavaScript</a></li>
                                    <li><a class="dropdown-item" href="#">React.Js</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Much more are coming</a></li>
                                </ul>
                              </div>
                            </li>
                        </ul>
                        <div className={`${styles.buttons} d-flex gap-2`}>
                            <button onClick={() => navigate('/login')} className={`${styles.login} btn btn-outline-warning`}>Login</button>
                            <button onClick={() => navigate('/register')} className="btn btn-warning">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar
