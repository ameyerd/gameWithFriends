import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import valorant from '../../images/valorantlogo.png';
import RL from '../../images/RLlogo.jpg';
import MC from '../../images/mclogo.jpg';
import fortnite from '../../images/fortnitelogo.png';
import overwatch from '../../images/overwatchlogo.png';
import destiny from '../../images/destinylogo.jpg';
import LoL from '../../images/lollogo.jpg';
import WoW from '../../images/wowlogo.jfif';
import codmw from '../../images/codmwlogo.jpg';
import gtaV from '../../images/gtaVlogo.jpg';
import AmongUs from '../../images/amonguslogo.png';
import csgo from '../../images/csgologo.jpg';
import fifa from '../../images/fifalogo.jfif';
import apex from '../../images/apexlogo.jpg';
import r6 from '../../images/r6logo.png';
import rust from '../../images/rustlogo.png';
import eft from '../../images/eftlogo.jpg';
import warzone from '../../images/warzonelogo.jpg';
import dota from '../../images/dota2logo.jpg';
import nba from '../../images/2klogo.jpg';
import bocw from '../../images/bocwlogo.jpeg';
import dbd from '../../images/dbdlogo.jpg';
import sot from '../../images/sotlogo.png';
import madden from '../../images/madden logo.jpg';

function Cards2() {
    return (
        <div className='cards'>
            <h1>Games</h1>
            <h2>Click on a game card to view the messaging board for that game</h2>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={valorant}
                        text='Valorant'
                        label='Valorant'
                        path='/play/valorant'
                        />
                        <div class="v2"></div>
                        <CardItem src={RL}
                        text='Rocket League'
                        label='Rocket League'
                        path='/play/rocketleague'
                        />
                        <div class="v2"></div>
                        <CardItem src={MC}
                        text='Minecraft'
                        label='Minecraft'
                        path='/play/minecraft'
                        />
                        <div class="v2"></div>
                        <CardItem src={fortnite}
                        text='Fortnite'
                        label='Fortnite'
                        path='/play/fortnite'
                        />
                        <div class="v2"></div>
                        <CardItem src={overwatch}
                        text='Overwatch'
                        label='Overwatch'
                        path='/play/overwatch'
                        />
                        <div class="v2"></div>
                        <CardItem src={destiny}
                        text='Destiny'
                        label='Destiny'
                        path='/play/destiny'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={LoL}
                        text='League of Legends'
                        label='League of Legends'
                        path='/play/lol'
                        />
                        <div class="v2"></div>
                        <CardItem src={WoW}
                        text='World of Warcraft'
                        label='World of Warcraft'
                        path='/play/wow'
                        />
                        <div class="v2"></div>
                        <CardItem src={codmw}
                        text='Call of Duty: Modern Warfare'
                        label='Modern Warfare'
                        path='/play/codmw'
                        />
                        <div class="v2"></div>
                        <CardItem src={gtaV}
                        text='Grand Theft Auto V'
                        label='Grand Theft Auto V'
                        path='/play/gtaV'
                        />
                        <div class="v2"></div>
                        <CardItem src={AmongUs}
                        text='Among Us'
                        label='Among Us'
                        path='/play/amongus'
                        />
                        <div class="v2"></div>
                        <CardItem src={csgo}
                        text='Counter-Strike: Global Offensive'
                        label='Counter-Strike: Global Offensive'
                        path='/play/csgo'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={valorant}
                        text='Rainbow Six Seige'
                        label='Rainbow Six Seige'
                        path='/play/r6'
                        />
                        <div class="v2"></div>
                        <CardItem src={eft}
                        text='Escape From Tarkov'
                        label='Escape From Tarkov'
                        path='/play/tarkov'
                        />
                        <div class="v2"></div>
                        <CardItem src={rust}
                        text='Rust'
                        label='Rust'
                        path='/play/rust'
                        />
                        <div class="v2"></div>
                        <CardItem src={dota}
                        text='Dota 2'
                        label='Dota 2'
                        path='/play/dota2'
                        />
                        <div class="v2"></div>
                        <CardItem src={warzone}
                        text='Call of Duty: Warzone'
                        label='Warzone'
                        path='/play/Warzone'
                        />
                        <div class="v2"></div>
                        <CardItem src={apex}
                        text='Apex Legends'
                        label='Apex Legends'
                        path='/play/apex'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={fifa}
                        text='Fifa'
                        label='Fifa'
                        path='/play/fifa'
                        />
                        <div class="v2"></div>
                        <CardItem src={madden}
                        text='Madden'
                        label='Madden'
                        path='/play/madden'
                        />
                        <div class="v2"></div>
                        <CardItem src={nba}
                        text='NBA 2K'
                        label='NBA 2K'
                        path='/play/2K'
                        />
                        <div class="v2"></div>
                        <CardItem src={dbd}
                        text='Dead by Daylight'
                        label='Dead by Daylight'
                        path='/play/dbd'
                        />
                        <div class="v2"></div>
                        <CardItem src={bocw}
                        text='Call of Duty: Black Ops Cold War'
                        label='Black Ops Cold War'
                        path='/play/bocw'
                        />
                        <div class="v2"></div>
                        <CardItem src={sot}
                        text='Sea of Thieves'
                        label='Sea of Thieves'
                        path='/play/seaofthieves'
                        />
                    </ul>
                </div>
            </div>
        </div>

        
    )
}

export default Cards2
