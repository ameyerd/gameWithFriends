import React, { useState} from 'react';

const ValorantG = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <h1>GAMES/VALORANT</h1>
            <p>Add game banner, description, release date, maybe trailer video. Button for "Add Game To List"</p>
            
        </>
    );
};

export default ValorantG;
