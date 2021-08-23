// import React, { useRef } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, /*homeObjTwo, */ homeObjThree, homeObjFour } from './Data';
import Templates from '../../Templates';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Templates />
            <HeroSection {...homeObjThree} />
            {/* <HeroSection {...homeObjTwo} /> */}
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default Home;