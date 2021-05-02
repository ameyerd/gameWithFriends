import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import valorant from '../../images/valorantlogo.png'

function Cards() {
    return (
        <div className='cards'>
            <h1>Games</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={valorant}
                        text='Valorant'
                        label='Valorant'
                        path='/games/valorant'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Rocket League'
                        label='Rocket League'
                        path='/games/rocketleague'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Minecraft'
                        label='Minecraft'
                        path='/games/minecraft'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Fortnite'
                        label='Fortnite'
                        path='/games/fortnite'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='../../images/gamelogo.png'
                        text='Overwatch'
                        label='Overwatch'
                        path='/games/overwatch'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Destiny'
                        label='Destiny'
                        path='/games/destiny'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Apex Legends'
                        label='Apex Legends'
                        path='/games/apexlegends'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='League of Legends'
                        label='League of Legends'
                        path='/games/lol'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='../../images/gamelogo.png'
                        text='World of Warcraft'
                        label='World of Warcraft'
                        path='/games/wow'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Game'
                        label='Game'
                        path='/games/gameName'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Game'
                        label='Game'
                        path='/games/gameName'
                        />
                        <CardItem src='../../images/gamelogo.png'
                        text='Game'
                        label='Game'
                        path='/games/gameName'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
