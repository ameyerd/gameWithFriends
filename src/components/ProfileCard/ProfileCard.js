import React from 'react';
import {CardContainer, ProfileContainer} from './ProfileCardElements';
import SideImage from './sideImage';
import Details from './Details';

const ProfileCard = () => {
    return (
        <div>
            <ProfileContainer>
                <CardContainer>
                    <SideImage />
                    <Details />
                </CardContainer>
            </ProfileContainer>
            
        </div>
    )
}

export default ProfileCard;
