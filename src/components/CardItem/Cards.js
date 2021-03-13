import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Games</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='../../images/valorantlogo.png'
                        text='Valorant'
                        label='Valorant'
                        path='/games/valorant'
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
                    <ul className='cards__items'>
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
                        <CardItem src='../../images/gamelogo.png'
                        text='Game'
                        label='Game'
                        path='/games/gameName'
                        />
                    </ul>
                    <ul className='cards__items'>
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
