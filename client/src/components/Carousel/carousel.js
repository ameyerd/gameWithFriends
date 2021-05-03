import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardItem from '../friendCardItem/CardItem';
import '../friendCardItem/Cards.css';

//user images
import user9 from '../../images/user9.jpeg';
import user10 from '../../images/user10.png';
import user11 from '../../images/user11.png';
import user12 from '../../images/user12.png';
import user13 from '../../images/user13.jpeg';
import user14 from '../../images/user14.jpeg';
import user15 from '../../images/user15.jpeg';
import user16 from '../../images/user16.jpeg';
import user17 from '../../images/user17.jpeg';
//import user18 from '../../images/user18.jpeg';


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>

        <Slider {...settings}>
            <div className='cards__wrapper'>
                <CardItem src={user9}
                text='Valorant, Minecraft, Destiny'
                label='@bboy71'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user10}
                text='Valorant, Destiny'
                label='@shrimpman'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user11}
                text='Minecraft'
                label='@pinky'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user12}
                text='Destiny, Overwatch'
                label='@wowo9'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user13}
                text='League of Legends'
                label='@pikachew'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user14}
                text='Apex Legends, Call of Duty: Modern Warfare'
                label='@bobbyj'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user15}
                text='World of Warcraft, Among Us'
                label='@flipper8'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user16}
                text='Counter-Strike: Global Offensive, Among Us'
                label='@kelli0'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src={user17}
                text='Escape From Tarkov, Apex Legends'
                label='@robloxman1'
                path='/games/valorant'
                />
            </div>
          
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 5000px;
}

.slick-next:before, .slick-prev:before {
    color: #DA4264;
}
`