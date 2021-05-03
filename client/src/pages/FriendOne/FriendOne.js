import React, { useState} from 'react';
import CardItem from '../../components/CardItem/CardItem';
import {SingleCardContainer, GamesContainer} from './FriendOneElements';

import FriendCard from '../../components/FriendOneCard/FriendCard';
import valorant from '../../images/valorantlogo.png'

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <FriendCard />
            
            <h1>Games They Play</h1>

            <GamesContainer>
                <SingleCardContainer>
                    <CardItem src={valorant}
                        text='Valorant'
                        label='Valorant'
                        path='/games/valorant'
                    />
                </SingleCardContainer>
                <SingleCardContainer>
                    <CardItem src='img.jpg'
                        text='Call of Duty: Modern Warfare'
                        label='Call of Duty: Modern Warfare'
                        path='/games/cod'
                    />
                </SingleCardContainer>
                <SingleCardContainer>
                    <CardItem src='img.jpg'
                        text='Minecraft'
                        label='Minecraft'
                        path='/games/minecraft'
                    />
                </SingleCardContainer>
            </GamesContainer>

        </>
    );
};


export default Profile;
