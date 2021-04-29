import React, {useState} from 'react';

import Cards from '../../components/friendCardItem/Cards';

const Friends = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>   

            <Cards />
            <h1>Friend Suggestions</h1>
        </>
    );
};

export default Friends;
