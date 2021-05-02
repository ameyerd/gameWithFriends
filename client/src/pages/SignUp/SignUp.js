import React, { useState} from 'react';
import Signup from '../../components/SignUpComponent/Signup';

const SignUp = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <Signup />
            
        </>
    );
};

export default SignUp;
