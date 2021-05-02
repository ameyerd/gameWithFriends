import React, { useState} from 'react';
import Login from '../../components/LogInComponent/Login';

const SignIn = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <Login/>
            
        </>
    );
};

export default SignIn;
