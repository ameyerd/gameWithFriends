import React from 'react';
import CardItem from './CardItem';
import CardItemOnline from './CardItemOnline';
import './Cards.css';
import valorant from '../../images/valorantlogo.png'

function Cards() {
    return (
        <div className='cards'>
            <h1>Your Friends</h1>
            <h6>Click on their card to view their profile!</h6>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemOnline src={valorant}
                        text='Playing: Valorant' //online offline
                        label='@trex' // username
                        path='/games/valorant' //path to user profile
                        />
                        <CardItemOnline src={valorant}
                        text='Playing: Rocket League'
                        label='@chicken1'
                        path='/games/rocketleague' //path to user profile
                        />
                        <CardItemOnline src='../../images/gamelogo.png'
                        text='Playing: Minecraft'
                        label='@noobster77'
                        path='/games/minecraft'
                        />
                        <CardItemOnline src='../../images/gamelogo.png'
                        text='Playing: Destiny'
                        label='@jj001'
                        path='/games/fortnite'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemOnline src='../../images/gamelogo.png'
                        text='Playing: League of Legends'
                        label='@zeusB'
                        path='/games/overwatch'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Offline'
                        label='@cassidy23'
                        path='/games/destiny'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Offline'
                        label='@fuzzybear66'
                        path='/games/apexlegends'
                        />
                        <CardItem src='../../images/gamelogo.png'
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
