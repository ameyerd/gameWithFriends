import React from 'react';
import {SideImageContainer} from './FriendCardElements';

import profileImg from '../../images/user1.png'


const sideImage = () => {
    return (
        <div>
            <SideImageContainer>
                <img src={profileImg} class="img-thumbnail rounded-circle"></img>
            </SideImageContainer>
        </div>
    )
}

export default sideImage
