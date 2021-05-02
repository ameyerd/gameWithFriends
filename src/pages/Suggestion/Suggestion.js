import React, { useState} from 'react';

const Suggestion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <h1>SUGGESTION PAGE, Ill add form to submit game suggestion tomorrow</h1>
            
        </>
    );
};

export default Suggestion;