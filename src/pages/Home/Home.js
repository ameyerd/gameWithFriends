import React, {useState} from 'react';

import { homeObjOne, homeObjTwo, homeObjThree} from './Data'
import InfoSection from '../../components/InfoSection/InfoSection';
import HeroSection from '../../components/HeroSection/HeroSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>   
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    );
};

export default Home;
