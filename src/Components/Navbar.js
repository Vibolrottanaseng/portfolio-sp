import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaPinterestP } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        }
    }, [])


    return (
        <>
            <IconContext.Provider value={{ color: '#2CE080' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <FaPinterestP className='navbar-icon' />
                            ortfolio
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Templates
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/products'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Get Started</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}
                                        >

                                        </Button>
                                    </Link>
                                )}
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;