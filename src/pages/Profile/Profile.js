import React, { useState} from 'react';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <h1>Profile Page yuh </h1>
            
        </>
    );
};

export default Profile;
