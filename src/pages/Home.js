import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen]  = useState(false)

    //update state
    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
        </>
    );
};

export default Home
