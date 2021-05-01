import React from 'react';
import {CardContainer, ProfileContainer, SliderContainer, SubHeader} from './ProfileCardElements';
import SideImage from './sideImage';
import Details from './Details';
import Slider from '../Slider/slider';

const ProfileCard = () => {
    return (
        <div>
            <ProfileContainer>
                <CardContainer>
                    <SideImage />
                    <Details />
                    <SliderContainer>
                        <h1>Personality Traits</h1>
                        <Slider />
                    </SliderContainer>
                </CardContainer>
            </ProfileContainer>
            
        </div>
    )
}

export default ProfileCard;
