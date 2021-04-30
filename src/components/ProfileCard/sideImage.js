import React from 'react';
import {SideImageContainer, Hname} from './ProfileCardElements';

import Image from 'react-bootstrap/Image'
import valorant from '../../images/valorantlogo.png'

//Hname should use info from loggin in user

const sideImage = () => {
    return (
        <div>
            <SideImageContainer>
                <Image src={valorant} roundedCircle />
                <Hname>@trex-test</Hname> 
            </SideImageContainer>
        </div>
    )
}

export default sideImage
