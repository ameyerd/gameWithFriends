import React, { useState} from 'react';
import friendList from '../../components/friendList/friendList';

const Friends = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <friendList />
        </>
    );
};

export default Friends
