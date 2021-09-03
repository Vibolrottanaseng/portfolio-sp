import React,{useContext} from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, } from './Data';


function Products() {
    
   

   
    return (
        <>
            
            <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjTwo} />
        </>
    );
}

export default Products;

