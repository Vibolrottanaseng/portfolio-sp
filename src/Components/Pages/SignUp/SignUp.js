import React from 'react';
import Form from '../../Form';
import HeroSection from '../../HeroSection';
import { homeObjOne, /*homeObjThree*/ } from './Data';


function SignUp() {
    return (
        <>
            <Form />
            <HeroSection {...homeObjOne} />


        </>
    );
}

export default SignUp;



