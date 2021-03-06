import React,{useContext} from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, } from './Data';
import { AuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router'


function Products() {
    
   
    const {currentUser} = useContext(AuthContext);
   

    
        
    


   
    return (
        <>
        {currentUser? (
            
           <Redirect to="services"/>
        ):( 
           
            <> <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjTwo} /></>
        )}
        </>
    );
        
    
}

export default Products;

