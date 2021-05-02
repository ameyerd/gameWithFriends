import React, { useState} from 'react';

const LFG = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <h1>THIS IS THE LFG PAGE !! </h1>
            
        </>
    );
};

export default LFG;
