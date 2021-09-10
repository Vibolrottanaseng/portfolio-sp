import React from 'react';
import { Button } from './Button';
import './Templates.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function UserProfile() {
    return (
        <IconContext.Provider value={{ color: '#00000', size: 64 }}>
            <div className='Templates__section'>
                <div className='Templates__wrapper'>
                    <h1 className='Templates__heading'>Templates</h1>
                   
                   
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default UserProfile;