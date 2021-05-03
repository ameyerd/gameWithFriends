import React from 'react';
import CardItem from './CardItem';
import CardItemOnline from './CardItemOnline';
import './Cards.css';

// image imports
import valorant from '../../images/valorantlogo.png'
import user1 from '../../images/user1.png';
import user2 from '../../images/user2.jpeg';
import user3 from '../../images/user3.jpeg';
import user4 from '../../images/user4.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Your Friends</h1>
            <h6>Click on their card to view their profile!</h6>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemOnline src={user1}
                        text='Playing: Valorant' //online offline
                        label='@trex' // username
                        path='/friends/friend-one' //path to user profile
                        />
                        <CardItemOnline src={user2}
                        text='Playing: Rocket League'
                        label='@chicken1'
                        path='/games/rocketleague' //path to user profile
                        />
                        <CardItemOnline src={user3}
                        text='Playing: Minecraft'
                        label='@noobster77'
                        path='/games/minecraft'
                        />
                        <CardItemOnline src={user4}
                        text='Playing: Destiny'
                        label='@jj001'
                        path='/games/fortnite'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemOnline src={valorant}
                        text='Playing: League of Legends'
                        label='@zeusB'
                        path='/games/overwatch'
                        />
                        <CardItem src={valorant}
                        text='Offline'
                        label='@cassidy23'
                        path='/games/destiny'
                        />
                        <CardItem src={valorant}
                        text='Offline'
                        label='@fuzzybear66'
                        path='/games/apexlegends'
                        />
                        <CardItem src={valorant}
                        text='Offline'
                        label='@legendaryEagle'
                        path='/games/lol'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
