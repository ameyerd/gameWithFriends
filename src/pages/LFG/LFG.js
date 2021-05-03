import React, { useState} from 'react';
import Cards2 from '../../components/CardItem/Cards2';

const LFG = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <Cards2 />
            <h3>Your game not found in our library? Make a suggestion <a href="/suggestion">here</a>.</h3>
            
        </>
    );
};

export default LFG;
