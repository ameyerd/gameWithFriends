import React, {useState} from 'react';

import Cards from '../../components/friendCardItem/Cards';
import Carousel from '../../components/Carousel/carousel';

const Friends = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>   

            <Cards />
            <h1>Friend Suggestions</h1>
            <Carousel />
        </>
    );
};

export default Friends;
