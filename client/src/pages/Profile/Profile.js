import React, { useState} from 'react';
import CardItem from '../../components/CardItem/CardItem';
import {SingleCardContainer, GamesContainer} from './ProfileElements';

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import valorant from '../../images/valorantlogo.png';
import destiny from '../../images/destinylogo.jpg';
import minecraft from '../../images/mclogo.jpg';


const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ProfileCard />
            
            <h1>Games You Play</h1>

            <GamesContainer>
                <SingleCardContainer>
                    <CardItem src={valorant}
                        text='Valorant'
                        label='Valorant'
                        path='/games/valorant'
                    />
                </SingleCardContainer>
                <SingleCardContainer>
                    <CardItem src={destiny}
                        text='Destiny'
                        label='Destiny'
                        path='/games/destiny'
                    />
                </SingleCardContainer>
                <SingleCardContainer>
                    <CardItem src={minecraft}
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
