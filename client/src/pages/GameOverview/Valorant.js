import React, { useState} from 'react';
import banner from '../../images/valorantbanner.jpg';
import { Button } from 'react-bootstrap';
import "./banner.css";
import HeroSection from '../../components/HeroSection/HeroSection';

const ValorantG = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <HeroSection></HeroSection>
            
        </>
    );
};

export default ValorantG;
