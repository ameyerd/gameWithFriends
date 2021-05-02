import React from 'react';
import {SideImageContainer} from './ProfileCardElements';

import Image from 'react-bootstrap/Image'
import valorant from '../../images/user4.jpg'


const sideImage = () => {
    return (
        <div>
            <SideImageContainer>
                <img src={valorant} class="img-thumbnail rounded-circle"></img>
            </SideImageContainer>
        </div>
    )
}

export default sideImage
