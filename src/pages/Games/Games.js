import React, {useState} from 'react';
import Cards from '../../components/CardItem/Cards';

//Navbar
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Games = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>   

            <Cards />
            
        </>
    );
};

export default Games;
