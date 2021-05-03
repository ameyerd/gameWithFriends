import React from 'react';
import {CardContainer, ProfileContainer, SliderContainer, SubHeader} from './FriendCardElements';
import SideImage from './sideImage';
import Details from './Details';

import FriendSlider from '../FriendOneSlider/friendSlider';

const FriendCard = () => {
    return (
        <div>
            <ProfileContainer>
                <CardContainer>
                    <SideImage />
                    <Details />
                    <SliderContainer>
                        <h1>Pesonality Traits</h1>
                        <FriendSlider />
                    </SliderContainer>
                </CardContainer>
            </ProfileContainer>
            
        </div>
    )
}

export default FriendCard;
