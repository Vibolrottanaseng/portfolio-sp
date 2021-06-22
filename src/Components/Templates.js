import React from 'react';
import { Button } from './Button';
import './Templates.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Templates() {
    return (
        <IconContext.Provider value={{ color: '#00000', size: 64 }}>
            <div className='Templates__section'>
                <div className='Templates__wrapper'>
                    <h1 className='Templates__heading'>Templates</h1>
                    <div className='Templates__container'>
                        <Link to='/sign-up' className='Templates__container-card'>
                            <div className='Templates__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Simple</h3><br></br>

                                <ul className='Templates__container-features'>
                                    <li>Clean & Timeless Templates</li>
                                    <li>Classic Balanced Structure</li>
                                    <li>Basic Canvas</li>
                                </ul>
                                <br></br>
                                <Button buttonSize='btn--wide' buttonColor='black'>
                                    Select
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='Templates__container-card'>
                            <div className='Templates__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Professional</h3>
                                <br></br>
                                <ul className='Templates__container-features'>
                                    <li>Job-winning Templates</li>
                                    <li>Showcase Professionalism</li>
                                    <li>Dependabilities and Expertise</li>
                                </ul>
                                <br></br>
                                <Button buttonSize='btn--wide' buttonColor='green'>
                                    Select
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='Templates__container-card'>
                            <div className='Templates__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Creative</h3>
                                <br></br>
                                <ul className='Templates__container-features'>
                                    <li>Perfect for Artistic field</li>
                                    <li>Comtemporary Companies</li>
                                    <li>Attractive Design</li>
                                </ul>
                                <br></br>
                                <Button buttonSize='btn--wide' buttonColor='black'>
                                    Select
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Templates;