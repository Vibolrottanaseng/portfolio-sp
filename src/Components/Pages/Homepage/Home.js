import React, { useContext } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, /*homeObjTwo, */ homeObjThree, homeObjFour } from './Data';
import Templates from '../../Templates';
import { AuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import firebaseConfig from '../../../firebase';
import { Link } from 'react-router-dom';
// import UserProfile from '../UserProfile/UserProfile';


function Home() {





    return (


        <>

            {/* <UserProfile /> */}
            <HeroSection {...homeObjOne}> </HeroSection>

            <Templates />
            <HeroSection {...homeObjThree} />
            {/* <HeroSection {...homeObjTwo} /> */}
            <HeroSection {...homeObjFour} />

        </>
    );
}

export default Home;