import React, { useState} from 'react';

import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ProfileCard />
            
        </>
    );
};


export default Profile;
