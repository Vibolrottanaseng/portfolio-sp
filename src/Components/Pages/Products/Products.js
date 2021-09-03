import React,{useContext} from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, } from './Data';

import { AuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import firebaseConfig from '../../../firebase';


function Products() {
    const {currentUser} = useContext(AuthContext);
   

   
    return (
        <>
            
            <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjTwo} />
        </>
    );
}

export default Products;

