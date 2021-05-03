import React, { useState} from 'react';

const ValorantLFG = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <h1>PLAY/VALORANT</h1>
            <p>Add "Leaderboard", messaging board?</p>
            
        </>
    );
};

export default ValorantLFG;